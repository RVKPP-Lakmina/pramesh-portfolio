"use client"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import ReviewsSection from "@/components/reviews-section"
import ContactSection from "@/components/contact-section"
import Navigation from "@/components/navigation"
import ThreeBackground from "@/components/three-background"
import AIChatbot from "@/components/ai-chatbot"

export default function Portfolio() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <ThreeBackground />
      <Navigation />

      <div className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ReviewsSection />
        <ContactSection />
      </div>

      {/* AI Chatbot */}
      <AIChatbot />
    </div>
  )
}
