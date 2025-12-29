// src/app/page.tsx
import Hero from "@/components/hero/Hero";
import About from "@/components/landing/About";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <About />
      </ScrollReveal>
    </main>
  );
}
