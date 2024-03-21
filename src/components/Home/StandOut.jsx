import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
const StandOut = () => {
  const cards = [
    {
      img: card1,
      title: "Extensive Product Range",
      para: " From flux-cored to solid wires, our comprehensive product lineup caters to diverse welding needs, offering a wide selection of sizes, compositions, and coatings.",
    },
    {
      img: card2,
      title: "Stringent Quality Assurance",
      para: " With a commitment to excellence, our quality assurance protocols encompass thorough testing and inspection procedures throughout the manufacturing process.",
    },
    {
      img: card3,
      title: "International Distribution",
      para: " Our reach extends across India & beyond, with a robust distribution network ensuring prompt and efficient delivery of our top-quality welding wires to every corner of the world.",
    },
  ];
  return (
    <>
      <section className="stand-out py-5 bg-grey">
        <Container>
          <div className="stand-out-title text-center text-lg-start">
            <span className="span-text text-uppercase">stand out</span>
            <h2 className="text-dark my-2">
              Your Trusted Manufacturing Partner
            </h2>
            <p>
              Delivering precision-engineered welding wires worldwide, we're
              your trusted partner for manufacturing excellence and global
              export.
            </p>
          </div>
          <article>
            <Row className="mt-5">
              {cards.map((elem, ind) => (
                <Col className="my-card col-12 col-md-4 mb-3 mb-lg-0" key={ind}>
                  <img src={elem.img} alt={elem.title} className="img-fluid mb-3" />
                  <h3>{elem.title}</h3>
                  <p>{elem.para}</p>
                </Col>
              ))}
            </Row>
          </article>
        </Container>
      </section>
    </>
  );
};

export default StandOut;
