import Hero from "@/components/home/Hero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import PopularTripIdeas from "@/components/home/Populartripideas";
import SeasonalGuideStrip from "@/components/home/Seasonalguidestrip";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import PlanMyTripCTA from "@/components/home/PlanMyTripCTA";
import LatestGuides from "@/components/home/LatestGuides";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedExperiences />
      <PopularTripIdeas />
      <SeasonalGuideStrip />
      <WhyTrustUs />
      <PlanMyTripCTA />
      <LatestGuides />
    </>
  );
}