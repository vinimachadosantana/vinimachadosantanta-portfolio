import { hero } from "@/lib/data";
export default function SpinBadge() {
  return (
    <div className="animate-spin-slow h-28 w-28 sm:h-32 sm:w-32" aria-hidden="true">
      <svg viewBox="0 0 100 100" className="h-full w-full">
        <defs><path id="badge-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" /></defs>
        <text className="fill-white uppercase" style={{ fontSize: "9px", letterSpacing: "2px" }}>
          <textPath href="#badge-circle">{hero.badgeText}</textPath>
        </text>
      </svg>
    </div>
  );
}