import { Headphones, Mail, MapPin, ShieldCheck } from "lucide-react";

const footerLinks = ["Flights", "Hotels", "Recharge", "Account", "Offers"];

export default function HomeFooter() {
    return (
        <footer className="bg-white rounded-3xl p-5 text-slate-900 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-bold text-slate-950">Flighsncars</h2>
                    <p className="mt-1 text-sm leading-5 text-slate-600">
                        Travel bookings, bill payments and daily utilities in one place.
                    </p>
                </div>

                <div className="h-11 w-11 shrink-0 rounded-2xl bg-sky-100 flex items-center justify-center text-sky-600">
                    <ShieldCheck size={22} />
                </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2">
                {footerLinks.map((link) => (
                    <button
                        key={link}
                        className="rounded-xl border border-slate-200 px-3 py-2 text-left text-sm font-medium text-slate-800"
                    >
                        {link}
                    </button>
                ))}
            </div>

            <div className="mt-5 space-y-3 border-t border-slate-100 pt-4 text-sm text-slate-700">
                <div className="flex items-center gap-2">
                    <Headphones size={16} />
                    <span>24/7 customer support</span>
                </div>
                <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>support@flighsncars.com</span>
                </div>
                <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>India</span>
                </div>
            </div>

            <p className="mt-4 text-xs text-slate-500">
                © 2026 Flighsncars. All rights reserved.
            </p>
        </footer>
    );
}
