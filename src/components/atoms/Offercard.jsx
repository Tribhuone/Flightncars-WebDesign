
import { Tag, Umbrella } from "lucide-react";

export default function OfferCard({ title, subtitle, tag }) {

    return (
        <div className="rounded-3xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
            <div className="mb-3 flex items-center justify-between">

                <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-bold text-rose-600">
                    {tag}
                </span>

                <Tag className="h-4 w-4 text-slate-400" />
            </div>

            <div className="mb-4 h-28 rounded-2xl bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 p-4">
                <div className="flex h-full items-end justify-between">

                    <div>
                        <p className="text-[12px] font-semibold text-slate-500">Special Offer</p>
                        <h3 className="text-[18px] font-extrabold text-slate-900">{title}</h3>
                    </div>

                    <div className="rounded-2xl bg-white/80 p-2 shadow-sm">
                        <Umbrella className="h-6 w-6 text-orange-500" />
                    </div>

                </div>
            </div>

            <p className="text-[12px] font-medium text-slate-600">{subtitle}</p>
        </div>
    );
}