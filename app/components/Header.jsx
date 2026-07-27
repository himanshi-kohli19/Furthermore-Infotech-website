"use client";

import { useState } from "react";

const navItems = [
  ["Home", "#top"],
  ["Standard", "#standard"],
  ["Services", "#services"],
  ["Regulated", "#regulated-markets"],
  ["Stack", "#technology-stack"],
  ["Contact", "#contact"]
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" aria-label="Furthermore homepage" onClick={() => setOpen(false)}>
          <img className="brand-logo" src="/assets/images/furthermore/furthermore-logo.png" alt="" />
          <span className="sr-only">Furthermore - AI / Blockchain / Software</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Open navigation"
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-cta" href="#contact">Book a Strategy Call</a>
      </div>
    </header>
  );
}
