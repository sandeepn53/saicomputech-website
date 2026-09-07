# Email Configuration Guide

This website now supports email notifications via contact form submissions using Resend and Cloudflare Workers.

## Setup Instructions

### 1. Get a Resend API Key

1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Go to API Keys section and create a new API key
4. Copy the key (starts with `re_`)

### 2. Configure Cloudflare Worker

#### Option A: Using Cloudflare Dashboard (Recommended)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your domain (saicomputech.com)
3. Navigate to **Workers & Pages** → **Create application**
4. Create a new worker named `contact-email`
5. Copy the code from `src/worker.ts` into the worker editor
6. Click **Deploy**
7. Go to **Settings** → **Secrets** → **Add secret**
   - Name: `RESEND_API_KEY`
   - Value: Your Resend API key from step 1

#### Option B: Using Wrangler CLI

```bash
# Install Wrangler if not already installed
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Set the API key as a secret
wrangler secret put RESEND_API_KEY
# Paste your Resend API key when prompted

# Deploy the worker
wrangler deploy
```

### 3. Configure DNS Routing (Cloudflare Dashboard)

1. In your Cloudflare dashboard, go to **Workers & Pages**
2. Click on your worker
3. Go to **Triggers** → **Routes** → **Add route**
4. Add route: `saicomputech.com/api/contact*`
5. Select the worker `contact-email`
6. Save

### 4. Verify Email Sending

1. Go to your website's contact form
2. Fill in the form and submit
3. Check:
   - Your inbox (confirmation email)
   - info@saicomputech.com inbox (notification email)

## How It Works

1. **User submits contact form** on the website
2. **Frontend** sends form data to `/api/contact` endpoint
3. **Cloudflare Worker** receives the request
4. **Worker** validates the data and calls Resend API
5. **Resend** sends two emails:
   - Confirmation email to the user
   - Notification email to info@saicomputech.com
6. **User** sees a success message

## Email Configuration

### Sender Email

The contact form sends emails from: `contact@saicomputech.com`

To change this:
1. In `src/worker.ts`, find the line: `from: "contact@saicomputech.com",`
2. Change to your preferred sender email
3. Verify the domain in Resend dashboard

### Recipient Email

Notification emails go to: `info@saicomputech.com`

To change this:
1. In `src/worker.ts`, find the line: `to: "info@saicomputech.com",`
2. Change to your preferred email

## Troubleshooting

### Emails not being sent

1. Check Resend API key is correctly set in Cloudflare secrets
2. Verify domain verification in Resend dashboard
3. Check Cloudflare Worker logs for errors:
   - Go to Workers → Your worker → Logs

### "Failed to process your inquiry" error

1. Check that Resend API key is valid
2. Ensure the sender email domain is verified in Resend
3. Check network tab in browser dev tools for error details

### Emails going to spam

1. Verify your domain DNS records in Resend
2. Add SPF, DKIM, and DMARC records as shown in Resend dashboard
3. Use a dedicated domain email (not gmail, etc.)

## Costs

- **Resend**: Free tier includes 100 emails/day (plenty for contact forms)
- **Cloudflare Workers**: Free tier includes 100,000 requests/day
- **Total**: Completely free for typical usage

## Additional Resources

- [Resend Documentation](https://resend.com/docs)
- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Guide](https://developers.cloudflare.com/workers/wrangler/)
