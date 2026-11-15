"use client";

import { useState, type FormEvent } from "react";
import { instagramUrl } from "@/content/site";

type EnquiryMode = "corporate" | "agro-store" | "contact";

type EnquiryFormProps = {
  mode: EnquiryMode;
};

const modeCopy: Record<EnquiryMode, { title: string; intro: string; messageLabel: string }> = {
  corporate: {
    title: "Prepare a supply enquiry",
    intro: "Share the outline of your organisation's requirements. Add confirmed quantities or specifications only where you have them.",
    messageLabel: "Tell us about your requirements",
  },
  "agro-store": {
    title: "Ask about agricultural supplies",
    intro: "Tell us which category or item you are interested in. The Agro-Store range and availability are still being confirmed.",
    messageLabel: "What product or information are you looking for?",
  },
  contact: {
    title: "Prepare a message",
    intro: "Use this form to organise your message before sending it through Freshroots' official Instagram profile.",
    messageLabel: "Your message",
  },
};

const fieldLabels: Record<string, string> = {
  fullName: "Name",
  organisation: "Organisation",
  email: "Email",
  phone: "Telephone",
  interest: "Area of interest",
  quantity: "Estimated quantity",
  destination: "Delivery or destination location",
  topic: "Enquiry topic",
  message: "Message",
};

export function EnquiryForm({ mode }: EnquiryFormProps) {
  const [preparedMessage, setPreparedMessage] = useState("");
  const [status, setStatus] = useState("");
  const [copied, setCopied] = useState(false);
  const copy = modeCopy[mode];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const lines = [
      `Freshroots Malawi — ${mode === "corporate" ? "Corporate supply enquiry" : mode === "agro-store" ? "Agro-Store enquiry" : "General enquiry"}`,
      "",
      ...Array.from(data.entries())
        .filter(([, value]) => typeof value === "string" && value.trim().length > 0)
        .map(([key, value]) => `${fieldLabels[key] ?? key}: ${String(value).trim()}`),
    ];
    const message = lines.join("\n");
    setPreparedMessage(message);
    setCopied(false);

    try {
      if (!navigator.clipboard?.writeText) {
        throw new Error("Clipboard access is unavailable in this browser.");
      }
      await navigator.clipboard.writeText(message);
      setCopied(true);
      setStatus("Your enquiry text has been copied. It has not been sent. Open Instagram and paste it into a message to Freshroots.");
    } catch {
      setStatus("Your enquiry text is ready below, but could not be copied automatically. Select the text and copy it, then paste it into an Instagram message to Freshroots.");
    }
  }

  return (
    <section className="enquiry-panel" aria-labelledby="enquiry-form-title">
      <div className="enquiry-panel__intro">
        <p className="eyebrow">Enquiry builder</p>
        <h2 id="enquiry-form-title">{copy.title}</h2>
        <p>{copy.intro}</p>
      </div>

      <form className="enquiry-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor={`${mode}-full-name`}>Full name <span aria-hidden="true">*</span></label>
            <input id={`${mode}-full-name`} name="fullName" type="text" autoComplete="name" maxLength={100} required />
          </div>

          {mode === "corporate" ? (
            <div className="form-field">
              <label htmlFor="corporate-organisation">Organisation <span aria-hidden="true">*</span></label>
              <input id="corporate-organisation" name="organisation" type="text" autoComplete="organization" maxLength={150} required />
            </div>
          ) : null}

          <div className="form-field">
            <label htmlFor={`${mode}-email`}>Email address</label>
            <input id={`${mode}-email`} name="email" type="email" autoComplete="email" maxLength={254} />
          </div>

          <div className="form-field">
            <label htmlFor={`${mode}-phone`}>Telephone number <span className="optional-label">(optional)</span></label>
            <input id={`${mode}-phone`} name="phone" type="tel" autoComplete="tel" maxLength={40} />
          </div>

          {mode === "corporate" ? (
            <>
              <div className="form-field">
                <label htmlFor="corporate-interest">What are you interested in? <span aria-hidden="true">*</span></label>
                <select id="corporate-interest" name="interest" defaultValue="" required>
                  <option value="" disabled>Select an option</option>
                  <option>Rice</option>
                  <option>Maize</option>
                  <option>Rice and maize</option>
                  <option>Partnership enquiry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="form-field">
                <label htmlFor="corporate-quantity">Estimated quantity <span className="optional-label">(optional)</span></label>
                <input id="corporate-quantity" name="quantity" type="text" maxLength={100} placeholder="e.g. 10 tonnes, if known" />
              </div>
              <div className="form-field form-field--full">
                <label htmlFor="corporate-destination">Delivery or destination location <span className="optional-label">(optional)</span></label>
                <input id="corporate-destination" name="destination" type="text" maxLength={150} placeholder="Town, district or country" />
              </div>
            </>
          ) : null}

          {mode === "agro-store" ? (
            <div className="form-field form-field--full">
              <label htmlFor="agro-interest">Product category <span aria-hidden="true">*</span></label>
              <select id="agro-interest" name="interest" defaultValue="" required>
                <option value="" disabled>Select a category</option>
                <option>Fertilizers</option>
                <option>Crop protection</option>
                <option>Protective clothing</option>
                <option>Safety equipment</option>
                <option>Tools and equipment</option>
                <option>Other farming supplies</option>
              </select>
            </div>
          ) : null}

          {mode === "contact" ? (
            <div className="form-field form-field--full">
              <label htmlFor="contact-topic">Enquiry topic <span aria-hidden="true">*</span></label>
              <select id="contact-topic" name="topic" defaultValue="" required>
                <option value="" disabled>Select a topic</option>
                <option>General enquiry</option>
                <option>Corporate supply</option>
                <option>Agro-Store</option>
                <option>Partnership</option>
                <option>Other</option>
              </select>
            </div>
          ) : null}

          <div className="form-field form-field--full">
            <label htmlFor={`${mode}-message`}>{copy.messageLabel} <span aria-hidden="true">*</span></label>
            <textarea id={`${mode}-message`} name="message" rows={5} maxLength={2000} required />
          </div>
        </div>

        <div className="form-actions">
          <button className="button button--forest" type="submit">Prepare enquiry <span aria-hidden="true">→</span></button>
          <p className="form-footnote">This website does not send or store your details. It prepares a message for you to copy and send yourself.</p>
        </div>
      </form>

      {status ? (
        <div className={`prepared-panel ${copied ? "prepared-panel--success" : ""}`} role="status" aria-live="polite">
          <p className="prepared-panel__status">{status}</p>
          {!copied ? (
            <textarea className="prepared-message" aria-label="Prepared enquiry text" readOnly value={preparedMessage} rows={8} onFocus={(event) => event.currentTarget.select()} />
          ) : null}
          <a className="button button--outline" href={instagramUrl} target="_blank" rel="noreferrer">
            Open Freshroots on Instagram <span aria-hidden="true">↗</span>
          </a>
        </div>
      ) : null}
    </section>
  );
}
