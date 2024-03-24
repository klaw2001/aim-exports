import React from "react";
import GlobalHero from "../components/GlobalHeroSection/GlobalHero";
import ImageGrid from "../components/Gallery/ImageGrid";
import BlogSection from "../components/Home/BlogSection";

const GalleryPage = () => {
  return (
    <>
      <GlobalHero
        title={"Gallery"}
        breadcrumb={"Gallery"}
        para={
          "Explain what your company is working on and the value you provide to your customers."
        }
      />
      <ImageGrid />
      <BlogSection />
    </>
  );
};

export default GalleryPage;
