import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import WorkProcess from "@/components/WorkProcess";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <TopBar /><Navbar /><Hero /><Skills /><WorkProcess /><Projects /><CTA /><Footer />
    </main>
  );
}