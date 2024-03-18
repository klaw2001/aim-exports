import React from "react";
import { Container } from "react-bootstrap";

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
            <a href="/contact-us" className="app-btn">Connect Now</a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default SuccessCTA;
