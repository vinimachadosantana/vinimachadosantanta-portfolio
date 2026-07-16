import { GitBranch, SquareArrowOutUpRight, Bird, SquarePlay, Phone, Mail, MapPin } from "lucide-react";
import { socials, contact } from "@/lib/data";

const icons: Record<string, React.ElementType> = { GitHub: GitBranch, LinkedIn: SquareArrowOutUpRight, Twitter: Bird, YouTube: SquarePlay };

export default function TopBar() {
  return (
    <div className="hidden border-b border-[#22222E] text-xs text-[#9A9AB2] md:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-4">
          {socials.map((s) => {
            const Icon = icons[s.name];
            return <a key={s.name} href={s.href} aria-label={s.name} className="transition-colors hover:text-white"><Icon size={15} /></a>;
          })}
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2"><Phone size={13} /> {contact.phone}</span>
          <span className="flex items-center gap-2"><Mail size={13} /> {contact.email}</span>
          <span className="flex items-center gap-2"><MapPin size={13} /> {contact.location}</span>
        </div>
      </div>
    </div>
  );
}