import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../images/home-about.png";
import { Link } from "react-router-dom";
const WhoAreWe = () => {
  return (
    <>
      <div className="who-are-we py-5" style={{ marginTop: "5rem" }}>
        <Container>
          <div className="who-text">
            <Row className="row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
              <Col>
                <img src={about} alt="" className="img-fluid" width={500} />
              </Col>
              <Col className="mt-3 mt-lg-0">
                <span className="span-text text-uppercase">who are we</span>
                <h2 className="my-2">
                  India's Premier Welding Wire Exporters
                </h2>
                <p className="my-2">
                  Experience the difference with Aim Big Exports and discover
                  why we are the preferred choice for welding professionals
                  across India and beyond.
                </p>
                <ul className="my-4">
                  <li>Premium Quality</li>
                  <li>Precision Engineering</li>
                  <li>Custom Solutions</li>
                </ul>
                <Link to="/about-us" className="app-btn">
                  Know More
                </Link>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default WhoAreWe;
