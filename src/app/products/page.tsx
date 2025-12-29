// ==========================================
// src/app/products/page.tsx

import ProductHero from "@/components/products/ProductHero";
import ScrollReveal from "@/components/animations/scroll/scrollReveal";
import ProductCard from "@/components/products/ProductContent";

// ==========================================
export default function ProductsPage() {
  return (
    <main>
      <ProductHero />
      <ScrollReveal>
        <ProductCard />
      </ScrollReveal>
    </main>
  );
}
