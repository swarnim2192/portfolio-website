export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Hi, I’m Swarnim Khanal, a Computer Science student at Texas State University with minors in Data Analytics and Applied Mathematics. I’m passionate about building innovative, data-driven solutions that blend creativity and technology—exploring AI, web development, and analytics to solve real-world problems through code. In my free time I enjoy listening to music, sketching, and playing football, which keeps me inspired and balanced while I learn and create.
        </p>
      </div>
      <aside className="border border-slate-200 dark:border-slate-800 rounded-xl p-4">
        <h3 className="font-semibold">Quick Links</h3>
        <div className="mt-3 flex flex-col gap-2">
          <a className="hover:text-sky-600" href="https://github.com/swarnim2192">GitHub</a>
          <a className="hover:text-sky-600" href="https://www.linkedin.com/in/swarnim-khanal/">LinkedIn</a>
          <a className="hover:text-sky-600" href="mailto:swarnimkhanal7@gmail.com">swarnimkhanal7@gmail.com</a>
        </div>
      </aside>
    </div>
  );
}
