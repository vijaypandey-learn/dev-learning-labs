import { Store, Scale, Globe } from "lucide-react";

const Pivot = () => {
  const cards = [
  {
    icon: <Store />,
    title: "Market Reality (1992–1993)",
    text: "The Green Project targeted interactive digital cable TV set-top boxes. However, cable providers lacked the infrastructure, and consumers weren’t ready for smart television interfaces. The hardware was expensive, slow, and the business model was unclear."
  },
  {
    icon: <Scale />,
    title: "Trademark Conflict",
    text: "The language was originally named 'Oak' after the tree outside James Gosling’s office. But a company called Oak Technology already owned the trademark. To avoid legal disputes, Sun Microsystems had to rename the language before its public launch."
  },
  {
    icon: <Store />,
    title: "Project Funding Challenges",
    text: "Sun Microsystems invested heavily in the Green Project without immediate commercial returns. When the cable TV market failed to adopt the technology, internal pressure increased to either repurpose the language or abandon it."
  },
  {
    icon: <Globe />,
    title: "The Rise of the World Wide Web",
    text: "Around 1994–1995, the World Wide Web was expanding rapidly. Web browsers like Mosaic were gaining popularity. The internet needed a secure, platform-independent programming language to run interactive content inside browsers."
  },
  {
    icon: <Globe />,
    title: "Write Once, Run Anywhere",
    text: "Oak’s biggest strength was platform independence through the Java Virtual Machine (JVM). This made it perfect for the internet, where code needed to run on different operating systems without modification."
  }
];


  return (
    <section id="the-fail" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Act II: The Great Pivot
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <div key={i} className="p-10 bg-slate-50 rounded-3xl border hover:shadow-xl transition">
              <div className="w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center mb-8">
                {card.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
              <p className="text-slate-600">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pivot;
