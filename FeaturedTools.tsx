import { ExternalLink, Star, Bot, Sparkles, Wand2, Search, Palette, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const tools = [
  { name: "ChatGPT", desc: "OpenAI-এর জনপ্রিয় conversational AI — লেখা, কোড, গবেষণা সবকিছু।", rating: 4.9, category: "AI Chat", icon: Bot, gradient: "from-emerald-400 to-teal-600", badge: "Most Popular" },
  { name: "Gemini", desc: "Google-এর multimodal AI assistant — image, text, code সব handle করে।", rating: 4.8, category: "AI Chat", icon: Sparkles, gradient: "from-blue-500 to-indigo-600" },
  { name: "Claude", desc: "Anthropic-এর powerful AI — দীর্ঘ লেখা ও complex reasoning-এ best।", rating: 4.8, category: "AI Chat", icon: Wand2, gradient: "from-orange-400 to-rose-500" },
  { name: "Perplexity", desc: "AI-powered search engine — citation সহ সরাসরি উত্তর।", rating: 4.7, category: "AI Search", icon: Search, gradient: "from-cyan-500 to-blue-600" },
  { name: "Canva AI", desc: "Design + AI — ছবি, presentation, social media post তৈরি করুন।", rating: 4.7, category: "Design AI", icon: Palette, gradient: "from-fuchsia-500 to-purple-600" },
  { name: "Midjourney", desc: "Premium AI image generator — artistic ও cinematic image তৈরি।", rating: 4.9, category: "Image AI", icon: ImageIcon, gradient: "from-violet-500 to-purple-700", badge: "Featured" },
];

export function FeaturedTools() {
  return (
    <section id="tools" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground mb-4">
              Featured Tools
            </div>
            <h2 className="font-bangla text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
              সবচেয়ে জনপ্রিয় <span className="text-gradient">AI Tools</span>
            </h2>
            <p className="mt-4 text-muted-foreground font-bangla leading-relaxed">
              হাতে বাছাই করা সেরা টুলগুলো — যেগুলো লাখো ইউজার ভরসা করে।
            </p>
          </div>
          <Button variant="outline" size="lg" className="self-start sm:self-auto">View All Tools</Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((t) => {
            const Icon = t.icon;
            return (
              <article key={t.name} className="group relative bg-card border border-border rounded-3xl p-6 hover-lift overflow-hidden">
                {t.badge && (
                  <span className="absolute top-4 right-4 text-[10px] uppercase tracking-wider font-bold bg-gradient-primary text-primary-foreground px-2.5 py-1 rounded-full">
                    {t.badge}
                  </span>
                )}

                <div className={`size-14 rounded-2xl bg-gradient-to-br ${t.gradient} grid place-items-center shadow-lg mb-5 group-hover:scale-105 transition-transform`}>
                  <Icon className="size-7 text-white" />
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <h3 className="font-display font-bold text-xl">{t.name}</h3>
                </div>

                <p className="text-sm font-bangla text-muted-foreground leading-relaxed mb-4 min-h-[3rem]">
                  {t.desc}
                </p>

                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1.5">
                    <Star className="size-4 fill-amber-500 text-amber-500" />
                    <span className="text-sm font-semibold">{t.rating}</span>
                  </div>
                  <span className="text-xs font-medium bg-accent text-accent-foreground px-3 py-1 rounded-full">
                    {t.category}
                  </span>
                </div>

                <Button variant="glow" className="w-full">
                  Visit Tool <ExternalLink className="size-4" />
                </Button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
