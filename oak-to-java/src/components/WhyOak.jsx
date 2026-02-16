import { TreeDeciduous } from "lucide-react";

const WhyOak = () => {
  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6">Why "Oak"?</h2>

          <p className="text-slate-400 text-lg mb-8 leading-relaxed">
            The name was surprisingly literal. James Gosling looked out of his
            window at Sun Microsystems and saw a massive oak tree. It was
            robust, strong, and growing — exactly how he envisioned his
            language.
          </p>

          <div className="p-8 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <p className="italic text-amber-400 text-xl font-light">
              "It represented strength and growth. It was the literal reflection
              of our vision."
            </p>
          </div>
        </div>

        {/* Right Tree Illustration */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            <TreeDeciduous
              size={300}
              className="text-amber-500 opacity-20 absolute -inset-4 blur-xl"
            />
            <TreeDeciduous
              size={300}
              className="text-amber-500 relative"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyOak;
