"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail, Phone } from "lucide-react";
import { useState, FormEvent } from "react";

export type ContactTranslation = {
  contactTitle: string;
  contactPlaceholderName: string;
  contactPlaceholderEmail: string;
  contactPlaceholderMessage: string;
  contactPlaceholderButton: string;
  companyDescription: string;
  companyAddressTitle: string;
  companyAddress: string;
  companyHoursTitle: string;
  companyHours: string;
  companyEmailTitle: string;
  companyEmail: string;
  companyPhoneTitle: string;
  companyPhone: string;
};

type ContactProps = {
  t: ContactTranslation;
};

export default function Contact({ t }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("sent");
      setName(""); setEmail(""); setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="w-full bg-[#0F0F0F] py-24">
      <div className="mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 max-w-5xl items-start">
        {/* LEFT SIDE — Company Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:justify-self-center space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.contactTitle}</h2>

          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">{t.companyDescription}</p>

          <div className="space-y-4 text-gray-300">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1" />
              <div className="text-sm sm:text-base">
                <p className="font-semibold">{t.companyAddressTitle}</p>
                <p>{t.companyAddress}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1" />
              <div className="text-sm sm:text-base">
                <p className="font-semibold">{t.companyHoursTitle}</p>
                <p>{t.companyHours}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1" />
              <div className="text-sm sm:text-base">
                <p className="font-semibold">{t.companyEmailTitle}</p>
                <a href={`mailto:${t.companyEmail}`} aria-label="Email us at restaurant.gleis3@gmail.com"  className="text-gray-300 hover:text-white transition">{t.companyEmail}</a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400 mt-1" />
              <div className="text-sm sm:text-base">
                <p className="font-semibold">{t.companyPhoneTitle}</p>
                <p>{t.companyPhone}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-[#1A1A1A] border border-white/10 backdrop-blur-md 
                     p-6 sm:p-10 rounded-2xl shadow-2xl flex flex-col w-full md:max-w-md"
        >
          <input
            type="text"
            placeholder={t.contactPlaceholderName}
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full py-3 px-4 rounded-xl text-white bg-[#0D0D0D] border border-white/10 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
          />

          <input
            type="email"
            placeholder={t.contactPlaceholderEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full py-3 px-4 rounded-xl text-white bg-[#0D0D0D] border border-white/10 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition"
          />

          <textarea
            placeholder={t.contactPlaceholderMessage}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            className="w-full py-3 px-4 rounded-xl text-white bg-[#0D0D0D] border border-white/10 placeholder-gray-500 focus:border-yellow-400 focus:outline-none transition resize-none"
          />

          <button
            type="submit"
            aria-label="Reserve a table at Restaurant Gleis 3"  
            disabled={status === "sending"}
            className="w-full py-4 rounded-full font-semibold text-black
                       bg-gradient-to-r from-[#D4B98C] to-[#C5A572]
                       hover:from-[#C5A572] hover:to-[#B8975F]
                       transition-all shadow-lg hover:shadow-[#C5A572]/30 disabled:opacity-50"
          >
            {status === "sending" ? "Sending..." : t.contactPlaceholderButton}
          </button>

          {status === "sent" && (
            <p className="text-center text-green-400 mt-4">Message sent!</p>
          )}
          {status === "error" && (
            <p className="text-center text-red-400 mt-4">Error. Try again.</p>
          )}
        </motion.form>
      </div>

      {/* Google Map */}
      <motion.div
        className="mt-12 w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <iframe
          title="Google Maps – Restaurant Gleis 3"
          src="https://maps.app.goo.gl/LFJgSj1ZNVrfDxSm7"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </section>
  );
}