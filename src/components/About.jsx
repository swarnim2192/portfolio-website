export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <h2 className="text-2xl font-bold">About</h2>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          I am a Computer Science student at Texas State University (minors in Data Analytics and Mathematics), focused on software engineering, data analytics, and machine learning. I build end-to-end apps with React, Python/C++, and cloud tools, and I enjoy turning ideas into polished, user-friendly products.
        </p>
        <ul className="mt-4 list-disc pl-5 space-y-1 text-slate-600 dark:text-slate-300">
          <li>Research Intern — optimized solid mechanics simulations with FEM & ML; cut material usage 15% and runtime 25%.</li>
          <li>GPU acceleration on MI250/MI100 (CUDA/C++); improved compute throughput ~30%.</li>
          <li>Built interactive dashboards with REST APIs; better cross-browser compatibility and accuracy (+18%).</li>
          <li>Active leader: Nepalese Student Association Treasurer; GDSC/IEEE workshop lead.</li>
        </ul>
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
