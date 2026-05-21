
import { BadgePercent, Headphones, Home, User, Wallet } from "lucide-react";

const footerTabs = [
    {
        label: "Home",
        icon: Home,
    },
    {
        label: "Account",
        icon: User,
    },
    {
        label: "Offers",
        icon: BadgePercent,
    },
    {
        label: "Wallet",
        icon: Wallet,
    },
    {
        label: "Support",
        icon: Headphones,
    },
];

export default function Footer() {
    return (

        <div className="fixed bottom-0 bg-white w-full max-w-[430px] border-t border-slate-200">
            <div className="grid grid-cols-5 py-2">
                {footerTabs.map(({ label, icon: Icon }) => (
                    <button
                        key={label}
                        className="flex flex-col items-center justify-center gap-1 text-slate-950"
                    >
                        <Icon size={27} strokeWidth={1.9} />
                        <span className="text-sm leading-none">{label}</span>
                    </button>
                ))}
            </div>
        </div>
    );
}
