import { Coffee } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between h-16 items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Coffee className="text-amber-500 w-6 h-6" />
          <span className="font-bold text-xl">
            Oak<span className="text-amber-500">To</span>Java
          </span>
        </div>

        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#home">Home</a>
          <a href="#green-project">The Project</a>
          <a href="#the-fail">The Pivot</a>
          <a href="#quiz" className="bg-amber-500 px-4 py-2 rounded-full">
            Take Quiz
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
