"use client";

import { FormEvent, useState } from "react";
import { site } from "@/lib/site";
import { LotusDivider } from "./Ornament";

export function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = encodeURIComponent(
      `Namaste, my name is ${name || "(not given)"}.\nPhone: ${phone || "(not given)"}\n\n${message || "I would like to visit the temple."}`,
    );
    window.location.href = `${site.phones[0].sms}?body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden bg-maroon py-20 text-cream md:py-28">
      <div className="filigree pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-2 md:px-8">
        <div>
          <p className="text-sm tracking-[0.28em] text-gold uppercase">
            Contact
          </p>
          <h2 className="font-serif mt-3 text-4xl md:text-5xl">
            We would be honoured to hear from you
          </h2>
          <LotusDivider className="my-6 max-w-xs" />
          <p className="text-cream/80">
            Call for darshan timings, puja bookings, or festival details. You
            can also send a text from the form — it opens your messages app.
          </p>

          <div className="mt-10 space-y-5">
            {site.phones.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block rounded-2xl border border-gold/20 bg-maroon-deep/40 px-5 py-4 transition hover:border-gold"
              >
                <p className="text-xs tracking-[0.2em] text-gold-light uppercase">
                  {item.label}
                </p>
                <p className="font-serif mt-1 text-2xl">{item.display}</p>
              </a>
            ))}
            <p className="text-cream/70">
              {site.address.line1}
              <br />
              {site.address.line2}
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-[1.6rem] border border-gold/20 bg-ivory p-6 text-ink shadow-2xl md:p-8"
        >
          <label className="block text-sm text-maroon">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-maroon/15 bg-white px-4 py-3 outline-none focus:border-gold"
              autoComplete="name"
            />
          </label>
          <label className="mt-4 block text-sm text-maroon">
            Phone
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-2 w-full rounded-xl border border-maroon/15 bg-white px-4 py-3 outline-none focus:border-gold"
              autoComplete="tel"
              inputMode="tel"
            />
          </label>
          <label className="mt-4 block text-sm text-maroon">
            Message
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="mt-2 w-full resize-y rounded-xl border border-maroon/15 bg-white px-4 py-3 outline-none focus:border-gold"
              placeholder="Darshan, puja booking, festival enquiry…"
            />
          </label>
          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-maroon px-6 py-3 text-sm tracking-wide text-cream uppercase hover:bg-maroon-deep"
          >
            Text the temple
          </button>
          {sent ? (
            <p className="mt-3 text-center text-sm text-peacock">
              Your messages app should open. If it does not, please call us.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
