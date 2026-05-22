import {
  ArrowRight,
  Bot,
  CalendarDays,
  CloudSun,
  Compass,
  Heart,
  IndianRupee,
  MapPin,
  Plane,
  Search,
  Sparkles,
  Star,
  UsersRound,
} from "lucide-react";
import Navbar from "./components/Navbar";
import FooterNav from "./components/Footer";
import HeroSection from "./components/Home/Hero";
import TravelSection from "./components/Home/Travel";
import RechargeSection from "./components/Home/Recharge";
import UtilitiesSection from "./components/Home/Utilities";
import HomeFooter from "./components/Home/HomeFooter";

const chips = ["Beach", "Adventure", "Family", "Luxury", "Weekend"];

const destinations = [
  {
    name: "Bali",
    country: "Indonesia",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dubai",
    country: "UAE",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Goa",
    country: "India",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Manali",
    country: "India",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=900&q=80",
  },
];

const recommendations = [
  {
    title: "Bali Luxe Villa Escape",
    place: "Seminyak, Bali",
    price: "₹58,400",
    rating: "4.9",
    badge: "AI Match",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Dubai Skyline Weekend",
    place: "Downtown Dubai",
    price: "₹42,900",
    rating: "4.8",
    badge: "Hot Deal",
    image:
      "https://images.unsplash.com/photo-1526495124232-a04e1849168c?auto=format&fit=crop&w=900&q=80",
  },
];

function SectionTitle({ title, action = "View all" }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-[19px] font-semibold tracking-[-0.01em] text-slate-950">
        {title}
      </h2>
      <button className="text-xs font-semibold text-sky-600">{action}</button>
    </div>
  );
}

function BookingWidget() {
  return (
    <section className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-slate-950 via-slate-900 to-sky-900 p-4 text-white shadow-[0_24px_50px_rgba(15,23,42,0.28)]">
      <Plane className="absolute right-5 top-5 text-white/20" size={82} />
      <CloudSun className="absolute -left-3 bottom-7 text-white/15" size={76} />

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
              Book your route
            </p>
            <h2 className="mt-1 text-2xl font-semibold">Flight + Stay</h2>
          </div>
          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur">
            Smart fare
          </span>
        </div>

        <div className="mt-5 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
          <div className="rounded-2xl bg-white/12 p-3 backdrop-blur">
            <p className="text-[11px] text-white/60">From</p>
            <p className="text-lg font-semibold">DEL</p>
            <p className="truncate text-xs text-white/65">New Delhi</p>
          </div>
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-slate-950 shadow-lg">
            <ArrowRight size={18} />
          </span>
          <div className="rounded-2xl bg-white/12 p-3 text-right backdrop-blur">
            <p className="text-[11px] text-white/60">To</p>
            <p className="text-lg font-semibold">DXB</p>
            <p className="truncate text-xs text-white/65">Dubai</p>
          </div>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button className="flex items-center gap-2 rounded-2xl bg-white/12 p-3 text-left backdrop-blur transition active:scale-[0.98]">
            <CalendarDays size={18} className="text-cyan-200" />
            <span>
              <span className="block text-[11px] text-white/60">Date</span>
              <span className="text-sm font-semibold">28 May</span>
            </span>
          </button>
          <button className="flex items-center gap-2 rounded-2xl bg-white/12 p-3 text-left backdrop-blur transition active:scale-[0.98]">
            <UsersRound size={18} className="text-cyan-200" />
            <span>
              <span className="block text-[11px] text-white/60">Travelers</span>
              <span className="text-sm font-semibold">2 Adults</span>
            </span>
          </button>
        </div>

        <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3.5 text-sm font-bold text-slate-950 shadow-xl transition active:scale-[0.99]">
          <Search size={18} />
          Search premium trips
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <div className="mx-auto min-h-screen max-w-[430px] overflow-hidden border border-gray-800/90 bg-slate-100">
        <Navbar />

        <div className="space-y-5 px-4 pb-28 pt-4">
          <HeroSection />
          <section>
            <p className="text-[14px] font-semibold text-slate-500">Good Morning</p>
            <h1 className="text-[22px] font-bold leading-tight tracking-[-0.01em] text-slate-950">
              Ready for your next journey?
            </h1>
          </section>

          <div className="flex items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-[0_12px_28px_rgba(15,23,42,0.08)]">
            <Search size={19} className="text-sky-600" />
            <span className="flex-1 text-sm text-slate-500">
              Search destinations, flights, hotels, packages
            </span>
            <Compass size={18} className="text-slate-400" />
          </div>

          <BookingWidget />

          <TravelSection />
          <RechargeSection />
          <UtilitiesSection />

          <div className="no-scrollbar flex gap-2 overflow-x-auto pb-1">
            {chips.map((chip, index) => (
              <button
                key={chip}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition active:scale-95 ${
                  index === 0
                    ? "bg-slate-950 text-white"
                    : "bg-white/80 text-slate-700"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>

          <section className="space-y-3">
            <SectionTitle title="Trending destinations" />
            <div className="no-scrollbar flex gap-3 overflow-x-auto pb-2">
              {destinations.map((destination) => (
                <article
                  key={destination.name}
                  className="relative h-48 w-36 shrink-0 overflow-hidden rounded-[26px] shadow-[0_18px_32px_rgba(15,23,42,0.16)]"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
                  <button className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/24 text-white backdrop-blur">
                    <Heart size={16} />
                  </button>
                  <div className="absolute left-3 right-3 bottom-3 text-white">
                    <div className="flex items-center gap-1 text-xs font-semibold">
                      <Star size={13} fill="currentColor" />
                      {destination.rating}
                    </div>
                    <h3 className="mt-1 text-lg font-bold">{destination.name}</h3>
                    <p className="flex items-center gap-1 text-xs text-white/75">
                      <MapPin size={12} />
                      {destination.country}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-2 gap-3">
            <article className="rounded-[26px] bg-slate-950 p-4 text-white shadow-[0_18px_35px_rgba(15,23,42,0.2)]">
              <div className="flex items-center justify-between">
                <Bot className="text-cyan-200" size={24} />
                <Sparkles className="text-amber-200" size={18} />
              </div>
              <h3 className="mt-4 text-base font-bold">AI Trip Planner</h3>
              <p className="mt-1 text-xs leading-5 text-white/65">
                Build a 4-day Dubai itinerary in seconds.
              </p>
            </article>
            <article className="rounded-[26px] bg-white/85 p-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
              <CloudSun className="text-amber-500" size={25} />
              <h3 className="mt-4 text-base font-bold">Dubai, 31°C</h3>
              <p className="mt-1 text-xs leading-5 text-slate-500">
                Clear skies, ideal for evening tours.
              </p>
            </article>
            <article className="col-span-2 flex items-center justify-between rounded-[26px] bg-white/85 p-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)]">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
                  Currency converter
                </p>
                <h3 className="mt-1 text-lg font-bold">₹10,000 = AED 441</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-400 text-white">
                <IndianRupee size={22} />
              </span>
            </article>
          </section>

          <section className="space-y-3">
            <SectionTitle title="Recommended for you" />
            <div className="space-y-3">
              {recommendations.map((trip) => (
                <article
                  key={trip.title}
                  className="overflow-hidden rounded-[28px] bg-white shadow-[0_18px_42px_rgba(15,23,42,0.11)]"
                >
                  <div className="relative h-40">
                    <img
                      src={trip.image}
                      alt={trip.title}
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-950 backdrop-blur">
                      {trip.badge}
                    </span>
                    <span className="absolute bottom-4 right-4 rounded-full bg-slate-950/85 px-3 py-1 text-sm font-bold text-white backdrop-blur">
                      {trip.price}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-4">
                    <div>
                      <h3 className="font-bold leading-tight">{trip.title}</h3>
                      <p className="mt-1 flex items-center gap-1 text-xs text-slate-500">
                        <MapPin size={13} />
                        {trip.place}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-600">
                      <Star size={13} fill="currentColor" />
                      {trip.rating}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="rounded-[28px] bg-gradient-to-br from-white to-sky-50 p-4 shadow-[0_18px_38px_rgba(15,23,42,0.09)]">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-500">
                  Upcoming trip
                </p>
                <h2 className="mt-1 text-xl font-bold">Delhi to Dubai</h2>
                <p className="mt-1 text-sm text-slate-500">Today, 21:40 - 00:15</p>
              </div>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700">
                On time
              </span>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-sky-500" />
              <span className="h-1 flex-1 rounded-full bg-gradient-to-r from-sky-500 via-cyan-300 to-emerald-400" />
              <Plane className="text-sky-600" size={20} />
              <span className="h-3 w-3 rounded-full bg-emerald-500" />
            </div>
          </section>

          <HomeFooter />
        </div>

        <FooterNav />
      </div>
    </main>
  );
}
