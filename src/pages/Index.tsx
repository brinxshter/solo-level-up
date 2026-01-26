import Hero from "@/components/Hero";
import SpecialMission from "@/components/SpecialMission";
import DailyQuest from "@/components/DailyQuest";
import Stats from "@/components/Stats";
import Ranks from "@/components/Ranks";
import Motivation from "@/components/Motivation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <SpecialMission />
      <Stats />
      <DailyQuest />
      <Ranks />
      <Motivation />
      <Footer />
    </div>
  );
};

export default Index;
