import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { SignatureExperiences } from "@/components/SignatureExperiences";
import { MenuPreview } from "@/components/MenuPreview";
import { Gallery } from "@/components/Gallery";
import { Reservation } from "@/components/Reservation";
import { Events } from "@/components/Events";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/30 selection:text-primary font-sans">
      <Nav />
      <Hero />
      <About />
      <SignatureExperiences />
      <MenuPreview />
      <Gallery />
      <Reservation />
      <Events />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}