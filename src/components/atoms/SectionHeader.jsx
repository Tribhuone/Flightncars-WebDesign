
import { ChevronRight } from "lucide-react";

export default function SectionHeader({ title }) {
    return (

        <div className="flex justify-between items-center mb-4 text-slate-900">
            <h2 className="font-semibold text-lg text-slate-950">
                {title}
            </h2>

            <button className="flex items-center bg-gray-200 px-3 py-1 rounded-xl cursor-pointer text-blue-500 text-sm">
                View All
                <ChevronRight size={15} />

            </button>
        </div>
    )

}
