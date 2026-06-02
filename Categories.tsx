import { MessageSquare, PenLine, Image as ImageIcon, Video, Code2, Zap, Megaphone, GraduationCap, ArrowUpRight } from "lucide-react";

const categories = [
  { name: "AI Chat", count: 18, icon: MessageSquare, gradient: "from-blue-500 to-indigo-600" },
  { name: "AI Writing", count: 24, icon: PenLine, gradient: "from-fuchsia-500 to-purple-600" },
  { name: "AI Image Generation", count: 32, icon: ImageIcon, gradient: "from-rose-500 to-pink-600" },
  { name: "AI Video", count: 14, icon: Video, gradient: "from-amber-500 to-orange-600" },
  { name: "Coding AI", count: 22, icon: Code2, gradient: "from-emerald-500 to-teal-600" },
  { name: "Productivity AI", count: 28, icon: Zap, gradient: "from-yellow-400 to-amber-500" },
  { name: "Marketing AI", count: 19, icon: Megaphone, gradient: "from-cyan-500 to-blue-600" },
  { name: "Education AI", count: 16, icon: GraduationCap, gradient: "from-violet-500 to-purple-700" },
];

export function Categories() {
  return (
    <section id="categories" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground mb-4">
            Categories
          </div>
          <h2 className="font-bangla text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
            আপনার পছন্দের <span className="text-gradient">Category</span> বেছে নিন
          </h2>
          <p className="mt-4 text-muted-foreground font-bangla leading-relaxed">
            যেকোনো কাজের জন্য সঠিক AI টুল খুঁজে নিন — সবগুলো organized ক্যাটাগরিতে।
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.name}
                href="#tools"
                className="group relative bg-card border border-border rounded-2xl p-6 hover-lift overflow-hidden"
              >
                <div className={`absolute -top-12 -right-12 size-32 rounded-full bg-gradient-to-br ${c.gradient} opacity-10 group-hover:opacity-20 blur-2xl transition`} />
                <div className={`relative size-12 rounded-xl bg-gradient-to-br ${c.gradient} grid place-items-center shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="size-6 text-white" />
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-semibold text-base">{c.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{c.count} tools</p>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
