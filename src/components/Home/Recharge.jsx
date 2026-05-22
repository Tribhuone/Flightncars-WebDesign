
import SectionHeader from "../atoms/SectionHeader";
import IconTile from "../atoms/IconTile";

import { rechargeItems } from "../../data/homeData";

function RechargeSection() {

    return (
        <div className="bg-white rounded-[20px] p-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)] text-slate-900">
            <SectionHeader
                title="Recharge & Pay Bills"
            />

            <div className="grid grid-cols-4 gap-4">
                {rechargeItems.map((item) => (
                    <IconTile
                        key={item.label}
                        image={item.image}
                        label={item.label}
                    />
                ))}

            </div>
        </div>
    );
}

export default RechargeSection;
