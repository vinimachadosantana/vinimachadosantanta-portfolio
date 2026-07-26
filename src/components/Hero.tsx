import Image from "next/image";
import { ArrowRight, Gem } from "lucide-react";
import { hero } from "@/lib/data";
import SpinBadge from "./SpinBadge";

export default function Hero() {
  return (
    <section id="home" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-sm uppercase tracking-widest text-[#9A9AB2]">{hero.eyebrow}</p>
          <h1 className="font-display text-5xl font-bold leading-tight md:text-6xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-[#6D5EFC] to-[#4F8CFF] bg-clip-text text-transparent">{hero.name}</span>
          </h1>
          <p className="mt-6 max-w-md text-[#9A9AB2]">{hero.blurb}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#6D5EFC] px-6 py-3 text-sm font-medium transition-colors hover:bg-[#5B4BEF]">Hire me <ArrowRight size={16} /></a>
            <a href="#projects" className="inline-flex items-center gap-2 text-sm font-medium text-white/90 transition-colors hover:text-white">View my work <ArrowRight size={16} /></a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-[#6D5EFC]/20 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-[#22222E] bg-[#13131C]">
            <Image src="/me.png" alt="Vinicius Machado" fill className="object-cover" priority />
          </div>
          <div className="absolute -bottom-6 -left-6 flex items-center justify-center rounded-full bg-[#0A0A0F] p-1">
            <SpinBadge /><Gem className="absolute text-[#6D5EFC]" size={20} />
          </div>
          <div className="animate-float absolute -right-4 top-8 h-4 w-4 rotate-45 bg-[#6D5EFC]" />
          <div className="animate-float absolute -left-3 top-1/3 h-6 w-6 rounded-full border-2 border-[#4F8CFF]/50" />
        </div>
      </div>
    </section>
  );
}