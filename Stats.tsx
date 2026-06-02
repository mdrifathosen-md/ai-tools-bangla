import { Bot, BookOpen, Users, LayoutGrid } from "lucide-react";

const stats = [
  { value: "100+", label: "AI Tools", icon: Bot, gradient: "from-blue-500 to-indigo-600" },
  { value: "500+", label: "Guides", icon: BookOpen, gradient: "from-fuchsia-500 to-purple-600" },
  { value: "10K+", label: "Users", icon: Users, gradient: "from-emerald-400 to-teal-500" },
  { value: "50+", label: "Categories", icon: LayoutGrid, gradient: "from-amber-400 to-orange-500" },
];

export function Stats() {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-0 group-hover:opacity-100 blur transition" />
                <div className="relative bg-card border border-border rounded-2xl p-6 lg:p-8 hover-lift">
                  <div className={`size-12 rounded-xl bg-gradient-to-br ${s.gradient} grid place-items-center mb-4 shadow-lg`}>
                    <Icon className="size-6 text-white" />
                  </div>
                  <div className="font-display text-3xl lg:text-4xl font-bold">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
