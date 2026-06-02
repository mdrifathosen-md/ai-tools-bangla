import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Categories } from "@/components/site/Categories";
import { FeaturedTools } from "@/components/site/FeaturedTools";
import { Blog } from "@/components/site/Blog";
import { EarnWithAI } from "@/components/site/EarnWithAI";
import { Testimonials } from "@/components/site/Testimonials";
import { Newsletter } from "@/components/site/Newsletter";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AI Tools Bangla — বাংলায় সেরা AI Tools খুঁজুন ও শিখুন" },
      { name: "description", content: "১০০+ AI Tools, Guides, Reviews এবং AI দিয়ে আয় করার উপায় — সব কিছু বাংলায়, এক জায়গায়।" },
      { property: "og:title", content: "AI Tools Bangla" },
      { property: "og:description", content: "১০০+ AI Tools, Guides, Reviews এবং AI দিয়ে আয় করার উপায়।" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@400;500;600;700&family=Hind+Siliguri:wght@400;500;600;700&display=swap" },
      { rel: "canonical", href: "/" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <FeaturedTools />
      <Blog />
      <EarnWithAI />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}
