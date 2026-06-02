import { ArrowRight, Search, Sparkles, BookOpen, Bot, Image as ImageIcon, Wand2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingTools = [
  { name: "ChatGPT", icon: Bot, gradient: "from-emerald-400 to-teal-500", pos: "top-4 left-2 sm:left-8", delay: "0s" },
  { name: "Midjourney", icon: ImageIcon, gradient: "from-fuchsia-500 to-purple-600", pos: "top-24 right-2 sm:right-4", delay: "1s" },
  { name: "Gemini", icon: Sparkles, gradient: "from-blue-500 to-indigo-600", pos: "bottom-24 left-0 sm:left-4", delay: "2s" },
  { name: "Claude", icon: Wand2, gradient: "from-orange-400 to-rose-500", pos: "bottom-4 right-4 sm:right-12", delay: "0.5s" },
];

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(0.555_0.22_264/0.12)_1px,transparent_0)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium mb-6">
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full size-2 bg-primary" />
              </span>
              <span className="font-bangla">নতুন: ১০০+ AI Tools যুক্ত হয়েছে</span>
            </div>

            <h1 className="font-bangla text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] tracking-tight">
              বাংলায় সেরা <span className="text-gradient">AI Tools</span>{" "}
              খুঁজুন ও শিখুন
            </h1>

            <p className="font-bangla mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              ১০০+ AI Tools, Guides, Reviews এবং AI দিয়ে আয় করার উপায় — সব কিছু এক জায়গায়, একদম বাংলায়।
            </p>

            <form className="mt-8 relative max-w-xl group" onSubmit={(e) => e.preventDefault()}>
              <div className="absolute -inset-0.5 bg-gradient-primary rounded-2xl opacity-30 group-focus-within:opacity-60 blur transition" />
              <div className="relative flex items-center gap-2 bg-surface rounded-2xl p-2 shadow-card border border-border">
                <Search className="size-5 text-muted-foreground ml-3" />
                <input
                  type="search"
                  placeholder="যেমন: ChatGPT, image generator, writing AI..."
                  className="flex-1 bg-transparent outline-none text-sm sm:text-base py-2.5 placeholder:text-muted-foreground font-bangla"
                />
                <Button variant="hero" size="default" className="rounded-xl">
                  Search
                </Button>
              </div>
            </form>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="hero" size="lg" className="group">
                Explore Tools
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="glass" size="lg">
                <BookOpen className="size-4" />
                Learn AI
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["from-blue-500 to-indigo-600", "from-fuchsia-500 to-purple-600", "from-emerald-400 to-teal-500", "from-amber-400 to-orange-500"].map((g, i) => (
                  <div key={i} className={`size-8 rounded-full bg-gradient-to-br ${g} border-2 border-background`} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <div className="text-xs font-bangla">10,000+ বাংলাদেশী ব্যবহারকারী</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-[480px] hidden lg:block">
            <div className="absolute inset-0 bg-gradient-mesh blur-2xl opacity-60" />
            <div className="relative h-full">
              {floatingTools.map((tool, i) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className={`absolute ${tool.pos} glass rounded-2xl p-4 shadow-card-hover w-56 ${i % 2 === 0 ? "animate-float" : "animate-float-delayed"}`}
                    style={{ animationDelay: tool.delay }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`size-12 rounded-xl bg-gradient-to-br ${tool.gradient} grid place-items-center shadow-lg`}>
                        <Icon className="size-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{tool.name}</div>
                        <div className="flex items-center gap-1 text-amber-500 text-xs">
                          {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="size-3 fill-current" />)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 h-1.5 bg-muted rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${tool.gradient}`} style={{ width: `${70 + i * 7}%` }} />
                    </div>
                  </div>
                );
              })}

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-32 rounded-3xl bg-gradient-primary grid place-items-center shadow-glow animate-float">
                <Sparkles className="size-14 text-primary-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
