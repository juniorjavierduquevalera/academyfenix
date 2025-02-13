"use client";
import Navbar from "../components/Navbar";
import MarketingSection from "src/components/MarketingSection";
import EventDetails from "src/components/EventDetails";
import SalesHeader from "src/components/SalesHeader";
import AudienceSection from "src/components/AudienceSection";
import BenefitsSection from "src/components/BenefitsSection";
import AboutSection from "src/components/AboutSection";
import Footer from "src/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <MarketingSection />
      <EventDetails />
      <SalesHeader />
      <AudienceSection />
      <BenefitsSection />
      <AboutSection />
      <Footer/>
    </>
  );
}
