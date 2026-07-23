import Header from "./components/Header";

const capabilities = [
  "AI Development",
  "Blockchain Development",
  "Software Engineering",
  "Mobile App Development",
  "Workflow Automation",
  "System Design"
];

const services = [
  {
    title: "AI Solutions and Automation",
    alt: "Custom AI agent development services",
    icon: "/assets/images/service-icon-01.png",
    text: "Build AI systems that automate work, support better decisions and create faster customer experiences.",
    items: ["AI agent development", "Generative AI applications", "RAG and knowledge assistants", "Business process automation"],
    cta: "Explore AI Development and Automation"
  },
  {
    title: "Blockchain and Web3 Development",
    alt: "RWA tokenization platform development",
    icon: "/assets/images/service-icon-02.png",
    text: "Launch secure blockchain products for digital assets, payments, identity and decentralized business operations.",
    items: ["Smart contract development", "RWA tokenization", "Digital wallet development", "Web3 integrations"],
    cta: "Explore Blockchain Solutions"
  },
  {
    title: "Custom Software Development",
    alt: "Custom web and mobile application development",
    icon: "/assets/images/service-icon-03.png",
    text: "Develop software designed around your users, workflows and business objectives.",
    items: ["Enterprise software", "SaaS application development", "Admin dashboards", "Cloud-based software"],
    cta: "Build Custom Software"
  },
  {
    title: "Web and Mobile App Development",
    alt: "Next.js and mobile app development services",
    icon: "/assets/images/service-icon-04.png",
    text: "Create fast, intuitive and scalable digital experiences for the web, Android and iOS.",
    items: ["Next.js web development", "React application development", "Android and iOS apps", "MVP development"],
    cta: "Develop Your App"
  },
  {
    title: "System Design and Architecture",
    alt: "System design consulting services",
    icon: "/assets/images/service-icon-01.png",
    text: "Design reliable software systems that support performance, security, integration and future growth.",
    items: ["Solution and cloud architecture", "API and integration architecture", "Database and microservices design", "Security planning"],
    cta: "Design Your Technology Architecture",
    wide: true
  }
];

const aiSolutions = [
  ["AI Agents", "Autonomous and human-supervised agents that research, reason, use tools and complete multi-step tasks."],
  ["Business Automation", "Automate repetitive processes across sales, support, finance, operations and approval workflows."],
  ["Enterprise RAG", "Transform business documents and data into secure, searchable AI knowledge systems."],
  ["AI-Powered Products", "Add intelligent search, recommendations, virtual assistants and automation to software products."]
];

const blockchainSolutions = [
  ["RWA Tokenization", "Digitize and manage real-world assets through secure tokenization platforms and smart contracts."],
  ["Digital Wallets", "Build custodial, non-custodial and embedded wallets for web and mobile applications."],
  ["Blockchain Payments", "Enable stablecoin payments, transaction monitoring, reconciliation and fiat on-ramp integrations."],
  ["Digital Identity", "Create decentralized identity, credential issuance and digital verification systems."]
];

const valuePoints = [
  ["Business-First Approach", "We select technology based on the problem, users and expected business value."],
  ["End-to-End Development", "Strategy, design, engineering, testing and deployment through one engagement."],
  ["Emerging Technology Expertise", "Hands-on capabilities across AI agents, automation, RAG, wallets and tokenization."],
  ["Built for Scale", "Secure, modular and maintainable systems prepared for growing requirements."]
];

const projects = [
  ["Real-World Asset Tokenization Platform", "Blockchain • RWA • Fintech", "A blockchain platform designed for onboarding, tokenizing and managing real-world assets through secure digital ownership workflows.", "/assets/images/portfolio-01.jpg", "RWA tokenization platform development"],
  ["Digital Wallet and Payment Ecosystem", "Blockchain • Wallets • Payments", "Secure wallet infrastructure for managing digital assets, monitoring balances and enabling blockchain transactions.", "/assets/images/portfolio-02.jpg", "Digital wallet and blockchain payment solution"],
  ["AI Workflow Automation System", "AI • Automation • Operations", "An intelligent automation system connecting email, business applications, data sources and approval workflows.", "/assets/images/portfolio-03.jpg", "AI workflow automation system"],
  ["AI Email Assistant", "Generative AI • Productivity", "An AI assistant that analyzes emails, creates summaries, drafts contextual responses and routes them for approval.", "/assets/images/portfolio-04.jpg", "Custom AI assistant for business productivity"],
  ["Enterprise RAG Assistant", "AI • RAG • Knowledge Management", "A context-aware AI assistant that retrieves relevant business content and generates grounded answers.", "/assets/images/portfolio-01.jpg", "Enterprise RAG assistant for knowledge management"],
  ["Blockchain Identity and Credential System", "Blockchain • Identity • Verification", "A decentralized framework for issuing, verifying, revoking and managing digital identities and credentials.", "/assets/images/portfolio-02.jpg", "Blockchain identity and credential verification system"]
];

const reasons = [
  ["Outcome-Focused Development", "Every product, workflow and feature is connected to a clear business objective."],
  ["AI and Blockchain Expertise", "Specialized development across intelligent agents, automation, RWA platforms, wallets and smart contracts."],
  ["Full-Stack Capabilities", "Frontend, backend, databases, cloud infrastructure, APIs and integrations delivered as one connected system."],
  ["Transparent Collaboration", "Clear scopes, regular updates, milestone demonstrations and documented decisions throughout the engagement."],
  ["Flexible Engagement", "Work with us for product discovery, end-to-end development, dedicated engineering or technology consulting."],
  ["Long-Term Support", "Continue improving, monitoring and scaling your digital product after launch."]
];

const process = [
  ["01", "Discover", "Understand the business problem, users, objectives and technical requirements."],
  ["02", "Define", "Create the scope, architecture, feature roadmap, timeline and delivery plan."],
  ["03", "Design", "Develop user journeys, interfaces, prototypes and system workflows."],
  ["04", "Build", "Engineer the frontend, backend, AI, blockchain and required integrations."],
  ["05", "Test", "Validate functionality, usability, security, performance and scalability."],
  ["06", "Launch", "Deploy the solution, monitor its performance and support continuous improvement."]
];

const stack = [
  ["Artificial Intelligence", "OpenAI • Gemini • Anthropic • LangChain • RAG • Vector Databases • LLM Agents"],
  ["Automation", "n8n • Zapier • Make • Webhooks • CRM Automation • Workflow Orchestration"],
  ["Blockchain", "Ethereum • Polygon • Solidity • Smart Contracts • ERC-20 • ERC-721 • Web3"],
  ["Web Development", "Next.js • React • TypeScript • JavaScript • HTML5 • CSS3 • Tailwind CSS"],
  ["Backend Development", "Node.js • Express.js • Python • REST APIs • Microservices • WebSockets"],
  ["Data and Infrastructure", "PostgreSQL • Supabase • Redis • Docker • Kubernetes • AWS • Azure • CI/CD"]
];

const industries = [
  ["Marketing and Advertising", "AI-powered campaign automation, lead qualification, personalized content, CRM integrations and performance reporting."],
  ["Fintech", "Payment systems, digital wallets, tokenized assets and AI-powered financial workflows."],
  ["Real Estate", "Property platforms, RWA tokenization, investor portals and digital transaction systems."],
  ["E-commerce", "Online marketplaces, mobile commerce, recommendation engines and business process automation."],
  ["Education", "AI learning assistants, knowledge platforms, digital credentials and certification systems."],
  ["Supply Chain", "Tracking platforms, blockchain audit trails, system integrations and workflow automation."],
  ["SaaS and Technology", "MVP development, enterprise software, AI integrations, APIs and cloud modernization."],
  ["Government and Enterprise", "Digital identity, interoperable systems, automated public services and secure data workflows."]
];

const engagements = [
  ["Product Discovery", "Validate your idea, define product requirements and create a practical technical roadmap.", "Start Discovery"],
  ["End-to-End Development", "Design, develop, test and launch a complete web, mobile, AI or blockchain product.", "Build Your Product"],
  ["Dedicated Development Team", "Extend your internal team with experienced developers, architects and technology specialists.", "Hire a Team"],
  ["AI and Blockchain Consulting", "Evaluate potential use cases, architecture, integrations, risks and implementation opportunities.", "Book a Consultation"]
];

const insights = [
  ["How AI Agents Automate Business Operations", "Explore how AI agents connect with tools, data and workflows to complete meaningful business tasks."],
  ["RWA Tokenization Explained", "Understand how real-world assets can be represented, transferred and managed through blockchain technology."],
  ["RAG vs. Fine-Tuning", "Compare the leading approaches for building accurate and knowledgeable enterprise AI systems."],
  ["How to Choose a Digital Wallet Architecture", "Understand the differences between custodial, non-custodial and embedded wallet development."]
];

const faqs = [
  ["What services does Furthermore provide?", "Furthermore provides AI development, AI agent development, workflow automation, blockchain development, RWA tokenization, digital wallet development, custom software development, web development, mobile app development, system design and cloud integration services."],
  ["Does Furthermore build custom AI agents?", "Yes. We develop custom AI agents that retrieve information, use business tools, process data and complete multi-step workflows with optional human approval."],
  ["Can Furthermore automate existing business processes?", "Yes. We automate processes across CRM systems, email, documents, databases, internal tools and third-party applications."],
  ["Does Furthermore develop RWA tokenization platforms?", "Yes. We build RWA platforms covering asset onboarding, smart contracts, digital ownership, KYC, token management and transaction workflows."],
  ["Does Furthermore develop digital wallets?", "Yes. We build web, mobile and embedded wallets using custodial, non-custodial or hybrid architectures."],
  ["Can Furthermore build an MVP for a startup?", "Yes. We support startups from product discovery and prototyping through MVP development, launch and ongoing improvement."],
  ["Can Furthermore integrate AI into existing software?", "Yes. We integrate generative AI, RAG, intelligent search, chatbots, recommendation engines and workflow automation into existing applications."],
  ["Does Furthermore work with international clients?", "Yes. We provide remote software development and technology consulting services to businesses in India and international markets."]
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
    "Mobile app development",
    "System design"
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
  mainEntity: faqs.slice(0, 4).map(([question, answer]) => ({
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

function TextCard({ title, text }) {
  return (
    <article>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
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
        <section className="hero section-shell" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">AI • BLOCKCHAIN • CUSTOM SOFTWARE</p>
              <h1 id="hero-title">AI, Blockchain and Software Solutions Built to Move Your Business Further</h1>
              <p className="hero-kicker">Get digital solutions designed to increase efficiency, accelerate growth and unlock new revenue opportunities.</p>
              <p>Furthermore is an AI, blockchain and custom software development company that builds intelligent agents, automation workflows, Web3 platforms, digital wallets, mobile apps and scalable software solutions.</p>
              <p>We help startups and enterprises transform ideas, data and business processes into secure digital products designed for long-term growth.</p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="#contact">Book a Meeting</a>
                <a className="btn btn-secondary" href="#work">View Case Studies</a>
              </div>
              <p className="capability-line">AI Agents • RWA Platforms • Digital Wallets • Web Apps • Mobile Apps • Custom Software</p>
              <p className="supporting-line">From product strategy and UI/UX design to development, deployment and ongoing support.</p>
            </div>
            <div className="hero-visual" aria-label="AI and blockchain software development company">
              <img src="/assets/images/banner-right-image.png" alt="AI and blockchain software development company" />
              <div className="metric-card metric-card-top">
                <strong>AI Agents</strong>
                <span>Tool use, RAG and automation</span>
              </div>
              <div className="metric-card metric-card-bottom">
                <strong>Web3 Systems</strong>
                <span>Wallets, RWA and smart contracts</span>
              </div>
            </div>
          </div>
        </section>

        <section className="capability-strip" aria-labelledby="capability-title">
          <div className="container">
            <h2 id="capability-title">One Technology Partner. Multiple Digital Capabilities.</h2>
            <div className="capability-list">
              {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
            </div>
          </div>
        </section>

        <section className="services section-shell" id="services" aria-labelledby="services-title">
          <div className="container">
            <SectionHeading eyebrow="OUR SERVICES" title="Digital Product Development for Startups and Enterprises">
              We combine artificial intelligence, blockchain and full-stack engineering to build secure, scalable and user-focused digital solutions.
            </SectionHeading>
            <div className="service-grid">
              {services.map((service) => (
                <article className={service.wide ? "service-card service-wide" : "service-card"} key={service.title}>
                  <img src={service.icon} alt={service.alt} />
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <ul>
                    {service.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <a href="#contact">{service.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="solutions section-shell alt-section" id="solutions" aria-labelledby="solutions-title">
          <div className="container">
            <SectionHeading eyebrow="AI FOR BUSINESS" title="AI Solutions That Go Beyond Conversation">
              Our AI systems connect with your data, documents and applications to perform meaningful business tasks, not simply generate answers.
            </SectionHeading>
            <div className="solution-grid">
              {aiSolutions.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
            </div>
            <div className="section-action">
              <a className="btn btn-primary" href="#contact">Book an AI Strategy Session</a>
            </div>

            <div className="split-feature">
              <div>
                <p className="eyebrow">BLOCKCHAIN FOR BUSINESS</p>
                <h2>Blockchain Infrastructure Built for Real-World Use</h2>
                <p>We develop practical blockchain solutions for digital ownership, transactions, identity, verification and enterprise workflows.</p>
                <a className="btn btn-secondary" href="#contact">Discuss a Blockchain Project</a>
              </div>
              <div className="blockchain-list">
                {blockchainSolutions.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
              </div>
            </div>
          </div>
        </section>

        <section className="about section-shell" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div className="about-image">
              <img src="/assets/images/about-left-image.png" alt="Software team planning AI and blockchain product architecture" />
            </div>
            <div>
              <p className="eyebrow">WHO WE ARE</p>
              <h2 id="about-title">More Than Development. Real Digital Transformation.</h2>
              <p>Furthermore helps businesses design, build and scale intelligent digital products. Our team combines product strategy, solution architecture, software engineering, artificial intelligence and blockchain development to solve complex business challenges.</p>
              <p>We focus on practical technology, transparent delivery and measurable outcomes, from the initial idea to a successful production launch.</p>
              <div className="value-grid">
                {valuePoints.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
              </div>
              <a className="btn btn-primary" href="#contact">About Furthermore</a>
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work" aria-labelledby="work-title">
          <div className="container">
            <SectionHeading eyebrow="OUR PROJECTS" title="Digital Products Engineered for Real Business Challenges">
              Explore selected projects across AI automation, blockchain platforms, digital assets, wallets and enterprise software.
            </SectionHeading>
            <div className="work-grid">
              {projects.map(([title, category, text, image, alt]) => (
                <article className="work-card" key={title}>
                  <img src={image} alt={alt} />
                  <span>{category}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="why section-shell alt-section" aria-labelledby="why-title">
          <div className="container">
            <SectionHeading eyebrow="WHY US" title="Strategy, Intelligence and Engineering in One Team" />
            <div className="why-grid">
              {reasons.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section className="process section-shell" id="process" aria-labelledby="process-title">
          <div className="container">
            <SectionHeading eyebrow="HOW WE WORK" title="From an Idea to a Scalable Digital Product" />
            <div className="process-grid">
              {process.map(([number, title, text]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
            <div className="section-action">
              <a className="btn btn-primary" href="#contact">Discuss Your Product Idea</a>
            </div>
          </div>
        </section>

        <section className="stack section-shell alt-section" id="technology-stack" aria-labelledby="stack-title">
          <div className="container">
            <SectionHeading eyebrow="OUR TECHNOLOGIES" title="The Right Technology for Every Digital Product" />
            <div className="stack-grid">
              {stack.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section className="industries section-shell" id="industries" aria-labelledby="industries-title">
          <div className="container">
            <SectionHeading eyebrow="INDUSTRIES WE SERVE" title="Technology Solutions for Modern Industries" />
            <div className="industry-grid">
              {industries.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
            </div>
          </div>
        </section>

        <section className="engagement section-shell alt-section" id="engagement" aria-labelledby="engagement-title">
          <div className="container">
            <SectionHeading eyebrow="WORK WITH US" title="Flexible Technology Engagements" />
            <div className="engagement-grid">
              {engagements.map(([title, text, cta]) => (
                <article key={title}>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <a href="#contact">{cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="insights section-shell" id="insights" aria-labelledby="insights-title">
          <div className="container">
            <SectionHeading eyebrow="LATEST INSIGHTS" title="Practical Ideas for Building What Comes Next" />
            <div className="insight-grid">
              {insights.map(([title, text]) => <TextCard key={title} title={title} text={text} />)}
            </div>
            <div className="section-action">
              <a className="btn btn-secondary" href="#contact">View All Insights</a>
            </div>
          </div>
        </section>

        <section className="main-cta section-shell" aria-labelledby="main-cta-title">
          <div className="container cta-panel">
            <div>
              <h2 id="main-cta-title">Got an Idea? Let’s Build It.</h2>
              <p>From AI agents and blockchain platforms to mobile apps and custom software, we transform ideas into scalable digital products.</p>
            </div>
            <div className="hero-actions">
              <a className="btn btn-light" href="#contact">Start Your Project</a>
              <a className="btn btn-outline-light" href="#contact">Book a Free Consultation</a>
            </div>
          </div>
        </section>

        <section className="contact section-shell" id="contact" aria-labelledby="contact-title">
          <div className="container contact-grid">
            <div>
              <p className="eyebrow">LET’S TALK</p>
              <h2 id="contact-title">Tell Us What You Want to Build</h2>
              <p>Share your business challenge, product idea or automation opportunity. Our team will help you identify the right technology approach.</p>
              <div className="contact-detail">
                <strong>Email</strong>
                <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
              </div>
              <div className="contact-detail">
                <strong>Location</strong>
                <span>India • Serving clients globally</span>
              </div>
            </div>
            <form className="contact-form" action="#" method="get">
              <label>
                <span>Full Name</span>
                <input type="text" name="name" placeholder="Full Name" required />
              </label>
              <label>
                <span>Work Email</span>
                <input type="email" name="email" placeholder="Work Email" required />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" placeholder="Phone Number" />
              </label>
              <label>
                <span>Company Name</span>
                <input type="text" name="company" placeholder="Company Name" />
              </label>
              <label>
                <span>Service Required</span>
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>AI Agent Development</option>
                  <option>AI Automation</option>
                  <option>Generative AI and RAG</option>
                  <option>Blockchain Development</option>
                  <option>RWA Tokenization</option>
                  <option>Digital Wallet Development</option>
                  <option>Custom Software Development</option>
                  <option>Web Application Development</option>
                  <option>Mobile App Development</option>
                  <option>System Design and Architecture</option>
                  <option>Cloud and API Integration</option>
                </select>
              </label>
              <label>
                <span>Estimated Budget</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select budget range</option>
                  <option>Exploring options</option>
                  <option>Under $10,000</option>
                  <option>$10,000-$25,000</option>
                  <option>$25,000-$50,000</option>
                  <option>$50,000-$100,000</option>
                  <option>Above $100,000</option>
                </select>
              </label>
              <label className="full-field">
                <span>Project Details</span>
                <textarea name="details" rows="5" placeholder="Tell us what you want to build" required />
              </label>
              <p className="consent">By submitting this form, you agree to be contacted regarding your enquiry.</p>
              <button className="btn btn-primary" type="submit">Discuss My Project</button>
            </form>
          </div>
        </section>

        <section className="faq section-shell alt-section" id="faq" aria-labelledby="faq-title">
          <div className="container">
            <SectionHeading eyebrow="FAQ" title="Search-Friendly Answers" />
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
          <div className="footer-brand-block">
            <a className="brand footer-logo" href="#top">
              <span className="brand-name">Furthermore</span>
              <span className="brand-subtitle">AI • Blockchain • Software</span>
            </a>
            <p><strong>AI, blockchain and software solutions built for what comes next.</strong></p>
            <p>We develop AI agents, automation workflows, blockchain platforms, digital wallets, web applications, mobile apps and custom enterprise software.</p>
            <a className="footer-cta" href="#contact">Let’s Build What Comes Next</a>
          </div>
          <div>
            <h2>Services</h2>
            {["AI Development", "AI Automation", "Blockchain Development", "RWA Tokenization", "Digital Wallet Development", "Custom Software"].map((item) => (
              <a key={item} href="#services">{item}</a>
            ))}
          </div>
          <div>
            <h2>Company</h2>
            {[
              ["About", "#about"],
              ["Work", "#work"],
              ["Process", "#process"],
              ["Industries", "#industries"],
              ["Contact", "#contact"]
            ].map(([label, href]) => <a key={href} href={href}>{label}</a>)}
          </div>
          <div>
            <h2>Resources</h2>
            <a href="#insights">Insights</a>
            <a href="#work">Case Studies</a>
            <a href="#faq">FAQs</a>
            <a href="#technology-stack">Technology Stack</a>
            <h2 className="footer-contact-title">Contact</h2>
            <a href="mailto:hello@yourdomain.com">hello@yourdomain.com</a>
            <p>India • Serving clients globally</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2026 Furthermore Technologies. All rights reserved.</p>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Security</a>
          </div>
        </div>
      </footer>
    </>
  );
}
