import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { BeforeAfter } from "@/components/sections/before-after";
import { Demo } from "@/components/sections/demo";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <BeforeAfter />
        <Demo />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="faq">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  );
}
