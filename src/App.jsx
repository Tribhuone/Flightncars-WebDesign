
import Navbar from "./components/Navbar";
import HeroSection from "./components/Home/Hero";
// import TravelSection from "./components/home/Travel";
// import LoginSection from "./components/Home/Login";
import RechargeSection from "./components/Home/Recharge";
import UtilitiesSection from "./components/Home/Utilities";
import OffersSection from "./components/Home/Offer";
import FooterNav from "./components/Footer";
import HomeFooter from "./components/Home/HomeFooter";
import TravelSection from './components/Home/Travel';

export default function Home() {

  return (
    <div className="bg-slate-100 min-h-screen">

      <div className="max-w-[430px] mx-auto border border-gray-800/90 ">
        <Navbar />

        <div className="space-y-4 p-4 pb-24">
          <HeroSection />
          <TravelSection />
          {/* <LoginSection /> */}
          <RechargeSection />
          <UtilitiesSection />
          <OffersSection />
          <HomeFooter />
        </div>

        <FooterNav />
      </div>
    </div>
  );
}
