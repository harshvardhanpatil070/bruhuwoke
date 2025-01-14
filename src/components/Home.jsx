import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./Hero";
import Footer from "./Footer";
import Service from "./Service";
import WhyUs from "./WhyUs";
import CenterCard from "./CenterCard";
import BusinessCovered from "./BusinessCovered";
import Faqs from "./Faqs"; 
import Horizontal from "./Horizontal"


function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <HeroSection />
      <main className="flex-grow">
        <WhyUs />
        <Service />
        <Faqs /> 

        <CenterCard />
        <BusinessCovered />
      </main>
    </div>
  );
}

export default Home;
