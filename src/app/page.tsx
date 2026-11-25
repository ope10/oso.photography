import { Hero } from "@/components/hero";
import { HomeAbout } from "@/components/home-about";
import { HomeServices } from "@/components/home-services";
import { HomePortfolio } from "@/components/home-portfolio";
import { Faq } from "@/components/faq";
import { Testimonials } from "@/components/testimonials";
import { WatermarkDamien } from "@/components/watermark";
import { Marquee } from "@/components/marquee";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomePortfolio />
      <Faq />
      <Testimonials />
      <WatermarkDamien />
      <Marquee />
    </div>
  );
}
