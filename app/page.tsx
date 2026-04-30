import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section id="features">
          <Features />
        </section>
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
