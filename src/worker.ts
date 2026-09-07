/**
 * Cloudflare Worker for handling contact form submissions
 * Sends emails using Resend API
 */

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default {
  async fetch(request: Request, env: any): Promise<Response> {
    // Handle CORS preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    try {
      const data: ContactFormData = await request.json();

      // Validate input
      if (!data.name || !data.email || !data.message) {
        return new Response(
          JSON.stringify({ error: "Missing required fields" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }

      // Send email using Resend
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "contact@saicomputech.com",
          to: "info@saicomputech.com",
          reply_to: data.email,
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
            <p><strong>Message:</strong></p>
            <p>${escapeHtml(data.message).replace(/\n/g, "<br/>")}</p>
          `,
          text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Message:
${data.message}
          `,
        }),
      });

      if (!resendResponse.ok) {
        const error = await resendResponse.json();
        console.error("Resend API error:", error);
        throw new Error(`Failed to send email: ${JSON.stringify(error)}`);
      }

      // Send confirmation email to user
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "contact@saicomputech.com",
          to: data.email,
          subject: "We received your inquiry - Sai Computech",
          html: `
            <h2>Thank you for contacting Sai Computech!</h2>
            <p>Hi ${escapeHtml(data.name)},</p>
            <p>We have received your inquiry and will get back to you within 24 hours.</p>
            <p>Your message:</p>
            <p style="color: #666; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
            <p>Best regards,<br/>Sai Computech Team</p>
          `,
          text: `
Thank you for contacting Sai Computech!

Hi ${data.name},

We have received your inquiry and will get back to you within 24 hours.

Your message:
${data.message}

Best regards,
Sai Computech Team
          `,
        }),
      }).catch((err) => console.error("Confirmation email error:", err));

      return new Response(
        JSON.stringify({
          success: true,
          message: "Your inquiry has been sent successfully!",
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    } catch (error) {
      console.error("Error processing contact form:", error);
      return new Response(
        JSON.stringify({
          error: "Failed to process your inquiry. Please try again later.",
          details: error instanceof Error ? error.message : String(error),
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }
  },
};

function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
