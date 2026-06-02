import { useEffect, useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const links = [
  { label: "Home", href: "#home" },
  { label: "AI Tools", href: "#tools" },
  { label: "Categories", href: "#categories" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container mx-auto px-4">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl transition-all duration-300 px-4 sm:px-6 py-3",
            scrolled ? "glass shadow-card" : "bg-transparent",
          )}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="size-9 rounded-xl bg-gradient-primary grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                <Sparkles className="size-5 text-primary-foreground" />
              </div>
            </div>
            <div className="leading-tight">
              <div className="font-display font-bold text-base sm:text-lg">AI Tools <span className="text-gradient">Bangla</span></div>
              <div className="text-[10px] text-muted-foreground hidden sm:block font-bangla">বাংলায় AI শিখুন</div>
            </div>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">Login</Button>
            <Button variant="hero" size="sm" className="hidden sm:inline-flex">Get Started</Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 glass rounded-2xl p-4 animate-fade-up">
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-accent"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <Button variant="ghost" size="sm" className="flex-1">Login</Button>
                <Button variant="hero" size="sm" className="flex-1">Get Started</Button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
