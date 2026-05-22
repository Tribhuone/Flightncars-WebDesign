import {
  Menu,
  UserRound,
} from "lucide-react";
import { useState } from "react";

// const sidebarItems = [
//   "Home",
//   "Sign In",
//   "Create Account",
//   "Manage Bookings",
//   "Partner Login",
//   "Partner Registration",
//   "Profile & Terms",
//   "Make Online Payment",
// ];

export default function Navbar() {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[1000] border-b border-white/50 bg-[#f3f9ff] px-4 pb-3 pt-4 backdrop-blur-2xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Open menu"
            // onClick={() => setIsSidebarOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-2xl bg-white/85 text-slate-900 shadow-[0_12px_26px_rgba(15,23,42,0.08)] transition active:scale-95"
          >
            <Menu size={21} />
          </button>

            <div>
                <img
                    src="/new-logo.png"
                    width={170}
                    height={42}
                    alt="Flighsncars"
                    className="object-contain"
                />
            </div>

        </div>

        <div className="flex items-center gap-2">

          {/* <button
            type="button"
            aria-label="Trip alerts"
            className="relative grid h-11 w-11 place-items-center rounded-2xl bg-white/85 text-slate-900 shadow-[0_12px_26px_rgba(15,23,42,0.08)]"
          >
            <Bell size={19} />
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button> */}

          <button
            type="button"
            aria-label="Profile"
            className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-slate-950 to-sky-700 text-white shadow-[0_12px_26px_rgba(14,116,144,0.24)]"
          >
            <UserRound size={20} />
          </button>
        </div>
      </div>

      {/* <div className="mt-3 flex items-center justify-between rounded-2xl border border-white/70 bg-white/55 px-3 py-2 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-cyan-100 text-cyan-700">
            <Sparkles size={16} />
          </span>
          <span className="text-xs font-semibold text-slate-600">
            AI fares updated 4 min ago
          </span>
        </div>
        <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-bold text-white">
          Explore
        </span>
      </div> */}

      {/* {isSidebarOpen && (
        <div className="fixed inset-0 z-[1100]">
          <button
            type="button"
            aria-label="Close menu backdrop"
            onClick={() => setIsSidebarOpen(false)}
            className="absolute inset-0 bg-slate-950/35 backdrop-blur-sm"
          />

          <aside className="absolute left-0 top-0 h-full w-[min(360px,calc(100vw-42px))] rounded-r-[34px] bg-white px-5 py-5 shadow-2xl">
            <div className="flex items-center justify-between">
              <img
                src="/new-logo.png"
                width={170}
                height={42}
                alt="Flighsncars"
                className="object-contain"
              />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsSidebarOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-100 text-slate-900"
              >
                <X size={21} strokeWidth={2.5} />
              </button>
            </div>

            <nav className="mt-7">
              {sidebarItems.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="flex w-full items-center gap-4 border-b border-slate-100 py-3.5 text-left text-[16px] font-medium text-slate-700"
                >
                  <ChevronRight size={18} className="shrink-0 text-slate-400" />
                  <span className="flex flex-1 items-center gap-1">
                    <span className={item === "Profile & Terms" ? "font-bold" : ""}>
                      {item}
                    </span>
                    {item === "Profile & Terms" && (
                      <ChevronDown size={16} className="mt-0.5 text-slate-500" />
                    )}
                  </span>
                </button>
              ))}

              <button
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 py-3 text-sm font-bold text-white"
              >
                INR · English · ₹
              </button>
            </nav>
          </aside>
        </div>
      )} */}
    </header>
  );
}
