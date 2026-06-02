import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Newsletter() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 lg:p-16 text-center text-primary-foreground shadow-glow">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,white/20,transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,white/10,transparent_50%)]" />
          <div className="absolute -top-24 -right-24 size-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-2xl mx-auto">
            <div className="inline-flex size-14 rounded-2xl bg-white/15 backdrop-blur-sm grid place-items-center mb-6">
              <Mail className="size-7" />
            </div>
            <h2 className="font-bangla text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.15]">
              Weekly AI Updates পেতে চান?
            </h2>
            <p className="font-bangla mt-4 text-base sm:text-lg text-white/90 leading-relaxed">
              নতুন AI tools, guides ও earning tips — সরাসরি আপনার inbox-এ। কোন spam নেই।
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="আপনার email address"
                className="flex-1 h-12 px-5 rounded-xl bg-white/95 text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-white font-bangla"
              />
              <Button
                type="submit"
                className="h-12 px-6 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-semibold"
              >
                Subscribe <Send className="size-4" />
              </Button>
            </form>

            <p className="mt-4 text-xs text-white/70 font-bangla">10,000+ Bangladeshi subscriber-দের সাথে যোগ দিন</p>
          </div>
        </div>
      </div>
    </section>
  );
}
