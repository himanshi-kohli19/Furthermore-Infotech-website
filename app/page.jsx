import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import { absoluteSiteUrl, siteConfig } from "../site.config.mjs";

const services = [
  {
    title: "AI Agent Development and Automation",
    eyebrow: "AI systems",
    icon: "/assets/images/service-icon-01.png",
    text: "AI agents, RAG assistants and workflow automation built around your data, tools, approvals and audit logs.",
    items: ["AI agent development", "RAG applications", "Business automation"]
  },
  {
    title: "Blockchain, Web3 and RWA Development",
    eyebrow: "Digital assets",
    icon: "/assets/images/service-icon-02.png",
    text: "Secure Web3 products for RWA tokenization, digital wallets, smart contracts, payments and on-chain identity.",
    items: ["RWA tokenization", "Digital wallets", "Smart contracts"]
  },
  {
    title: "Custom Software and SaaS Engineering",
    eyebrow: "Product engineering",
    icon: "/assets/images/service-icon-03.png",
    text: "Scalable Next.js web apps, mobile apps, SaaS platforms, dashboards and APIs engineered for real product operations.",
    items: ["Next.js development", "Mobile apps", "API integrations"]
  }
];

const heroCarouselCards = [
  {
    title: "The Furthermore Standard",
    eyebrow: "Delivery system",
    text: "One process connects architecture, AI-assisted development, human QA and written audit evidence so every release is accountable.",
    image: "/assets/images/furthermore/team-strategy.webp",
    alt: "Product team reviewing software delivery and QA evidence"
  },
  {
    title: "Architecture and product spec",
    eyebrow: "Before build",
    text: "Your goals become a clear technical plan, product roadmap and compliance-aware build scope before development starts.",
    image: "/assets/images/furthermore/secure-product-engineering.jpg",
    alt: "Engineer reviewing secure product architecture on a code screen"
  },
  {
    title: "Tested software delivery",
    eyebrow: "During build",
    text: "Features are built with automated checks, reviewed by senior engineers and tested against real workflows before release.",
    image: "/assets/images/furthermore/code-review.jpeg",
    alt: "Developer reviewing test-driven code on a large monitor"
  },
  {
    title: "Written audit report",
    eyebrow: "After build",
    text: "You receive documented testing, QA notes and a delivery report that helps third parties inspect what was built.",
    image: "/assets/images/furthermore/audit-dashboard.jpeg",
    alt: "Audit report dashboard with compliance review visuals"
  }
];

const standardGates = [
  ["01", "Architects plan", "A Solution Architect and Product Manager turn your goals into system architecture, product roadmap and compliance requirements before code begins.", "Architecture and product spec"],
  ["02", "Agents build", "AI coding agents accelerate test-driven software development with every feature backed by automated checks before review.", "Passing test suite"],
  ["03", "Humans break", "Senior engineers and human QA test real devices, approval flows and edge cases before anything is released.", "Review and QA log"],
  ["04", "Auditors sign off", "Before delivery, we review security, performance, code quality and coverage against third-party expectations.", "Written audit report"],
  ["05", "You verify", "You receive the proof: source code, architecture notes, QA evidence and an audit report investors can inspect.", "Your proof"]
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
  ["Artificial Intelligence", "OpenAI • Azure OpenAI • Gemini • Anthropic • LangChain • LangGraph • LlamaIndex • RAG • LLM Agents • Multi-Agent Systems • MCP • AI Guardrails • Prompt Management • Model Evaluation • Human-in-the-Loop AI"],
  ["Frontend Engineering", "Next.js • React • TypeScript • JavaScript • HTML5 • CSS3 • Tailwind CSS • Material UI • Shadcn UI • Redux Toolkit • Zustand • React Query • Progressive Web Apps • Responsive Design • Accessibility"],
  ["Backend Engineering", "Node.js • NestJS • Express.js • Python • FastAPI • Django • REST APIs • GraphQL • WebSockets • gRPC • Microservices • Serverless Functions • Background Workers • Event-Driven Architecture"],
  ["Blockchain and Web3", "Ethereum • Polygon • Base • Arbitrum • Optimism • Solidity • Smart Contracts • ERC-20 • ERC-721 • ERC-1155 • Account Abstraction • Chainlink • IPFS • Ethers.js • Viem • Hardhat • Foundry • Web3 Integrations"],
  ["Automation and Integrations", "n8n • Zapier • Make • Webhooks • API Integrations • CRM Automation • ERP Integration • Email Automation • Workflow Orchestration • Approval Workflows • Human-in-the-Loop Automation"],
  ["Data Systems", "PostgreSQL • MySQL • MongoDB • Redis • Supabase • Firebase • Elasticsearch • OpenSearch • Data Pipelines • Real-Time Analytics • Business Intelligence"]
];

const industries = [
  "Fintech",
  "Real Estate",
  "E-commerce",
  "Education",
  "Marketing",
  "SaaS",
  "Supply Chain",
  "Enterprise",
  "Healthcare",
  "Insurance",
  "Banking",
  "Logistics",
  "Manufacturing",
  "Retail",
  "Travel and Hospitality",
  "Media and Entertainment",
  "Telecommunications",
  "Energy and Utilities",
  "Automotive",
  "LegalTech",
  "HRTech",
  "AdTech",
  "MarTech",
  "RegTech",
  "Government",
  "Professional Services",
  "Gaming",
  "Web3 and Digital Assets"
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
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: absoluteSiteUrl("/"),
  logo: absoluteSiteUrl("/assets/images/furthermore/furthermore-logo.png"),
  image: absoluteSiteUrl(siteConfig.image),
  description: siteConfig.description,
  sameAs: siteConfig.socialLinks,
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
    url: absoluteSiteUrl("/#contact"),
    contactType: "sales",
    areaServed: "Global"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: absoluteSiteUrl("/"),
  description: siteConfig.description,
  inLanguage: "en"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
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
              <p className="eyebrow hero-eyebrow">AI / BLOCKCHAIN / WEB3 / AUDIT-READY SOFTWARE</p>
              <h1 id="hero-title">
                Engineering Solutions That Scale.
              </h1>
              <p className="hero-kicker">
                Enterprise-grade development at startup-friendly prices.
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
            <div className="hero-showcase" aria-label="Furthermore product team workspace">
              <div className="hero-visual-frame hero-visual-frame-shaped">
                <img src="/assets/images/furthermore/hero-shaped-office.png" alt="Furthermore team working in a bright office with city views" />
              </div>
            </div>
          </div>
        </section>

        <section className="hero-carousel-section" aria-labelledby="hero-carousel-title">
          <div className="container">
            <div className="hero-carousel-heading">
              <p className="eyebrow">What you get</p>
              <h2 id="hero-carousel-title">Every build comes with proof.</h2>
            </div>
            <div className="hero-card-carousel" aria-label="Audit-ready delivery cards">
              {heroCarouselCards.map((item) => (
                <article className="hero-carousel-card" key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <div>
                    <span>{item.eyebrow}</span>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="standard section-shell alt-section" id="standard" aria-labelledby="standard-title">
          <div className="container standard-grid">
            <div>
              <p className="eyebrow">The Furthermore Standard</p>
              <h2 id="standard-title">Architects plan. Agents build. Humans break. Auditors sign off.</h2>
              <p>
                You can't read code. You shouldn't have to. Every project passes five quality gates - and every gate leaves proof you can read, share and verify.
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
              <img src="/assets/images/furthermore/ai-product-workflow.avif" alt="AI product workflow and software engineering team collaboration" />
            </div>
            <div>
              <p className="eyebrow">The economics</p>
              <h2 id="economics-title">Why is Furthermore cheaper than a traditional software development studio?</h2>
              <p>
                Because our AI coding agents don't bill by the hour. Agencies charge you for senior engineers typing.
                We charge you for senior engineers thinking - architecting, reviewing, testing and auditing what agents
                build at machine speed. Fewer billable hours. Same senior judgment. Stricter quality gates.
              </p>
              <p className="economics-punchline">Agents cut the hours. Not the corners.</p>
            </div>
          </div>
        </section>

        <section className="services section-shell alt-section" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="What we build" title="Specialists in AI and blockchain - not another generalist dev shop.">
              AI and blockchain are not services we bolted on. They are the core practice - backed by product engineering that makes them ship-ready.
              We build audit-ready AI systems, blockchain products, SaaS platforms and operational software for teams that need proof from day one.
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
                If you operate in fintech, virtual assets, Web3 or AI, your software is a regulatory exhibit. We engineer the technical
                controls regulators expect - audit trails, data protection, KYC/AML hooks and model documentation - into the build from day one.
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
              <a className="contact-email" href="mailto:connect@furmotech.com">connect@furmotech.com</a>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div className="footer-brand-block">
            <a className="brand footer-logo" href="#top">
              <img className="brand-logo footer-brand-logo" src="/assets/images/furthermore/furthermore-logo-dark.png" alt="" />
              <span className="sr-only">Furthermore - AI / Blockchain / Software</span>
            </a>
            <p>Audit-ready AI, blockchain and software solutions built for what comes next.</p>
            <div className="footer-social" aria-label="Social links">
              <a href="https://www.linkedin.com/company/furthermore-technologies" target="_blank" rel="noreferrer" aria-label="Furthermore on LinkedIn">in</a>
              <a href="https://x.com/furthermoretech" target="_blank" rel="noreferrer" aria-label="Furthermore on X">X</a>
              <a href="https://www.instagram.com/furthermoretech" target="_blank" rel="noreferrer" aria-label="Furthermore on Instagram">Ig</a>
              <a href="https://www.facebook.com/furthermoretech" target="_blank" rel="noreferrer" aria-label="Furthermore on Facebook">f</a>
            </div>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <span>Explore</span>
            <a href="#standard">Standard</a>
            <a href="#services">Services</a>
            <a href="#regulated-markets">Regulated Markets</a>
            <a href="#technology-stack">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-contact">
            <span>Location</span>
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
