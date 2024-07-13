import HeroSection from "@/components/landing-page/hero-section";
import KnowledgeBlog from "@/components/landing-page/knowledge-blog";
import TechStack from "@/components/landing-page/tech-stack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TechStack />
      <KnowledgeBlog />
    </>
  );
}
