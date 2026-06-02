import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "রাকিবুল হাসান",
    role: "Freelancer, Dhaka",
    text: "AI Tools Bangla থেকে শিখে ChatGPT দিয়ে এখন মাসে $800+ আয় করছি Upwork-এ।",
    gradient: "from-blue-500 to-indigo-600",
    initial: "র",
  },
  {
    name: "সাদিয়া আক্তার",
    role: "Content Creator",
    text: "বাংলায় এত detail-এ AI tutorial আর কোথাও পাইনি। আমার YouTube channel এখন 25K subscriber।",
    gradient: "from-fuchsia-500 to-purple-600",
    initial: "স",
  },
  {
    name: "তানভীর আহমেদ",
    role: "Student, BUET",
    text: "Coding AI section আমার study-তে অনেক help করেছে। Recommendation গুলো সত্যিই helpful।",
    gradient: "from-emerald-500 to-teal-600",
    initial: "ত",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-accent-foreground mb-4">
            Testimonials
          </div>
          <h2 className="font-bangla text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
            আমাদের <span className="text-gradient">ইউজাররা</span> কী বলছেন
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.name} className="relative bg-card border border-border rounded-3xl p-7 hover-lift">
              <Quote className="absolute top-6 right-6 size-8 text-primary/15" />
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="size-4 fill-current" />)}
              </div>
              <blockquote className="font-bangla text-foreground leading-relaxed mb-6">
                "{r.text}"
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <div className={`size-11 rounded-full bg-gradient-to-br ${r.gradient} grid place-items-center font-bold text-white font-bangla`}>
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm font-bangla">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
