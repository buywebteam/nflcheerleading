import AboutUs from "@/components/Aboutus";
import FAQSection from "@/components/FAQ";
import Hero from "@/components/Hero";
import HowToSubscribe from "@/components/HowToSubscribe";
import TeamsSection from "@/components/TeamsSection";
import Testimonials from "@/components/Testimonial";

export default function Home() {
  return (
    <div>
      <Hero />
      <HowToSubscribe />
      <TeamsSection />
      <AboutUs />
      <Testimonials />
      <FAQSection />
    </div>
  );
}
