import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import g1 from "../../images/g-1.jpg";
import g2 from "../../images/g2.jpg";
import g3 from "../../images/g3.jpg";
import g4 from "../../images/g4.jpg";
import g5 from "../../images/g5.jpg";
import g6 from "../../images/g6.jpg";
import g7 from "../../images/g7.jpg";
import g8 from "../../images/g8.jpg";
import g9 from "../../images/g9.jpg";
const ImageGrid = () => {
  return (
    <>
      <section className="py-5">
        <Container>
          <div className="text-center">
            <span className="span-text text-uppercase">our story</span>
            <h2 className="my-2 ">Inspiring Stories with our pictures</h2>
          </div>
          <Row className="g-2">
            <Col className="col-12">
              <img src={g1} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12 col-md-6">
              <img src={g2} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12 col-md-6">
              <img src={g3} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12">
              <img src={g4} alt="" className="img-fluid w-100 rounded" />
            </Col>
          </Row>
          <Row className="my-3 row-cols-1 row-cols-md-2">
            <Col>
              <h2>Project Highlights</h2>
            </Col>
            <Col>
              <p className="short-para">
                Welcome to our showcase of project highlights, where we invite
                you to journey through a carefully curated selection of our most
                remarkable endeavors. Each image tells a story of dedication,
                innovation, and craftsmanship, offering a glimpse into the
                diverse range of industries and applications we serve. <br />
                <br />
                From large-scale industrial projects to intricate custom
                solutions, our portfolio reflects the breadth and depth of our
                expertise, as well as our unwavering commitment to excellence in
                every endeavor. Explore these snapshots of success to witness
                firsthand the quality, precision, and ingenuity that define our
                work ethic and drive us forward in shaping a brighter future.
              </p>
            </Col>
          </Row>
          <Row className="g-2">
            <Col className="col-12 col-md-6">
              <img src={g9} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12 col-md-6">
              <img src={g6} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12">
              <img src={g7} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12 col-md-6">
              <img src={g8} alt="" className="img-fluid w-100 rounded" />
            </Col>
            <Col className="col-12 col-md-6">
              <img src={g9} alt="" className="img-fluid w-100 rounded" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default ImageGrid;
