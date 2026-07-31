import { reviews } from "../data/reviews";

export default function Reviews() {
  const positiveReviews = reviews.filter((review) => review.rating >= 4);

  return (
    <section id="reviews" className="bg-slate-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0f6db1]">Reviews</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          What our customers say
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Trusted by happy clients across Bengaluru for dependable service, honest advice, and long-term support.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {positiveReviews.map((review) => (
            <article
              key={review.id}
              className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-left shadow-sm"
            >
              <div className="text-2xl text-amber-500">{"★".repeat(review.rating)}</div>
              <p className="mt-4 text-lg leading-8 text-slate-700">“{review.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-sm text-slate-500">{review.role}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://www.google.com/search?q=SAI+COMPUTECH&stick=H4sIAAAAAAAA_-NgU1I1qDBOSkw1NDcxNzRPNjU1szC2MqgwTDJOMjVKNjVIM7VIsTQyXsTKG-zoqeDs7xsQGuLq7AEA91zL7DkAAAA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[#0f6db1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0b3f6b]"
          >
            View all Google reviews
          </a>
        </div>
      </div>
    </section>
  );
}