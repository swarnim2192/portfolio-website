import { useState } from "react";
import { motion } from "framer-motion";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/manlqgzo";

export default function Contact() {
  const [status, setStatus] = useState({ ok: null, msg: "" });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setStatus({ ok: true, msg: "Thanks! Your message was sent." });
        form.reset();
      } else {
        setStatus({ ok: false, msg: json.errors?.[0]?.message || "Something went wrong. Try again." });
      }
    } catch {
      setStatus({ ok: false, msg: "Network error. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">
        Want to collaborate or chat? Send a message—I'll get back soon.
      </p>

      <form className="mt-6 grid gap-3" onSubmit={onSubmit}>
        <input name="name" className="rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your name" required />
        <input type="email" name="email" className="rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your email" required />
        <textarea name="message" rows="4" className="rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Message" required />
        {/* spam honeypot */}
        <input type="text" name="_gotcha" className="hidden" tabIndex="-1" autoComplete="off" />
        {/* optional subject */}
        <input type="hidden" name="_subject" value="New message from portfolio site" />

        <button
          className="mt-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700 disabled:opacity-60"
          disabled={loading}
          type="submit"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>

      {status.msg && (
        <motion.div
          className={status.ok ? "mt-4 text-sm text-emerald-600" : "mt-4 text-sm text-rose-500"}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {status.msg}
        </motion.div>
      )}
    </div>
  );
}
