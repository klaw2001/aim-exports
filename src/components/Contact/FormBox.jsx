import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../images/counter.png";

const FormBox = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="row-cols-1 row-cols-md-2 justify-content-center align-items-center">
            <Col className="order-1 mt-3 mt-md-0 order-lg-0">
              <h2>Contact us</h2>
              <p className="short-para">
                Get in Touch: Let's Connect and Forge Success Together!
              </p>
              <form action="">
                <div className="text-start">
                  <label htmlFor="" className="fw-bold mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control border-dark"
                    name="name"
                  />
                </div>
                <div className="text-start my-3">
                  <label htmlFor="" className="fw-bold mb-1">
                    Email
                  </label>
                  <input
                    type="text"
                    className="form-control border-dark"
                    name="email"
                  />
                </div>
                <div className="text-start">
                  <label htmlFor="" className="fw-bold mb-1">
                    Your Message
                  </label>{" "}
                  <br />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="5"
                    className="form-control border-dark"
                  ></textarea>
                </div>
                <button className="app-btn mt-3" type="submit">Send Message</button>
              </form>
            </Col>
            <Col>
                <img src={about} alt="" className="img-fluid rounded"/>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default FormBox;
