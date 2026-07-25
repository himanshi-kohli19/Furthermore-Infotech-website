import Header from "./components/Header";

const services = [
  {
    title: "AI Development and Automation",
    eyebrow: "AI systems",
    icon: "/assets/images/service-icon-01.png",
    text: "AI agents, RAG assistants and workflow automation built around your data, tools and approval flows.",
    items: ["AI agent development", "RAG applications", "Business automation"]
  },
  {
    title: "Blockchain and Web3 Development",
    eyebrow: "Digital assets",
    icon: "/assets/images/service-icon-02.png",
    text: "Secure Web3 products for RWA tokenization, digital wallets, smart contracts, payments and identity.",
    items: ["RWA tokenization", "Digital wallets", "Smart contracts"]
  },
  {
    title: "Custom Software Development",
    eyebrow: "Product engineering",
    icon: "/assets/images/service-icon-03.png",
    text: "The engineering backbone that ships our AI and blockchain work - fast, scalable web apps, mobile apps, SaaS platforms, dashboards and APIs engineered to scale.",
    items: ["Next.js development", "Mobile apps", "API integrations"]
  }
];

const heroHighlights = [
  {
    title: "Architecture spec",
    text: "A dedicated Solution Architect and Product Manager translate the business goal before code begins.",
    image: "/assets/images/video-big-thumb-03.png",
    alt: "Architecture planning for audit-ready AI and blockchain software"
  },
  {
    title: "Passing test suite",
    text: "AI coding agents build test-driven software around your data, tools and approval flows.",
    image: "/assets/images/portfolio-01.jpg",
    alt: "Test-driven AI and blockchain product interface"
  },
  {
    title: "Written audit report",
    text: "Senior engineers and human QA verify the delivery so third parties can inspect the work.",
    image: "/assets/images/portfolio-04.jpg",
    alt: "Written software audit report and quality review"
  }
];

const standardGates = [
  ["01", "Architects plan", "Every project is assigned a dedicated Solution Architect and Product Manager. They translate your business goals into a system architecture, product roadmap and compliance requirements - before a single line of code is written.", "Architecture and product spec"],
  ["02", "Agents build", "Our proprietary coding agents write test-driven code around the clock - every feature backed by tests before it reaches review.", "Passing test suite"],
  ["03", "Humans break", "Senior engineers review every line. Human QA hunts the bugs machines miss - real devices, real flows, real edge cases.", "Review and QA log"],
  ["04", "Auditors sign off", "Before delivery, we audit the finished product against third-party standards: security, performance, code quality and coverage.", "Written audit report"],
  ["05", "You verify", "The report is yours. Hand it to a future CTO, an investor, or any third-party audit firm. It will hold.", "Your proof"]
];

const regulatedMarkets = [
  {
    title: "Virtual Assets and Web3",
    text: "Engineered to meet the technical expectations of VARA (Dubai), ADGM FSRA and DFSA (UAE), MiCA (EU) and MAS (Singapore) - custody controls, transaction monitoring hooks, KYC/AML integrations and on-chain audit trails."
  },
  {
    title: "AI Governance",
    text: "Built to align with the EU AI Act, ISO/IEC 42001 and the NIST AI Risk Management Framework - model documentation, human-in-the-loop controls, explainability and usage logging."
  },
  {
    title: "Data and Security",
    text: "GDPR and UAE PDPL-aligned data handling, SOC 2-style controls, encryption at rest and in transit, role-based access and full audit logs."
  }
];

const stack = [
  ["AI", "OpenAI, Gemini, Anthropic, LangChain, RAG, vector databases, LLM agents"],
  ["Frontend", "Next.js, React, TypeScript, JavaScript, HTML5, CSS3"],
  ["Backend", "Node.js, Python, REST APIs, WebSockets, microservices"],
  ["Blockchain", "Ethereum, Polygon, Solidity, smart contracts, ERC standards, Web3"],
  ["Automation", "n8n, Zapier, Make, webhooks, CRM automation, orchestration"],
  ["Data Systems", "PostgreSQL, MySQL, MongoDB, Redis, vector databases, analytics"]
];

const industries = [
  "Fintech",
  "Real Estate",
  "E-commerce",
  "Education",
  "Marketing",
  "SaaS",
  "Supply Chain",
  "Enterprise"
];

const faqs = [
  ["What is audit-ready software?", "Software that can pass inspection by an independent third party - documented, test-covered, secure and maintainable. Every Furthermore project ships with a written audit report proving it."],
  ["How can Furthermore be cheaper and higher quality than an agency?", "AI agents compress the expensive part - engineering hours - while a dedicated Solution Architect, senior engineers, human QA and a final audit protect quality. You pay for verified output, not billable hours."],
  ["Who manages my project?", "A dedicated Solution Architect and Product Manager lead every project - one accountable team from architecture spec to audited delivery, so you never manage developers yourself."],
  ["Do humans review the AI-written code?", "Yes. Every line is reviewed by senior engineers and tested by human QA before the final audit. AI writes fast; humans decide what ships."],
  ["Can you build software that complies with VARA, MiCA or the EU AI Act?", "Yes. We engineer the technical controls these frameworks require - audit trails, KYC/AML integrations, custody controls, model documentation and data protection - so your product is ready for regulatory and third-party inspection. Licensing and legal strategy remain with your counsel."],
  ["What do I receive at the end of a project?", "Your product, full source code, the architecture spec, the passing test suite, the QA log, and a written audit report you can show any CTO, investor, regulator or auditing firm."]
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Furthermore",
  url: "https://www.yourdomain.com/",
  description:
    "Furthermore is a specialist AI and blockchain software development company building audit-ready products with dedicated architecture, AI coding agents, senior engineering review, human QA and written audit reports.",
  areaServed: ["India", "Global"],
  knowsAbout: [
    "AI development company",
    "Blockchain development company",
    "Audit-ready software",
    "Test-driven development",
    "RWA tokenization",
    "Digital wallet development",
    "VARA compliant software development",
    "MiCA compliance",
    "EU AI Act compliance"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "hello@yourdomain.com",
    contactType: "sales",
    areaServed: "Global"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: {
      "@type": "Answer",
      text: answer
    }
  }))
};

function SectionHeading({ eyebrow, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI / BLOCKCHAIN / AUDIT-READY SOFTWARE</p>
              <h1 id="hero-title">
                AI and Blockchain Software Built to Pass Every Audit - Priced to Move Your Business <span>Furthermore</span>
              </h1>
              <p className="hero-kicker">
                Specialist AI and blockchain development for startups and growing businesses that need proof, not promises.
              </p>
              <p className="hero-description">
                Furthermore is a specialist AI and blockchain software development company for startups and growing businesses.
                Every project is led by a dedicated Solution Architect and Product Manager; AI coding agents build test-driven
                software; senior engineers and human QA verify it; every delivery ships with a written audit report that stands
                up to third-party and regulatory review - at below-agency prices.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Start Your Project</a>
                <a className="btn btn-secondary" href="#standard">See The Standard</a>
              </div>
              <div className="hero-proof" aria-label="Project proof points">
                <span><strong>Architects plan</strong> Product clarity before code</span>
                <span><strong>Agents build</strong> Test-driven software at speed</span>
                <span><strong>Auditors sign off</strong> Written proof you can verify</span>
              </div>
            </div>

            <div className="hero-showcase" aria-label="Audit-ready AI and blockchain service highlights">
              <div className="showcase-panel">
                <div className="hero-product-card">
                  <img src="/assets/images/banner-right-image.png" alt="Audit-ready AI blockchain and custom software development" />
                  <div>
                    <span>The Furthermore Standard</span>
                    <strong>Build software that stands up to CTOs, auditors and regulators.</strong>
                    <p>Architecture specs, passing tests, human QA logs and written audit reports from one accountable delivery process.</p>
                  </div>
                </div>
                <div className="hero-highlight-grid">
                  {heroHighlights.map((item) => (
                    <article key={item.title}>
                      <img src={item.image} alt={item.alt} />
                      <div>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="standard section-shell alt-section" id="standard" aria-labelledby="standard-title">
          <div className="container standard-grid">
            <div>
              <p className="eyebrow">The Furthermore Standard</p>
              <h2 id="standard-title">Architects plan. Agents build. Humans break. Auditors sign off.</h2>
              <p>
                You can't read code. You shouldn't have to. Every project passes five gates - and every gate leaves proof you can read.
              </p>
              <p className="standard-closer">Don't trust us. Trust the process.</p>
            </div>
            <div className="standard-gates">
              {standardGates.map(([number, title, text, artifact]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <strong>{artifact}</strong>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="economics section-shell" aria-labelledby="economics-title">
          <div className="container economics-grid">
            <div className="video-frame">
              <img src="/assets/images/video-big-thumb-01.png" alt="Senior engineers reviewing AI-written code and audit reports" />
            </div>
            <div>
              <p className="eyebrow">The economics</p>
              <h2 id="economics-title">Why is Furthermore cheaper than a traditional agency?</h2>
              <p>
                Because our agents don't bill by the hour. Agencies charge you for senior engineers typing.
                We charge you for senior engineers thinking - architecting, reviewing, breaking, and auditing what our AI agents
                build at machine speed. Fewer billable hours. Same senior judgment. Stricter quality gates.
              </p>
              <p className="economics-punchline">Agents cut the hours. Not the corners.</p>
            </div>
          </div>
        </section>

        <section className="services section-shell alt-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="What we build" title="Specialists in AI and blockchain - not another generalist dev shop.">
              AI and blockchain are not services we bolted on. They are the core practice - backed by product engineering that
              makes them ship-ready. A focused team for AI development, blockchain development, Next.js web development, mobile
              apps and custom software engineering.
            </SectionHeading>
            <div className="service-grid">
              {services.map((service) => (
                <article className="service-card" key={service.title}>
                  <div className="service-icon">
                    <img src={service.icon} alt="" />
                  </div>
                  <span>{service.eyebrow}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
            <p className="grid-footer-line">Every build ships audit-ready - The Furthermore Standard included.</p>
          </div>
        </section>

        <section className="regulated section-shell" id="regulated-markets" aria-labelledby="regulated-title">
          <div className="container solutions-grid">
            <div>
              <p className="eyebrow">Regulated markets</p>
              <h2 id="regulated-title">Software that regulators can inspect.</h2>
              <p>
                If you operate in finance, virtual assets or AI, your software is a regulatory exhibit. We engineer the technical
                controls regulators expect - audit trails, data protection, KYC/AML hooks, model documentation - into the build
                from day one, not retrofitted after a warning letter.
              </p>
              <p className="regulated-closer">We engineer the controls. Your legal counsel owns the license. Together, you pass the inspection.</p>
            </div>
            <div className="solution-board regulated-board">
              {regulatedMarkets.map((market) => (
                <article key={market.title}>
                  <span>{market.title}</span>
                  <p>{market.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="stack section-shell alt-section" id="technology-stack" aria-labelledby="stack-title">
          <div className="container">
            <SectionHeading eyebrow="Technology stack" title="The modern stack behind audit-ready products" />
            <div className="stack-grid">
              {stack.map(([title, text]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="industry-tags" aria-label="Industries served">
              {industries.map((industry) => <span key={industry}>{industry}</span>)}
            </div>
          </div>
        </section>

        <section className="faq section-shell" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <SectionHeading eyebrow="FAQ" title="Audit-ready answers for founders" />
            <div className="faq-list">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>{question}</summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="contact section-shell alt-section" id="contact" aria-labelledby="contact-title">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Let's build</p>
              <h2 id="contact-title">Move your business Furthermore.</h2>
              <p>
                One call. We'll scope your product, walk you through the Standard, and quote a price an agency can't.
              </p>
              <div className="contact-chips">
                <span>hello@yourdomain.com</span>
                <span>India / Global</span>
                <span>Architecture. Tests. QA. Audit report.</span>
              </div>
            </div>
            <form className="contact-form" action="#" method="get">
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Your name" required />
              </label>
              <label>
                <span>Work Email</span>
                <input type="email" name="email" placeholder="you@company.com" required />
              </label>
              <label>
                <span>Service Required</span>
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>AI Agent Development</option>
                  <option>AI Automation</option>
                  <option>Blockchain Development</option>
                  <option>RWA Tokenization</option>
                  <option>Digital Wallet Development</option>
                  <option>Custom Software Development</option>
                  <option>Web or Mobile App Development</option>
                </select>
              </label>
              <label>
                <span>Budget</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select budget range</option>
                  <option>Exploring options</option>
                  <option>Under $10,000</option>
                  <option>$10,000-$25,000</option>
                  <option>$25,000-$50,000</option>
                  <option>$50,000+</option>
                </select>
              </label>
              <label className="full-field">
                <span>Project Details</span>
                <textarea name="details" rows="4" placeholder="What should we build?" required />
              </label>
              <button className="btn btn-primary" type="submit">Book a Strategy Call</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-logo" href="#top">
              <span className="brand-name">Furthermore</span>
              <span className="brand-subtitle">AI / Blockchain / Software</span>
            </a>
            <p>Audit-ready AI, blockchain and software solutions built for what comes next.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#standard">Standard</a>
            <a href="#services">Services</a>
            <a href="#regulated-markets">Regulated Markets</a>
            <a href="#technology-stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-contact">
            <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
            <p>India / Serving clients globally</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Furthermore Technologies. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
