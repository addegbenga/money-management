import React from "react";
import Hero from "../../components/landing/Hero";
import Features from "../../components/landing/Features";
import HowItWorks from "../../components/landing/HowItWorks";
import Testimonials from "../../components/landing/Testimonials";
import "./style.css";
export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}
