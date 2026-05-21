import { BriefcaseBusiness, Handshake, UserRoundCog } from "lucide-react";
import LoginCard from "../atoms/LoginCard";

const loginItems = [
  {
    label: "Admin\nLogin",
    icon: UserRoundCog,
  },
  {
    label: "Partner\nLogin",
    icon: BriefcaseBusiness,
  },
  {
    label: "Corporate\nLogin",
    icon: Handshake,
  },
];

export default function LoginSection() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {loginItems.map((item) => (
        <LoginCard key={item.label} {...item} />
      ))}
    </div>
  );
}
