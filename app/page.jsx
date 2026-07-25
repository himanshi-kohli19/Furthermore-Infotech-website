import Header from "./components/Header";

const services = [
  {
    title: "AI Development and Automation",
    eyebrow: "AI systems",
    icon: "/assets/images/service-icon-01.png",
    text: "AI agents, generative AI apps, RAG assistants and workflow automation built around your data, tools and approval flows.",
    items: ["AI agent development", "RAG applications", "Business automation"]
  },
  {
    title: "Blockchain and Web3 Development",
    eyebrow: "Digital assets",
    icon: "/assets/images/service-icon-02.png",
    text: "Secure Web3 products for RWA tokenization, digital wallets, smart contracts, payments, identity and verification systems.",
    items: ["RWA tokenization", "Digital wallets", "Smart contracts"]
  },
  {
    title: "Custom Software Development",
    eyebrow: "Product engineering",
    icon: "/assets/images/service-icon-03.png",
    text: "Fast, scalable web apps, mobile apps, SaaS platforms, dashboards, APIs and enterprise software designed for growth.",
    items: ["Next.js development", "Mobile apps", "API integrations"]
  }
];

const heroHighlights = [
  {
    title: "AI Agents for Operations",
    text: "Research, summarize, route, draft and complete repeatable work with human approval where it matters.",
    image: "/assets/images/video-big-thumb-03.png",
    alt: "AI agent automation workflow interface"
  },
  {
    title: "RWA and Wallet Platforms",
    text: "Asset onboarding, token logic, wallet flows, investor portals and digital ownership experiences.",
    image: "/assets/images/portfolio-01.jpg",
    alt: "RWA tokenization and digital wallet product interface"
  },
  {
    title: "Web and Mobile Products",
    text: "SEO-friendly Next.js websites, mobile apps, dashboards, APIs and custom software built around users.",
    image: "/assets/images/portfolio-04.jpg",
    alt: "Custom web and mobile product development dashboard"
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

const process = [
  ["01", "Discover", "Clarify the business goal, users, data, risks and launch priorities."],
  ["02", "Design", "Shape the UX, architecture, workflows and technical roadmap."],
  ["03", "Build", "Engineer the frontend, backend, AI, blockchain and integrations."],
  ["04", "Scale", "Launch, monitor, improve performance and support future growth."]
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
  ["What services does Furthermore provide?", "Furthermore provides AI development, AI agent development, workflow automation, blockchain development, RWA tokenization, digital wallet development, custom software development, web development, mobile app development, system design and API integration services."],
  ["Does Furthermore build custom AI agents?", "Yes. We develop custom AI agents that retrieve information, use business tools, process data and complete multi-step workflows with optional human approval."],
  ["Can Furthermore automate existing business processes?", "Yes. We automate processes across CRM systems, email, documents, databases, internal tools and third-party applications."],
  ["Does Furthermore develop RWA tokenization platforms?", "Yes. We build RWA platforms covering asset onboarding, smart contracts, digital ownership, KYC, token management and transaction workflows."],
  ["Can Furthermore build an MVP for a startup?", "Yes. We support startups from product discovery and prototyping through MVP development, launch and ongoing improvement."]
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Furthermore",
  url: "https://www.yourdomain.com/",
  description:
    "Furthermore is an AI and blockchain development company building AI agents, automation workflows, RWA platforms, digital wallets, mobile apps and custom software.",
  areaServed: ["India", "Global"],
  knowsAbout: [
    "AI agent development",
    "AI automation",
    "Blockchain development",
    "RWA tokenization",
    "Digital wallet development",
    "Custom software development",
    "Next.js development"
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
              <p className="eyebrow">AI / BLOCKCHAIN / SOFTWARE ENGINEERING</p>
              <h1 id="hero-title">
                AI, Blockchain and Software Solutions Built to Move Your Business <span>Furthermore</span>
              </h1>
              <p className="hero-kicker">Get digital solutions designed to increase efficiency, accelerate growth and unlock new revenue opportunities.</p>
              <p className="hero-description">
                Furthermore is an AI, blockchain and custom software development company that builds intelligent agents,
                automation workflows, Web3 platforms, digital wallets, mobile apps and scalable software solutions.
              </p>
              <p className="hero-description">
                We help startups and enterprises transform ideas, data and business processes into secure digital products
                designed for long-term growth.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Start Your Project</a>
                <a className="btn btn-secondary" href="#solutions">Explore Solutions</a>
              </div>
              <div className="hero-proof" aria-label="Company highlights">
                <span><strong>Strategy</strong> Product clarity before code</span>
                <span><strong>Engineering</strong> Secure and scalable builds</span>
                <span><strong>Support</strong> Long-term product growth</span>
              </div>
            </div>

            <div className="hero-showcase" aria-label="AI and blockchain service highlights">
              <div className="showcase-panel">
                <div className="hero-product-card">
                  <img src="/assets/images/banner-right-image.png" alt="AI blockchain and custom software product development" />
                  <div>
                    <span>Strategy / Design / Engineering</span>
                    <strong>Build the right product, not just more features.</strong>
                    <p>Clear architecture, polished user journeys and practical technology decisions from day one.</p>
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

        <section className="services section-shell" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="Services" title="High-impact digital product development services">
              A focused team for AI development, blockchain development, Next.js web development,
              mobile app development and custom software engineering.
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
          </div>
        </section>

        <section className="solutions section-shell alt-section" id="solutions" aria-labelledby="solutions-title">
          <div className="container solutions-grid">
            <div>
              <p className="eyebrow">What we build</p>
              <h2 id="solutions-title">AI automation and blockchain infrastructure for real business workflows.</h2>
              <p>
                We connect strategy, UI/UX, backend architecture and deployment into one delivery system.
                The result is practical technology that users can adopt and teams can maintain.
              </p>
              <a className="btn btn-primary" href="#contact">Book a Strategy Call</a>
            </div>
            <div className="solution-board">
              <article>
                <span>AI</span>
                <h3>Agents, RAG and automation</h3>
                <p>Automate support, sales, operations, knowledge search, reporting and document-heavy workflows.</p>
              </article>
              <article>
                <span>Web3</span>
                <h3>RWA, wallets and smart contracts</h3>
                <p>Build digital ownership, payments, identity, verification and tokenized asset platforms.</p>
              </article>
              <article>
                <span>Software</span>
                <h3>Apps, APIs and scalable systems</h3>
                <p>Launch polished MVPs and enterprise platforms with scalable architecture and fast UX.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="video-section section-shell alt-section" aria-labelledby="video-title">
          <div className="container video-grid">
            <div className="video-frame">
              <img src="/assets/images/video-big-thumb-01.png" alt="AI and blockchain product strategy video preview" />
              <a className="play-button" href="#contact" aria-label="Book a strategy session">
                <span />
              </a>
            </div>
            <div>
              <p className="eyebrow">Product story</p>
              <h2 id="video-title">From bold idea to launch-ready technology.</h2>
              <p>
                A great digital product needs more than code. We clarify the opportunity, design the product,
                engineer the system, integrate the tools and support the launch so the build keeps moving.
              </p>
              <div className="process-row">
                {process.map(([number, title, text]) => (
                  <article key={number}>
                    <span>{number}</span>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="stack section-shell" id="technology-stack" aria-labelledby="stack-title">
          <div className="container">
            <SectionHeading eyebrow="Technology stack" title="Modern tools for fast, SEO-friendly products" />
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

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="container contact-panel">
            <div>
              <p className="eyebrow">Let's build</p>
              <h2 id="contact-title">Tell us what you want to automate, tokenize or launch.</h2>
              <p>
                Share the project goal and we will help you define the right AI, blockchain or software roadmap.
              </p>
              <div className="contact-chips">
                <span>hello@yourdomain.com</span>
                <span>India / Global</span>
                <span>Strategy. Design. Engineering. Deployment.</span>
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
              <button className="btn btn-primary" type="submit">Discuss My Project</button>
            </form>
          </div>
        </section>

        <section className="faq section-shell alt-section" id="faq" aria-labelledby="faq-title">
          <div className="container faq-grid">
            <SectionHeading eyebrow="FAQ" title="Search-friendly answers" />
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
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-logo" href="#top">
              <span className="brand-name">Furthermore</span>
              <span className="brand-subtitle">AI / Blockchain / Software</span>
            </a>
            <p>AI, blockchain and software solutions built for what comes next.</p>
          </div>
          <nav aria-label="Footer navigation">
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
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
