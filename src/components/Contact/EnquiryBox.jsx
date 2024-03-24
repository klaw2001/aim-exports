import { BookUser, Mail, Phone } from "lucide-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const EnquiryBox = () => {
  const enquiry = [
    {
      icon: <Mail size={30} />,
      title: "Email",
      para: "For inquiries, feedback, or collaboration opportunities, our team is just an email away. Reach out to us to discuss your welding needs or any questions you may have.",
      url: "hello@relume.io",
      type: "mail",
    },
    {
      icon: <BookUser size={30} />,
      title: "Our Address",
      para: " Visit our headquarters at Aim Exports, located at [Street Address], [City, State, Zip Code], to explore our facilities or arrange a meeting with our team.",
      url: "+1 (555) 000-0000",
      type: "phone",
    },
    {
      icon: <Phone size={30} />,
      title: "Phone",
      para: "Need immediate assistance? Give us a call to speak with a member of our team. We're here to provide support and answer any inquiries you may have.",
      url: "+1 (555) 000-0000",
      type: "phone",
    },
  ];
  return (
    <>
      <section className="py-5">
        <Container>
          <Row className="row-cols-1 row-cols-md-3 justify-content-center align-items-center">
            {enquiry.map((elem, ind) => (
              <Col key={ind} className="mb-3 mb-md-0">
                <div className="text-center text-lg-start">
                  <span className="fw-bold">{elem.icon}</span>
                  <h4 className="fw-bold mt-3">{elem.title}</h4>
                  <p className="short-para mb-3">{elem.para}</p>
                  {elem.type === "mail" ? (
                    <a href={`mailto:${elem.url}`}>{elem.url}</a>
                  ) : elem.type === "phone" ? (
                    <a href={`tel:${elem.url}`}>{elem.url}</a>
                  ) : null}
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="py-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.1717508401907!2d72.80949629999999!3d18.9680208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce740c73d241%3A0x2f342887d5ce589f!2sAntilia%2C%20ANTILIA%20APARTMENT%2C%20SK%20Barodawala%20Marg%2C%20Tardeo%2C%20Mumbai%2C%20Maharashtra%20400026!5e0!3m2!1sen!2sin!4v1711304857578!5m2!1sen!2sin"
          width="600"
          height="450"
          className="w-100"
        //   style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default EnquiryBox;
