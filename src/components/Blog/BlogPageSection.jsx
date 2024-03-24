import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import card1 from "../../images/card1.png";
import card2 from "../../images/card2.png";
import card3 from "../../images/card3.png";
import { Link } from "react-router-dom";
const BlogPageSection = () => {
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
    {
      id: 4,
      img: card1,
      category: "Industry",
      title: "Title here 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 5,
      img: card2,
      category: "Factory",
      title: "Title here 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 6,
      img: card3,
      category: "Pipelines",
      title: "Title here 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 7,
      img: card1,
      category: "Industry",
      title: "Title here 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 8,
      img: card2,
      category: "Factory",
      title: "Title here 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      id: 9,
      img: card3,
      category: "Pipelines",
      title: "Title here 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  return (
    <>
      <section className="py-5">
        <Container>
          <div className="text-center">
            <span className="span-text text-uppercase">Articles</span>
            <h2 className="my-2 ">From Author to People</h2>
          </div>
          <article className="py-4">
            <Row className="justify-content-center g-4">
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
          </article>
        </Container>
      </section>
    </>
  );
};

export default BlogPageSection;
