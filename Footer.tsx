import { Sparkles, Facebook, Twitter, Youtube, Instagram, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Quick Links",
    links: ["Home", "AI Tools", "Categories", "Blog", "Contact", "About Us"],
  },
  {
    title: "Categories",
    links: ["AI Chat", "AI Writing", "AI Image", "AI Video", "Coding AI", "Marketing AI"],
  },
  {
    title: "Resources",
    links: ["Earn with AI", "Free Guides", "AI Courses", "Prompt Library", "Newsletter", "Affiliate"],
  },
];

const socials = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <a href="#home" className="flex items-center gap-2 mb-5">
              <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow">
                <Sparkles className="size-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg">
                AI Tools <span className="text-gradient">Bangla</span>
              </span>
            </a>
            <p className="font-bangla text-sm text-muted-foreground leading-relaxed max-w-sm">
              বাংলাদেশের সবচেয়ে বড় AI Tools directory ও learning platform। ১০০+ tools, guides ও earning tips।
            </p>
            <div className="mt-6 flex items-center gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    aria-label={s.label}
                    className="size-10 rounded-xl border border-border bg-background grid place-items-center hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition"
                  >
                    <Icon className="size-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="lg:col-span-2">
              <h4 className="font-display font-semibold text-sm mb-4">{c.title}</h4>
              <ul className="space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li>hello@aitoolsbangla.com</li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} AI Tools Bangla. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="#" className="hover:text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-primary">Terms of Service</a>
            <a href="#" className="hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
