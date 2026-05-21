
import { Plane, Snowflake, Sun, Umbrella } from "lucide-react";
import { useState } from "react";
import { offerCards } from "../../data/homeData";

const offerIcons = {
    Holidays: Umbrella,
    Summer: Sun,
    Winter: Snowflake,
};

export default function OffersSection() {
    const [activeOffer, setActiveOffer] = useState(0);

    return (

        <div className="bg-white rounded-3xl p-4 text-slate-900 overflow-hidden">
            <h2 className="text-[28px] font-medium leading-tight text-slate-900">
                Latest Offers
            </h2>

            <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
                {offerCards.map((offer, index) => (
                    <button
                        key={offer.category}
                        type="button"
                        onClick={() => setActiveOffer(index)}
                        className={`rounded-md px-3 py-2 text-sm transition-colors ${activeOffer === index
                            ? "bg-slate-100 text-slate-950 shadow-sm"
                            : "text-slate-800"
                            }`}
                    >
                        {offer.category}
                    </button>
                ))}
            </div>

            <div className="mt-3 flex items-center gap-3">
                <span className="h-px flex-1 bg-slate-200" />
                <span className="h-3.5 w-3.5 rounded-full border border-amber-400" />
                <span className="h-px flex-1 bg-slate-200" />
            </div>

            <p className="mt-3 text-[16px] leading-8 text-slate-700">
                Discover unbeatable deals on flights, hotels, bus tickets, and holiday packages.
                Book from a wide selection of stays and travel options for every budget.
            </p>

            <div className="mt-4 overflow-hidden">
                <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeOffer * 100}%)` }}
                >
                    {offerCards.map((offer) => {
                        const Icon = offerIcons[offer.category] ?? Plane;

                        return (
                            <article
                                key={offer.category}
                                className="min-w-full rounded-lg border border-slate-200 bg-white p-4 shadow-md"
                            >
                                <div className="relative mx-auto flex h-52 w-full max-w-[230px] flex-col justify-between overflow-hidden rounded-lg p-4 text-white">
                                    <img
                                        src="/move-plane-2.gif"
                                        width={230}
                                        height={208}
                                        alt=""
                                        className="absolute inset-0 h-full w-full object-cover object-center"
                                    />
                                    <div className="absolute inset-0 bg-slate-950/35" />

                                    <div className="relative z-10 flex items-center justify-between">
                                        <span className="text-xs font-bold uppercase tracking-wide">
                                            {offer.badge}
                                        </span>
                                        <Icon size={26} />
                                    </div>

                                    <p className="relative z-10 text-xl font-black leading-5 drop-shadow">
                                        Book Trip
                                        <br />
                                        Ticket Now
                                    </p>
                                </div>

                                <h3 className="mt-4 text-lg font-bold leading-6 text-slate-950">
                                    {offer.title}
                                </h3>

                                <div className="mt-2 h-px w-10 bg-rose-500" />

                                <p className="mt-3 text-sm leading-6 text-slate-500">
                                    {offer.subtitle}
                                </p>

                                <button className="mt-2 block w-full text-right text-sm font-semibold text-blue-600">
                                    {offer.cta}
                                </button>
                            </article>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
