import { BadgePlus, Blocks, Handshake } from "lucide-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const OurValues = () => {
  const cards = [
    {
      icon: <Blocks size={30}/>,
      title: "Integrity",
      description:
        "We uphold the highest standards of honesty, transparency, and ethics in all our dealings. Integrity is the bedrock of our relationships with our customers, partners, and each other.",
    },
    {
      icon: <BadgePlus size={30}/>,
      title: "Innovation",
      description:
        "We embrace innovation as a catalyst for progress, constantly seeking new ways to improve and excel. From pioneering technologies to creative solutions, we harness the power of innovation to drive positive change and shape the future.",
    },
    {
      icon: <Handshake size={30}/>,
      title: "Collaboration",
      description:
        "We believe in the power of collaboration to achieve shared goals and maximize success. By fostering a culture of teamwork, communication, and mutual respect, we leverage the diverse talents and perspectives of our team to deliver exceptional results for our customers and communities.",
    },
  ];

  return (
    <>
      <section className="py-5">
        <Container>
          <div className="stand-out-title text-center">
            <span className="span-text text-uppercase">Our values</span>
            <h2 className="text-dark my-2">
              Emphasize what's important to your company
            </h2>
            <p>
              Guided by principles that define us, discover the values shaping
              our every endeavor.
            </p>
          </div>
          <Row className="row-cols-1 row-cols-md-3 mt-5">
            {cards.map((elem, ind) => (
              <Col key={ind} className="text-center mb-3 mb-lg-0">
                <span>{elem.icon}</span>
                <h4 className="my-3 fw-bold">{elem.title}</h4>
                <p className="short-para">{elem.description}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default OurValues;
