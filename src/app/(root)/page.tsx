import BackToTop from "@/components/BackToTop";
import BestSellers from "@/components/BestSellers";
import CyberMondayContainer from "@/components/CyberMondayContainer";
import CyberMondayFeatures from "@/components/CyberMondayFeatures";
import Highlights from "@/components/Highlights";
import MainBanner from "@/components/MainBanner";
import MobilesBy from "@/components/MobilesBy";
import MostDiscounted from "@/components/MostDiscounted";
import MostVisited from "@/components/MostVisited";
import RecentAddOns from "@/components/RecentAddOns";
import RecentMobiles from "@/components/RecentMobiles";
import SecondSpecialOffers from "@/components/SecondSpecialOffers";
import SpecialOffers from "@/components/SpecialOffers";
import TopAppliances from "@/components/TopAppliances";

export default function Home() {
  return (
    <main className="mt-12">
      <MainBanner />
      <Highlights />
      <CyberMondayContainer />
      <RecentAddOns />
      <CyberMondayFeatures />
      <BestSellers />
      <SpecialOffers />
      <MostVisited />
      <SecondSpecialOffers />
      <MostDiscounted />
      <TopAppliances />
      <RecentMobiles />
      <MobilesBy />
      <BackToTop />
    </main>
  )
}
