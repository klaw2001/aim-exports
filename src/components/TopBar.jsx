import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const TopBar = () => {
  return (
    <>
      <div className="top-bar py-3">
        <Container className="container-fluid">
          <Row className="row-cols-1 row-cols-lg-2 justify-content-center justify-content-lg-between">
            <Col className="text-lg-start text-center">
              <div className="w-100">
                <p className="short-para text-white">
                  <span className="pe-2">
                    <MapPin size={18} color="#ffffff" />
                  </span>
                  123 Your Street, Your City, Your Country
                </p>{" "}
              </div>
            </Col>
            <Col>
              <div className="d-flex gap-3 justify-content-lg-end justify-content-center">
                <div className="box">
                  <p className="short-para text-white">
                    <span className="pe-2">
                      <Mail size={18} color="#ffffff" />
                    </span>
                    email@example.com
                  </p>
                </div>
                <div className="box">
                  <p className="short-para text-white">
                  <span className="pe-2">
                    <Phone size={18} color="#ffffff" />
                  </span>
                    +123-456-7890</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default TopBar;
