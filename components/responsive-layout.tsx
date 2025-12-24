"use client"

import { useEffect, useState } from "react"

// Desktop components (LOCKED - DO NOT MODIFY)
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CompaniesCarousel from "@/components/companies-carousel"
import AboutSection from "@/components/about-section"
import AwardsCertificates from "@/components/awards-certificates"
import Footer from "@/components/footer"
import ContactPanel from "@/components/contact-panel"
import ScrollNavigation from "@/components/scroll-navigation"

// Mobile components (for mobile/tablet editing)
import MobileHeader from "@/components/mobile/mobile-header"
import MobileHero from "@/components/mobile/mobile-hero"
import MobileCompanies from "@/components/mobile/mobile-companies"
import MobileAbout from "@/components/mobile/mobile-about"
import MobileAwards from "@/components/mobile/mobile-awards"
import MobileFooter from "@/components/mobile/mobile-footer"
import MobileContactPanel from "@/components/mobile/mobile-contact-panel"
import MobileScrollNavigation from "@/components/mobile/mobile-scroll-navigation"

export default function ResponsiveLayout() {
  const [isMobile, setIsMobile] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // Prevent hydration mismatch by rendering nothing until mounted
  if (!mounted) {
    return (
      <main className="min-h-screen w-full">
        {/* SSR fallback - renders desktop by default */}
        <Header />
        <HeroSection />
        <CompaniesCarousel />
        <AboutSection />
        <AwardsCertificates />
        <Footer />
        <ContactPanel />
        <ScrollNavigation />
      </main>
    )
  }

  // Mobile/Tablet view (< 1024px)
  if (isMobile) {
    return (
      <main className="min-h-screen w-full">
        <MobileHeader />
        <MobileHero />
        <MobileCompanies />
        <MobileAbout />
        <MobileAwards />
        <MobileFooter />
        <MobileContactPanel />
        <MobileScrollNavigation />
      </main>
    )
  }

  // Desktop view (>= 1024px) - LOCKED, DO NOT MODIFY
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <CompaniesCarousel />
      <AboutSection />
      <AwardsCertificates />
      <Footer />
      <ContactPanel />
      <ScrollNavigation />
    </main>
  )
}
