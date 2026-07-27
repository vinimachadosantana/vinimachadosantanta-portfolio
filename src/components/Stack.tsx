import { stack } from "@/lib/data";

export default function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-widest text-[#6D5EFC]">Toolbox</p>
        <h2 className="font-display mt-2 text-3xl font-bold md:text-4xl">Tech I work with</h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-6">
        {stack.map((group) => (
          <div key={group.label} className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <h3 className="w-full text-sm font-semibold text-[#9A9AB2] sm:w-48 sm:shrink-0">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[#22222E] bg-[#13131C] px-3 py-1.5 text-sm text-white/90"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}