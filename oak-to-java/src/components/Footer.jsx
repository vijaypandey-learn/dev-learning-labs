import { Linkedin, Instagram, Coffee, CircleCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] pt-20 pb-12 text-center border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">

        {/* Social Icons */}
        <div className="mb-10 flex justify-center gap-8">
          <a
            href="https://www.linkedin.com/in/vijay-pandey-87804427b/"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white/5 rounded-2xl hover:text-amber-500 hover:bg-white/10 transition-all text-slate-400 group"
          >
            <Linkedin className="w-8 h-8 group-hover:scale-110 transition" />
          </a>

          <a
            href="https://www.instagram.com/buildthe.core/"
            target="_blank"
            rel="noreferrer"
            className="p-4 bg-white/5 rounded-2xl hover:text-amber-500 hover:bg-white/10 transition-all text-slate-400 group"
          >
            <Instagram className="w-8 h-8 group-hover:scale-110 transition" />
          </a>

          <div className="p-4 bg-white/5 rounded-2xl text-slate-400 cursor-default group">
            <Coffee className="w-8 h-8 group-hover:text-amber-500 transition" />
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-20 bg-amber-500/30 mx-auto mb-8"></div>

        {/* Name & Tagline */}
        <p className="text-xl font-bold text-white mb-2 tracking-tight">
          Vijay Pandey
        </p>

        <p className="text-sm text-slate-500 uppercase tracking-[0.3em] font-medium mb-8">
          Interactive Educational Experience
        </p>

        {/* Tech Stack */}
        <div className="flex items-center justify-center gap-2 text-slate-600 text-xs">
          <CircleCheck className="w-4 h-4" />
          <span>Built with React & Tailwind CSS</span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
