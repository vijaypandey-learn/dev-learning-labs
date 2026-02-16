import React, { useState } from "react";
import { Cpu, Tv, Zap, House, Shield } from "lucide-react";

const GreenProject = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section id="green-project" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Act I: The Green Project
          </h2>
          <div className="h-1.5 w-20 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT SIDE - Story */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Zap className="text-amber-500 w-6 h-6" />
              Innovation Before Its Time (1991)
            </h3>

            <p className="text-slate-600 mb-10 leading-relaxed text-lg">
              In 1991, a small secret team known as the Green Team
              was tasked with imagining the future of consumer electronics.
              Their mission was bold: create a programming language capable
              of powering intelligent, network-connected devices — long before
              the term “Internet of Things” existed.
            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border">
                <Cpu className="text-amber-500 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">
                    True Platform Independence
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Programs were compiled into bytecode that ran on a virtual
                    machine, allowing software to work across different hardware
                    without rewriting code.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border">
                <Tv className="text-amber-500 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">
                    Interactive Cable Vision
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Designed for smart digital set-top boxes with interactive
                    menus and downloadable applications — years before smart TVs.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 border">
                <Shield className="text-amber-500 w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">
                    Security by Design
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Built-in memory management and controlled execution
                    environments reduced crashes and protected against
                    malicious code.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - Premium Dark Interactive Card */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-slate-900 rounded-[2.5rem] p-10 relative shadow-2xl overflow-hidden min-h-[480px] flex flex-col items-center justify-center">
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full"></div>

              {/* Feature Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6 w-full">
                {[
                  { icon: <Tv />, label: "Smart TV", id: "tv" },
                  { icon: <Zap />, label: "Energy", id: "energy" },
                  { icon: <Cpu />, label: "Processors", id: "cpu" },
                  { icon: <House />, label: "Smart Home", id: "home" }
                ].map((item, i) => (
                  <div
                    key={i}
                    onMouseEnter={() => setHoveredFeature(item.id)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className={`relative group aspect-square bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center justify-center gap-3 transition-all duration-500 cursor-pointer ${
                      hoveredFeature === item.id
                        ? "bg-amber-500/20 border-amber-500 scale-105 shadow-[0_0_25px_rgba(245,158,11,0.25)]"
                        : ""
                    }`}
                  >
                    <div
                      className={`p-4 rounded-2xl transition-all duration-500 ${
                        hoveredFeature === item.id
                          ? "bg-amber-500 text-slate-900"
                          : "bg-white/5 text-amber-400"
                      }`}
                    >
                      {React.cloneElement(item.icon, {
                        className: "w-6 h-6" // 👈 Reduced icon size
                      })}
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-widest transition-opacity ${
                        hoveredFeature === item.id
                          ? "text-amber-400 opacity-100"
                          : "text-slate-500 opacity-40"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Status Indicator */}
              <div className="mt-10 text-center relative z-10">
                <div className="px-6 py-2 rounded-full bg-white/5 border border-white/10 inline-flex items-center gap-3">
                  <div
                    className={`w-2 h-2 rounded-full ${
                      hoveredFeature
                        ? "bg-amber-500 animate-ping"
                        : "bg-slate-600"
                    }`}
                  ></div>
                  <span className="text-slate-400 text-xs font-medium">
                    {hoveredFeature
                      ? "Synthesizing Vision..."
                      : "Hover features to explore"}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default GreenProject;
