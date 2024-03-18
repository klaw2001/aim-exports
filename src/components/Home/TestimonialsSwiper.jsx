import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import nike from "../../images/nike.png";
import avatar from "../../images/avatar.png";
import { Container } from "react-bootstrap";
export default function TestimonialSwiper() {
  const testimonials = [
    {
      brand: nike,
      testimonial:
        "Choosing Aim for our welding wire needs was one of the best decisions we made for our business. Their commitment to quality, reliability, and customer service is unparalleled. With their expert guidance and top-notch products, we've been able to elevate our welding processes to new heights of efficiency and effectiveness. Highly recommended!",
      profile: avatar,
      name: "John Smith",
      position: " CEO of Smith Fabrication Industries",
    },
    {
      brand: nike,
      testimonial:
        "Choosing Aim for our welding wire needs was one of the best decisions we made for our business. Their commitment to quality, reliability, and customer service is unparalleled. With their expert guidance and top-notch products, we've been able to elevate our welding processes to new heights of efficiency and effectiveness. Highly recommended!",
      profile: avatar,
      name: "John Smith",
      position: " CEO of Smith Fabrication Industries",
    },
    {
      brand: nike,
      testimonial:
        "Choosing Aim for our welding wire needs was one of the best decisions we made for our business. Their commitment to quality, reliability, and customer service is unparalleled. With their expert guidance and top-notch products, we've been able to elevate our welding processes to new heights of efficiency and effectiveness. Highly recommended!",
      profile: avatar,
      name: "John Smith",
      position: " CEO of Smith Fabrication Industries",
    },
  ];
  return (
    <>
      <section className="testimonials py-5 bg-grey">
        <Container>
          <Swiper
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {testimonials.map((elem, ind) => (
              <SwiperSlide>
                <div className="swiper-div text-center px-lg-5 py-5">
                  <img src={elem.brand} alt="" className="img-fluid" />
                  <p className="my-4">{elem.testimonial}</p>
                  <div className="profile-box">
                    <img src={elem.profile} alt="" className="img-fluid" />
                    <h6 className="mb-0 fw-bold mt-2">{elem.name}</h6>
                    <p className="short-para mt-1">{elem.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
      </section>
    </>
  );
}
