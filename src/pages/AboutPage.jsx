import React from "react";
import SuccessCTA from "../components/Home/SuccessCTA";
import PowerProgress from "../components/Home/PowerProgress";
import TestimonialSwiper from "../components/Home/TestimonialsSwiper";
import BlogSection from "../components/Home/BlogSection";
import GlobalHero from "../components/GlobalHeroSection/GlobalHero";
import AboutFirst from "../components/About/AboutFirst";
import OurValues from "../components/About/OurValues";

const AboutPage = () => {
  return (
    <>
      <GlobalHero
        title={"About Us"}
        breadcrumb={"About"}
        para={
          "Explain what your company is working on and the value you provide to your customers."
        }
      />
      <AboutFirst/>
      <OurValues/>
      <SuccessCTA />
      <PowerProgress />
      <TestimonialSwiper />
      <BlogSection />
    </>
  );
};

export default AboutPage;
