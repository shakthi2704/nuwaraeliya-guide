import Hero from "@/components/home/Hero";
import MarqueeStrip from "@/components/home/MarqueeStrip";
import FeaturedExperiences from "@/components/home/FeaturedExperiences";
import FeaturedExperiencesLight from "@/components/home/FeaturedExperiencesLight";

export default function Home() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <FeaturedExperiences />
      <FeaturedExperiencesLight />
    </>
  );
}