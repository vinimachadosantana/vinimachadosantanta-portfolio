"use client";
import { motion } from "motion/react";
import { Send } from "lucide-react";
import { contact } from "@/lib/data";
export default function CTA() {
  return (
    <motion.section
      id="contact"
      className="mx-auto max-w-6xl px-6 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="relative overflow-hidden rounded-3xl border border-[#22222E] bg-gradient-to-r from-[#13131C] to-[#1a1730] p-10 text-center md:p-16">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#6D5EFC]/20 blur-3xl" />
        <h2 className="font-display text-3xl font-bold md:text-4xl">Have a project idea?</h2>
        <p className="mx-auto mt-3 max-w-md text-[#9A9AB2]">I&apos;m open to freelance work and full-time roles. Let&apos;s build something.</p>
        <a href={`mailto:${contact.email}`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#6D5EFC] px-7 py-3.5 text-sm font-medium transition-colors hover:bg-[#5B4BEF]"><Send size={16} /> Contact me</a>
      </div>
    </motion.section>
  );
}