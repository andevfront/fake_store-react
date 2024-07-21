import { HeroSection, ProductsGrid } from "./components";

export const HomePage = () => {
  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <HeroSection />
        <ProductsGrid />
      </main>
    </>
  );
};
