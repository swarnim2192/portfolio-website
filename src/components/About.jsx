import Particles from "./Particles";

export default function About() {
  return (
    <div className="relative">
      <Particles count={20} opacity={0.15} />
      <div className="relative z-10 grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold">About</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Hi, I'm Swarnim Khanal—a full-stack developer and CS student at Texas State University who loves turning ideas into code. With a foundation in Data Analytics and Applied Mathematics, I build innovative solutions that bridge the gap between complex data and user-friendly applications. Whether I'm developing machine learning models, crafting full-stack web applications, or analyzing datasets to uncover insights, I'm driven by one goal: solving real-world problems through technology. When I'm not immersed in code, you'll find me listening to music, sketching, or playing football—hobbies that keep me balanced and inspire my creative approach to development.
          </p>
        </div>
        <aside className="border border-slate-200 dark:border-slate-800 rounded-xl p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <h3 className="font-semibold">Quick Links</h3>
          <div className="mt-3 flex flex-col gap-2">
            <a className="hover:text-sky-600 transition-colors" href="https://github.com/swarnim2192">GitHub</a>
            <a className="hover:text-sky-600 transition-colors" href="https://www.linkedin.com/in/swarnim-khanal/">LinkedIn</a>
            <a className="hover:text-sky-600 transition-colors" href="mailto:swarnimkhanal7@gmail.com">swarnimkhanal7@gmail.com</a>
          </div>
        </aside>
      </div>
    </div>
  );
}
