import { Container } from "react-bootstrap";
import React from "react";
import hero from "../../images/hero-img.png"
const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-text w-100 text-center p-lg-5 p-2">
            <h1 className="px-lg-5">Leading the Way in Welding Wire Manufacturing and Export</h1>
            <p className="text-white px-lg-5">
              Driven by a passion for quality and customer satisfaction, AIM BIG
              EXPORTS continuously strive to raise the bar in welding wire
              manufacturing
            </p>
            <div className="hero-btn d-flex justify-content-center align-items-center gap-3 my-3">
              <a href="/services" className="app-btn">Get Started</a>
              <a href="/about-us" className="white-btn">Learn More</a>
            </div>
          </div>
          <div className="hero-img text-center w-100">
            <img src={hero} alt="hero" className="img-fluid rounded" width={800} height={400} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
