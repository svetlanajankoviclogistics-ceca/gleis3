// app/components/PrivacyClient.tsx
"use client";

export default function PrivacyClient({ dict, lang }: { dict: any; lang: string }) {
  return (
    <main className="min-h-screen bg-gray-900 text-gray-200">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-100 mb-2">{dict.heading}</h1>
        <p className="text-sm text-gray-400 mb-8">{dict.lastUpdate}</p>

        {/* 1. Controller */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.controllerTitle}</h2>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
            <p className="font-medium">Restaurant Café Gleis 3 Reshanth</p>
            <p>Bahnhofstrasse 22, 3800 Interlaken, Switzerland</p>
            <p>E-mail: restaurant.gleis3@gmail.com</p>
            <p>Commercial register: CHE-352.094.866</p>
            <p>CH-ID: CH-036-1081282-5</p>
          </div>
        </section>

        {/* 2. Legal bases */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.legalBasesTitle}</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Federal Act on Data Protection (FADP, SR 235.1, in force 1 Sept 2023)</li>
            <li>Telecommunications Act (TCA, Art. 45c)</li>
            <li>FDPIC Guidelines on Cookies v1.1 (6 Oct 2025)</li>
          </ul>
        </section>

        {/* 3. Data collected */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.dataCollectedTitle}</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Essential cookies: session, language, cart</li>
            <li>Analytics cookies: anonymised IP, page views (only with opt-in)</li>
            <li>Marketing cookies: cross-site identifiers (only with opt-in)</li>
            <li>Form data: name, e-mail, phone (reservation / contact)</li>
          </ul>
        </section>

        {/* 4. Purposes & legal basis */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.purposesTitle}</h2>
          <p className="text-gray-300 leading-relaxed">
            We process personal data to: (1) operate the website (Art. 6 §1 lit. b FADP – contract), (2) measure audience (Art. 31 FADP – consent), (3) deliver personalised ads (Art. 31 FADP – consent).
          </p>
        </section>

        {/* 5. Retention */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.retentionTitle}</h2>
          <p className="text-gray-300 leading-relaxed">
            Analytics: 14 months (anonymised). Marketing: 6 months or until you withdraw. Reservation data: 2 years (accounting). At end of period data is securely deleted or fully anonymised.
          </p>
        </section>

        {/* 6. Third parties */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.thirdPartiesTitle}</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Google Analytics (IP anonymised, only after consent)</li>
            <li>Facebook Pixel (only after consent)</li>
            <li>Cloudinary (image hosting, EU servers)</li>
          </ul>
        </section>

        {/* 7. International transfers */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.transfersTitle}</h2>
          <p className="text-gray-300 leading-relaxed">
            We use EU-based processors (Google Analytics EU, Cloudinary EU) and rely on **Standard Contractual Clauses** for any US sub-processor.
          </p>
        </section>

        {/* 8. Your rights (FADP Art. 8) */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.rightsTitle}</h2>
          <ul className="list-disc ml-6 space-y-1 text-gray-300">
            <li>Access your data</li>
            <li>Rectify inaccurate data</li>
            <li>Erasure ("right to be forgotten")</li>
            <li>Withdraw consent at any time (cookie settings)</li>
            <li>Lodge complaint with FDPIC: edi@edi.admin.ch</li>
          </ul>
        </section>

        {/* 9. Cookie management */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.cookiesTitle}</h2>
          <p className="text-gray-300 leading-relaxed">
            You can change or withdraw your cookie choices at any time by clicking
            <button
              onClick={() => window.dispatchEvent(new Event("showCookieBanner"))}
              className="ml-1 underline text-amber-400 hover:text-amber-300"
            >
              “Cookie settings”
            </button>.
          </p>
        </section>

        {/* 10. Contact */}
        <section>
          <h2 className="text-xl font-semibold text-gray-100 mb-3">{dict.contactTitle}</h2>
          <p className="text-gray-300 leading-relaxed">
            For questions about this policy or your data, please contact:  
            <a href="mailto:restaurant.gleis3@gmail.com" className="underline text-amber-400 hover:text-amber-300">restaurant.gleis3@gmail.com</a>
          </p>
        </section>

        <p className="text-xs text-gray-500 mt-10">{dict.lastUpdate}</p>
      </div>
    </main>
  );
}