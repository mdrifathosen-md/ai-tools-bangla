import { Briefcase, PenSquare, Youtube, Terminal, FileText, Lightbulb, TrendingUp } from "lucide-react";

const earnings = [
  { title: "AI Freelancing", desc: "Fiverr, Upwork-এ AI skill দিয়ে আয়।", icon: Briefcase, gradient: "from-blue-500 to-indigo-600" },
  { title: "AI Blogging", desc: "AI দিয়ে blog লিখে monetize করুন।", icon: PenSquare, gradient: "from-fuchsia-500 to-purple-600" },
  { title: "YouTube Automation", desc: "Faceless channel চালিয়ে আয়।", icon: Youtube, gradient: "from-rose-500 to-red-600" },
  { title: "Prompt Engineering", desc: "Prompt লিখে high-paying job।", icon: Terminal, gradient: "from-emerald-500 to-teal-600" },
  { title: "AI Content Creation", desc: "Social media-র জন্য AI content।", icon: FileText, gradient: "from-amber-500 to-orange-600" },
  { title: "AI Business Ideas", desc: "Startup শুরু করার ১০+ idea।", icon: Lightbulb, gradient: "from-cyan-500 to-blue-600" },
];

export function EarnWithAI() {
  return (
    <section className="py-20 lg:py-28 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="container mx-auto px-4 relative">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-primary text-primary-foreground px-4 py-1.5 text-xs font-semibold mb-4">
            <TrendingUp className="size-3.5" />
            Earn With AI
          </div>
          <h2 className="font-bangla text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
            <span className="text-gradient">AI</span> দিয়ে আয় করার উপায়
          </h2>
          <p className="mt-4 text-muted-foreground font-bangla leading-relaxed">
            AI শিখে freelancing, content creation ও business — সবকিছুতে এগিয়ে থাকুন।
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {earnings.map((e) => {
            const Icon = e.icon;
            return (
              <div key={e.title} className="group relative">
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${e.gradient} rounded-3xl opacity-0 group-hover:opacity-60 blur transition`} />
                <div className="relative bg-card border border-border rounded-3xl p-7 hover-lift h-full">
                  <div className={`size-14 rounded-2xl bg-gradient-to-br ${e.gradient} grid place-items-center shadow-lg mb-5`}>
                    <Icon className="size-7 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">{e.title}</h3>
                  <p className="font-bangla text-muted-foreground text-sm leading-relaxed">{e.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
