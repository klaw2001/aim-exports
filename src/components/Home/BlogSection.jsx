import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import { Link } from "react-router-dom";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: card1,
      category: "Industry",
      title: "Title here 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 2,
      img: card2,
      category: "Factory",
      title: "Title here 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 3,
      img: card3,
      category: "Pipelines",
      title: "Title here 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <>
      <section className="blog-section py-5">
        <Container>
          <span className="span-text text-uppercase">insights hub</span>

          <h2 className="my-2">Introduce customer success stories</h2>
          <p className="short-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </p>
          <article className="py-4">
            <Row className="justify-content-center">
              {blogs.map((elem) => (
                <Col key={elem.id} className="col-12 col-md-4 mb-3 mb-lg-0">
                  <Card className="border-0 blog-cards">
                    <Card.Img src={elem.img} className="border-0 rounded-0" />
                    <Card.Body>
                      <div className="d-flex gap-3 mt-1 mb-2 align-items-center">
                        <div
                          className="rounded py-1 px-3"
                          style={{ backgroundColor: "#F4F4F4" }}
                        >
                          <span className="short-para">{elem.category}</span>
                        </div>
                        <div className="time-box">
                          <span className="short-para">2 mins ago</span>
                        </div>
                      </div>
                      <Card.Title>
                        <h3>{elem.title}</h3>
                      </Card.Title>
                      <Card.Text className="short-para mb-3">
                        {elem.description}
                      </Card.Text>
                      <Link className="short-para text-dark">Read More</Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <div className="w-100 text-center mt-5">
              <a href="" className="app-btn">
                View All
              </a>
            </div>
          </article>
        </Container>
      </section>


    </>
  );
};

export default BlogSection;
