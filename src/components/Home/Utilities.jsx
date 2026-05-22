
import SectionHeader from "../atoms/SectionHeader";
import TileLayer from "../atoms/TileLayer";

import { utilityItems } from "../../data/homeData";

function UtilitiesSection() {
  return (
    <div className="bg-white rounded-[20px] p-4 shadow-[0_14px_30px_rgba(15,23,42,0.08)] text-slate-900">

      <SectionHeader
        title="My Accounts"
      />
      <div className="grid grid-cols-4 gap-4">

        {utilityItems.map((item) => (
          <TileLayer
            key={item.label}
            image={item.image}
            label={item.label}
          />
        ))}

      </div>
    </div>
  );
}

export default UtilitiesSection;
