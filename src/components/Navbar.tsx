"use client";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { nav } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-[#22222E] bg-[#0A0A0F]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="font-display text-lg font-bold tracking-tight"><span className="text-[#6D5EFC]">◆</span> yourname</a>
        <ul className="hidden items-center gap-8 text-sm text-[#9A9AB2] md:flex">
          {nav.map((item) => (<li key={item.href}><a href={item.href} className="transition-colors hover:text-white">{item.label}</a></li>))}
        </ul>
        <a href="#contact" className="hidden items-center gap-1 rounded-full bg-[#6D5EFC] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5B4BEF] md:inline-flex">
          Let&apos;s talk <ArrowUpRight size={16} />
        </a>
        <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden">{open ? <X /> : <Menu />}</button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[#22222E] px-6 py-4 text-sm md:hidden">
          {nav.map((item) => (<li key={item.href}><a href={item.href} onClick={() => setOpen(false)} className="block py-2 text-[#9A9AB2] hover:text-white">{item.label}</a></li>))}
        </ul>
      )}
    </header>
  );
}