"use client";
import { motion } from "motion/react";
import { about } from "@/lib/data";

export default function About() {
  return (
    <motion.section
      id="about"
      className="mx-auto max-w-6xl px-6 py-20"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-widest text-[#6D5EFC]">{about.eyebrow}</p>
        <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">{about.title}</h2>
      </div>

      <div className="mx-auto max-w-2xl space-y-5">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-[#9A9AB2] leading-relaxed">{p}</p>
        ))}

        {about.currently && (
          <p className="border-l-2 border-[#6D5EFC] pl-4 text-sm text-white/90">
            {about.currently}
          </p>
        )}
      </div>
    </motion.section>
  );
}