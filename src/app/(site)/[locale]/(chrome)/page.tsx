import Hero from "@/components/home/Hero";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import PopularTripIdeas from "@/components/home/PopularTripIdeas";
import SeasonalGuideStrip from "@/components/home/SeasonalGuideStrip";
import WhyTrustUs from "@/components/home/WhyTrustUs";
import PlanMyTripCTA from "@/components/home/PlanMyTripCTA";
import LatestGuides from "@/components/home/LatestGuides";
import EssentialAdvice from "@/components/home/EssentialAdvices";

export default function Home() {
  return (
    <>
      <Hero />

      <WhyTrustUs />
      <FeaturedExperiences />
      <PopularTripIdeas />
      <SeasonalGuideStrip />
      <PlanMyTripCTA />
      <EssentialAdvice />
      <LatestGuides />
    </>
  );
}