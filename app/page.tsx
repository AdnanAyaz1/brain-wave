import VerticalLines from "@/components/Reuseable/VerticalLines";
import Collaoration from "@/sections/Collaoration";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Roadmap from "@/sections/Roadmap";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem]  overflow-hidden relative">
      <Header />
      <Hero />
      <Features />
      <Collaoration />
      <Services />
      <Pricing />
      <Roadmap />
      <Footer />
      <VerticalLines />
    </div>
  );
}
