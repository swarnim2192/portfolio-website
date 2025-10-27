export default function Contact() {
  return (
    <div className="max-w-xl">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-3 text-slate-600 dark:text-slate-300">Want to collaborate or chat? Send an email and I’ll get back soon.</p>
      <form className="mt-6 grid gap-3" onSubmit={(e) => { e.preventDefault(); alert("Thanks! This demo form doesn’t send yet."); }}>
        <input className="rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your name" required />
        <input type="email" className="rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Your email" required />
        <textarea rows="4" className="rounded-lg px-3 py-2 border border-slate-300 dark:border-slate-700 bg-transparent" placeholder="Message" required />
        <button className="mt-2 px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">Send</button>
      </form>
    </div>
  );
}
