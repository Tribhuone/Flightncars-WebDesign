
import { travelItems } from "../../data/homeData";
import TileLayer from "../atoms/TileLayer";
import SectionHeader from "../atoms/SectionHeader";

export default function TravelSection() {
    return (

        <div className="bg-white p-4 rounded-3xl text-slate-900">
            <SectionHeader
                title="Travel"
            />

            <div className="grid grid-cols-3 gap-4">
                {
                    travelItems.map(item => (
                        <TileLayer
                            key={item.label}
                            {...item}
                        />
                    ))
                }
            </div>

            {/* <div className="grid grid-cols-2 gap-3 mt-5">
                <button className="border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-900">
                    Register Your Business
                </button>

                <button className="border border-slate-200 rounded-xl p-3 text-sm font-medium text-slate-900">
                    Latest Special Offers
                </button>
            </div> */}
        </div>
    );
}
