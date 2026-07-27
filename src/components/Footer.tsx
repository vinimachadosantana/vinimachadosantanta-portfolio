import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { nav, socials, contact, hero } from "@/lib/data";

const icons: Record<string, React.ElementType> = { GitHub: FaGithub, LinkedIn: FaLinkedin, Twitter: FaTwitter, YouTube: FaYoutube };

export default function Footer() {
  return (
    <footer className="border-t border-[#22222E]">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <a href="#home" className="font-display text-lg font-bold"><span className="text-[#6D5EFC]">◆</span> {hero.name}</a>
          <p className="mt-3 max-w-xs text-sm text-[#9A9AB2]">{hero.eyebrow}</p>
        </div>
        <div>
          <h4 className="font-display mb-3 text-sm font-semibold">Quick links</h4>
          <ul className="space-y-2 text-sm text-[#9A9AB2]">{nav.map((n) => (<li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>))}</ul>
        </div>
        <div>
          <h4 className="font-display mb-3 text-sm font-semibold">Contact</h4>
          <ul className="space-y-2 text-sm text-[#9A9AB2]"><li>{contact.email}</li><li>{contact.phone}</li><li>{contact.location}</li></ul>
        </div>
        <div>
          <h4 className="font-display mb-3 text-sm font-semibold">Social</h4>
          <div className="flex gap-3">
            {socials.map((s) => {
              const Icon = icons[s.name];
              return <a key={s.name} href={s.href} aria-label={s.name} className="rounded-lg border border-[#22222E] p-2 text-[#9A9AB2] transition-colors hover:border-[#6D5EFC]/60 hover:text-white"><Icon size={16} /></a>;
            })}
          </div>
        </div>
      </div>
      <div className="border-t border-[#22222E] py-6 text-center text-xs text-[#9A9AB2]">© {new Date().getFullYear()} {hero.name}. Built with Next.js & Tailwind.</div>
    </footer>
  );
}