"use client";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
export default function Projects() {
  return (
    <motion.section
      id="projects"
      className="mx-auto max-w-6xl px-6 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-12">
        <p className="text-sm uppercase tracking-widest text-[#6D5EFC]">Portfolio</p>
        <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">My projects</h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <a key={p.title} href={p.href} className="group overflow-hidden rounded-2xl border border-[#22222E] bg-[#13131C] transition-transform hover:-translate-y-1">
            <div className="flex aspect-video items-center justify-center" style={{ backgroundImage: `linear-gradient(135deg, ${p.from}, ${p.to})` }}>
              <span className="font-display text-2xl font-bold text-white/90">{p.title}</span>
            </div>
            <div className="flex items-center justify-between p-5">
              <div><h3 className="font-display font-semibold">{p.title}</h3><p className="text-sm text-[#9A9AB2]">{p.tag}</p></div>
              <ArrowUpRight className="text-[#9A9AB2] transition-colors group-hover:text-[#6D5EFC]" size={20} />
            </div>
          </a>
        ))}
      </div>
    </motion.section>
  );
}