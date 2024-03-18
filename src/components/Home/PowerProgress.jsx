import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about from "../../images/counter.png";
const PowerProgress = () => {
  return (
    <>
      <div className="who-are-we py-5" style={{ marginTop: "5rem" }}>
        <Container>
          <div className="who-text">
            <Row className="row-cols-1 row-cols-lg-2 justify-content-center align-items-center">
              <Col className="mt-3 mt-lg-0 order-1 order-lg-0">
                <span className="span-text text-uppercase">
                  powering progress
                </span>
                <h2 className="my-2">Our Impact in Numbers</h2>
                <p className="my-2">
                  Discover the tangible results of our dedication to excellence
                  and innovation
                </p>
                <div className="counter mt-4">
                  <Row className="row-cols-2">
                    <Col className="mb-3">
                      <h1 className="text-dark fw-bold mb-0">10x</h1>
                      <p>Increase in productivity</p>
                    </Col>
                    <Col className="mb-3">
                      <h1 className="text-dark fw-bold mb-0">300%</h1>
                      <p>Return on investment</p>
                    </Col>
                    <Col className="mb-3">
                      <h1 className="text-dark fw-bold mb-0">5k+</h1>
                      <p>Happy customers</p>
                    </Col>
                    <Col className="mb-3">
                      <h1 className="text-dark fw-bold mb-0">100+</h1>
                      <p>5-star reviews</p>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col>
                <img src={about} alt="" className="img-fluid" width={500} />
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default PowerProgress;
