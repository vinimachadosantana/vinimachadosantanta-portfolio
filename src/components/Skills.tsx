"use client";
import { motion } from "motion/react";
import { Code2, Server, Palette } from "lucide-react";
import { skills } from "@/lib/data";

const icons: Record<string, React.ElementType> = { code: Code2, server: Server, palette: Palette };

export default function Skills() {
  return (
    <motion.section
      id="skills"
      className="mx-auto max-w-6xl px-6 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-widest text-[#6D5EFC]">Speciality</p>
        <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">What I do</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {skills.map((s) => {
          const Icon = icons[s.icon];
          return (
            <div key={s.title} className="group rounded-2xl border border-[#22222E] bg-[#13131C] p-8 transition-colors hover:border-[#6D5EFC]/60">
              <div className="mb-5 inline-flex rounded-xl bg-[#6D5EFC]/10 p-3 text-[#6D5EFC]"><Icon size={24} /></div>
              <h3 className="font-display mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[#9A9AB2]">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}