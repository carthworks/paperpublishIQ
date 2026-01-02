"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ArchitectureSection from "@/components/ArchitectureSection";
import WorkflowSection from "@/components/WorkflowSection";
import TargetUsersSection from "@/components/TargetUsersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import BackToTop from "@/components/BackToTop";
import LoadingAnimation from "@/components/LoadingAnimation";

export default function Home() {
  return (
    <>
      <LoadingAnimation />
      <ThemeToggle />
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        <FeaturesSection />
        <ArchitectureSection />
        <WorkflowSection />
        <TargetUsersSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
