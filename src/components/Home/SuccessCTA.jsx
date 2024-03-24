import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const SuccessCTA = () => {
  return (
    <>
      <section className="success-cta py-5">
        <Container>
          <div className="success-text text-center py-5 my-lg-5">
            <h2 className="text-white">Let's Weld Success Together!</h2>
            <p className="text-white mt-2 mb-5">
              Ready to take the next step? Contact us today and let's turn your
              welding projects into triumphs.
            </p>
            <Link to="/contact" className="app-btn">Connect Now</Link>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SuccessCTA;
