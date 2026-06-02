import { Clock, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "ChatGPT দিয়ে কীভাবে freelancing শুরু করবেন",
    category: "Freelancing",
    time: "৬ min read",
    gradient: "from-blue-500 via-indigo-500 to-purple-600",
  },
  {
    title: "২০২৬ সালের সেরা ১০টি AI image generator",
    category: "Image AI",
    time: "৮ min read",
    gradient: "from-fuchsia-500 via-pink-500 to-rose-600",
  },
  {
    title: "AI দিয়ে YouTube channel automate করার গাইড",
    category: "YouTube",
    time: "১০ min read",
    gradient: "from-amber-500 via-orange-500 to-red-600",
  },
];

export function Blog() {
  return (
    <section id="blog" className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground mb-4 font-bangla">
              Latest Blog
            </div>
            <h2 className="font-bangla text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
              নতুন <span className="text-gradient">Guides & Tutorials</span>
            </h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:underline inline-flex items-center gap-1">
            View all posts <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group bg-card border border-border rounded-3xl overflow-hidden hover-lift">
              <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,white/20,transparent_60%)]" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="size-24 rounded-3xl glass grid place-items-center group-hover:scale-110 transition-transform">
                    <span className="font-display text-3xl font-bold text-white">AI</span>
                  </div>
                </div>
                <span className="absolute top-4 left-4 text-xs font-semibold bg-white/95 text-foreground px-3 py-1 rounded-full">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                  <Clock className="size-3.5" />
                  {p.time}
                </div>
                <h3 className="font-display font-bold text-lg leading-snug font-bangla mb-4 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <a href="#" className="inline-flex items-center gap-1 text-sm font-semibold text-primary group/link">
                  Read More
                  <ArrowRight className="size-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
