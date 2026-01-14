"use client";

import { useEffect, useState } from "react";
import clsx from "clsx";

type Purpose = "necessary" | "analytics" | "marketing";
type Consent = Record<Purpose, boolean>;

const KEY = "swiss_cookie_consent";

export default function SwissCookieBanner() {
  const [show, setShow] = useState(false);
  const [details, setDetails] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  /* 1. Provera postojećeg konsensa + slušaj custom događaj */
  useEffect(() => {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw) as Consent;
        setConsent(parsed);
        applyScripts(parsed);
      } catch {
        /* ignore malformed */
      }
    } else {
      setShow(true);
    }

    /* OTVORI BANNER KAD GOD NEKO EMITUJE "showCookieBanner" */
    const handleShow = () => setShow(true);
    window.addEventListener("showCookieBanner", handleShow);
    return () => window.removeEventListener("showCookieBanner", handleShow);
  }, []);

  /* 2. Primeni skripte */
  function applyScripts(c: Consent) {
    if (c.analytics) {/* load GA */ }
    if (c.marketing) {/* load Pixel */ }
  }

  /* 3. Snimanje konsensa */
  function save(decision: Consent) {
    localStorage.setItem(KEY, JSON.stringify(decision));
    applyScripts(decision);
    setShow(false);
  }

  function handleAcceptAll() {
    save({ necessary: true, analytics: true, marketing: true });
  }
  function handleRejectAll() {
    save({ necessary: true, analytics: false, marketing: false });
  }
  function handleSave(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const data = new FormData(ev.currentTarget);
    const res: Consent = {
      necessary: true,
      analytics: data.has("analytics"),
      marketing: data.has("marketing"),
    };
    save(res);
  }

  if (!show) return null;

  return (
    <section
      className={clsx(
        "fixed bottom-0 left-0 right-0 z-50",
        "bg-gray-900/95 backdrop-blur-md border-t border-gray-700",
        "text-gray-200 text-sm"
      )}
    >
      {/* Layer 1 – short info + equal buttons */}
      <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <p className="font-semibold mb-1">We use cookies</p>
          <p className="text-gray-400 leading-relaxed">
            We use cookies to make your experience better and to analyse traffic.
            You can accept all cookies, reject non-essential ones, or manage your
            choices at any time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleRejectAll}
            className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition"
          >
            Reject all
          </button>
          <button
            onClick={handleAcceptAll}
            className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition"
          >
            Accept all
          </button>
          <button
            onClick={() => setDetails((p) => !p)}
            className="px-4 py-2 rounded-md border border-gray-600 text-gray-300 hover:bg-gray-800 transition"
          >
            {details ? "Hide details" : "Manage choices"}
          </button>
        </div>
      </div>

      {/* Layer 2 – granular choice (unchecked by default) */}
      {details && (
        <form
          onSubmit={handleSave}
          className="border-t border-gray-800 px-6 pb-5"
        >
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
            {[
              {
                name: "necessary",
                label: "Strictly necessary",
                desc: "Required for the site to work (cannot be disabled).",
                disabled: true,
                defaultChecked: true,
              },
              {
                name: "analytics",
                label: "Analytics",
                desc: "Help us understand how visitors interact with the site.",
                disabled: false,
                defaultChecked: false,
              },
              {
                name: "marketing",
                label: "Marketing",
                desc: "Used to deliver relevant ads and measure campaigns.",
                disabled: false,
                defaultChecked: false,
              },
            ].map((p) => (
              <label
                key={p.name}
                className={clsx(
                  "flex items-start gap-3 p-3 rounded-lg border border-gray-700",
                  p.disabled && "opacity-60"
                )}
              >
                <input
                  type="checkbox"
                  name={p.name}
                  defaultChecked={p.defaultChecked}
                  disabled={p.disabled}
                  className="mt-1 h-4 w-4 rounded accent-gray-600"
                />
                <div>
                  <div className="font-medium text-gray-200">{p.label}</div>
                  <div className="text-xs text-gray-400">{p.desc}</div>
                </div>
              </label>
            ))}

            <div className="sm:col-span-3 flex items-center justify-end gap-3 pt-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-md bg-gray-700 hover:bg-gray-600 text-white transition"
              >
                Save choices
              </button>
            </div>
          </div>
        </form>
      )}
    </section>
  );
}