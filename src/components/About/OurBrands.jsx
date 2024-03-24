import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import nike from "../../images/nike.png";
const OurBrands = () => {
  const brands = [
    { img: nike },
    { img: nike },
    { img: nike },
    { img: nike },
    { img: nike },
    { img: nike },
  ];
  return (
    <>
      <section className="py-5 bg-grey">
        <Container>
          <div className="text-center">
            <p className="short-para">
              Preferred choice for industry-leading brands, epitomizing quality
              and reliability
            </p>
            <Row className="pt-4 row-cols-3 row-cols-md-4 row-cols-lg-6">
              {brands.map((elem, ind) => {
                return (
                  <Col key={ind}>
                    <img
                      src={elem.img}
                      alt=""
                      className="img-fluid"
                      style={{ mixBlendMode: "exclusion" }}
                    />
                  </Col>
                );
              })}
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OurBrands;
