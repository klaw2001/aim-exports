import React from "react";
import HeroSection from "../components/Home/HeroSection";
import WhoAreWe from "../components/Home/WhoAreWe";
import StandOut from "../components/Home/StandOut";
import SuccessCTA from "../components/Home/SuccessCTA";
import PowerProgress from "../components/Home/PowerProgress";
import TestimonialSwiper from "../components/Home/TestimonialsSwiper";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhoAreWe/>
      <StandOut/>
      <SuccessCTA/>
      <PowerProgress/>
      <TestimonialSwiper/>
    </>
  );
};

export default HomePage;
