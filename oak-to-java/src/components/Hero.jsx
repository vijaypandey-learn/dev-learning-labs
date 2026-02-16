import { TreeDeciduous } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-[#0f172a] text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(#f59e0b 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
          The Untold Story
        </span>

        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-slate-400">Before Java, there was</span>{" "}
          <span className="text-amber-500">Oak.</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10">
          Discover how a failed attempt to revolutionize digital cable TV became
          the backbone of the modern World Wide Web.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#green-project"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-xl font-bold transition"
          >
            Explore the History
          </a>

          <a
            href="#quiz"
            className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold transition"
          >
            Test Your Knowledge
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 opacity-10 translate-y-1/3 translate-x-1/4">
        <TreeDeciduous size={600} className="text-amber-500" />
      </div>
    </section>
  );
};

export default Hero;
