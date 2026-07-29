import { absoluteSiteUrl } from "../../site.config.mjs";

export const metadata = {
  title: "Thank You | Furthermore",
  description: "Thank you for contacting Furthermore. We have received your strategy call request.",
  alternates: {
    canonical: absoluteSiteUrl("/thank-you")
  },
  robots: {
    index: false,
    follow: true
  }
};

export default function ThankYouPage() {
  return (
    <main className="thank-you-page">
      <section className="thank-you-hero" aria-labelledby="thank-you-title">
        <div className="container thank-you-panel">
          <a className="brand thank-you-logo" href="/">
            <img className="brand-logo" src="/assets/images/furthermore/furthermore-logo.png" alt="" />
            <span className="sr-only">Furthermore - AI / Blockchain / Software</span>
          </a>
          <p className="eyebrow">Request received</p>
          <h1 id="thank-you-title">Thank you. We have your strategy call request.</h1>
          <p>
            We will review your project details and get back to you with next steps. Your submission has been sent to the
            Furthermore team.
          </p>
          <div className="thank-you-actions">
            <a className="btn btn-primary" href="/">Back to Homepage</a>
            <a className="btn btn-secondary" href="/#standard">See The Standard</a>
          </div>
        </div>
      </section>
    </main>
  );
}
