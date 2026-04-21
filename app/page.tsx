import AboutUs from "@/components/Aboutus";
import BehindTheScenes from "@/components/BTS";
import ContactUs from "@/components/Contact";
import CTABanner from "@/components/CTA";
import FAQSection from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowToSubscribe from "@/components/HowToSubscribe";
import StatsBar from "@/components/Statsbar";
import TeamsSection from "@/components/TeamsSection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <StatsBar />
      <HowToSubscribe />
      <TeamsSection />
      <BehindTheScenes />
      <AboutUs />
      <Testimonials />
      <FAQSection />
      <CTABanner />
      <ContactUs />
    </div>
  );
}
