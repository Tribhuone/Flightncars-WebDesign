
import SectionHeader from "../atoms/SectionHeader";
import TileLayer from "../atoms/TileLayer";

import { utilityItems } from "../../data/homeData";

function UtilitiesSection() {
  return (
    <div className="bg-white rounded-[20px] p-4 shadow-sm text-slate-900">

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
