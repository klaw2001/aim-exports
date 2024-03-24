import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hero from "../../images/hero-img.png"

const AboutFirst = () => {
  return (
    <section className="py-5 mt-5">
      <Container>
        <Row className="py-4 row-cols-1 row-cols-md-2">
          <Col>
            <span className="span-text text-uppercase">who are we</span>
            <h2 className="my-2 ">About Aim Exports</h2>
          </Col>
          <Col>
            <p className="">
              At Aim Exports, our journey began with a vision to redefine the
              standards of welding wire manufacturing and exporting. With roots
              firmly planted in Tamil Nadu, India, we have grown to become a
              beacon of excellence in the industry. Our foundation rests on a
              commitment to quality, innovation, and customer satisfaction.{" "}
              <br />
              <br />
              Driven by a team of skilled professionals and bolstered by
              cutting-edge technology, we have honed our craft over decades,
              refining our processes to deliver welding solutions that exceed
              expectations. From crafting premium-quality wires to expanding our
              reach to global markets, every step of our evolution reflects our
              unwavering dedication to excellence. <br />
              <br />
              As we continue to push the boundaries of what's possible in
              welding, we remain steadfast in our mission to empower our
              customers with the tools they need to succeed. Join us on our
              journey as we shape the future of welding, one project at a time.
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
            <Col className="rounded">
                <img src={hero} alt="" className="img-fluid rounded" />
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutFirst;
