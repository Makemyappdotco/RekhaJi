'use client';

import AboutSection from '@/components/AboutSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import WhyPeopleCome from '@/components/WhyPeopleCome';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-rose-50">
      <Header />
      <HeroSection />
      <WhyPeopleCome />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}