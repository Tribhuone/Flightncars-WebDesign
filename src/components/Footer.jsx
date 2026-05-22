import { BadgePercent, Home, Search, UserRound, Wallet } from "lucide-react";

const footerTabs = [
  { label: "Home", icon: Home, active: true },
  { label: "Search", icon: Search },
  { label: "Offers", icon: BadgePercent },
  { label: "Wallet", icon: Wallet },
  { label: "Profile", icon: UserRound },
];

export default function Footer() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-[900] w-[calc(100%-28px)] max-w-[402px] -translate-x-1/2 rounded-[28px] border border-white/70 bg-white/72 px-2 py-2 shadow-[0_18px_44px_rgba(15,23,42,0.2)] backdrop-blur-2xl">
      <div className="grid grid-cols-5 gap-1">
        {footerTabs.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`flex h-12 items-center justify-center gap-1.5 rounded-2xl text-xs font-semibold transition active:scale-95 ${
              active
                ? "bg-slate-950 px-3 text-white shadow-[0_10px_22px_rgba(15,23,42,0.24)]"
                : "text-slate-500"
            }`}
          >
            <Icon size={19} />
            {active && <span>{label}</span>}
          </button>
        ))}
      </div>
    </nav>
  );
}
