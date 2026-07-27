import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Stack from "@/components/Stack";
import About from "@/components/About";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <Skills />
      <Stack />
      <About />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}