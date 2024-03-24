import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const GlobalHero = ({ breadcrumb, title, para }) => {
  return (
    <section className="py-5 text-center">
      <Container>
        <div className="hero-wrap text-white pt-5 mb-5">
          <div className="breadcrumbs d-flex justify-content-center align-items-center gap-2">
            <Link to="/" className="text-white short-para">
              Home{" "}
            </Link>
            <span>&gt;</span>
            <p className="short-para">{breadcrumb}</p>
          </div>
          <h2 className="my-2">{title}</h2>
          <p className="short-para">{para}</p>
        </div>
      </Container>
    </section>
  );
};

export default GlobalHero;
