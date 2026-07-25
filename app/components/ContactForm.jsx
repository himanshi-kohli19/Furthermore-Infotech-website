"use client";

import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mnjeopwz";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("_subject", "New Furthermore strategy call request");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        window.location.assign("/thank-you");
        return;
      }

      const result = await response.json().catch(() => null);
      const message = result?.errors?.[0]?.message || "Something went wrong. Please try again.";
      setError(message);
      setStatus("idle");
    } catch {
      setError("Something went wrong. Please check your connection and try again.");
      setStatus("idle");
    }
  }

  const isSubmitting = status === "submitting";

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
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
        <textarea name="message" rows="4" placeholder="What should we build?" required />
      </label>
      {error ? <p className="form-error full-field">{error}</p> : null}
      <button className="btn btn-primary" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Book a Strategy Call"}
      </button>
    </form>
  );
}
