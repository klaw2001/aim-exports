import { Facebook, Instagram, Linkedin } from "lucide-react";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer-bg py-5">
        <Container>
          <div className="footer-wrap py-5 border-bottom">
            <Row className="align-items-center justify-content-lg-center">
              <Col className="col-12 col-md-6 col-lg-5 pe-lg-5 mb-3 mb-lg-0">
                <article>
                  <p className="text-white mb-3">
                    Join our newsletter to stay up to date on features and
                    releases.
                  </p>
                  <form action="" className="form-box">
                    <div className="position-relative">
                      <input
                        type="email"
                        placeholder="Enter Your Email"
                        className="w-100 px-2 rounded border-0 news-input"
                        style={{ height: "46px" }}
                      />
                      <button
                        className="app-btn position-absolute top-right-btn"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                  <p className="mt-5 text-white short-para">
                    By subscribing you agree to with our Privacy Policy and
                    provide consent to receive updates from our company.
                  </p>
                  <div className="icons-box pb-3 pt-4 d-flex gap-3">
                    <a href="" className=" text-dark bg-white p-2 rounded">
                      <Facebook />
                    </a>
                    <a href="" className=" text-dark bg-white p-2 rounded">
                      <Instagram />
                    </a>
                    <a href="" className=" text-dark bg-white p-2 rounded">
                      <Linkedin />
                    </a>
                  </div>
                </article>
              </Col>

              <Col className="col-12 col-lg-5">
                <Row className="">
                  <Col className=" col-md-6  text-lg-center">
                    <h6 className="fs-5 pb-4 text-white ">Pages</h6>
                    <ul className="foot-list">
                      <li className="pb-3">
                        <Link to="/about" className="text-white">
                          About
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/services" className="text-white">
                          Services
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/portfolio" className="text-white">
                          Portfolio
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/blogs" className="text-white">
                          Blogs
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/contact" className="text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </Col>
                  <Col className=" col-md-6  text-lg-center">
                    <h6 className="fs-5 pb-4 text-white ">Quick Links</h6>
                    <ul className="foot-list">
                      <li className="pb-3">
                        <Link to="/about" className="text-white">
                          About
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/services" className="text-white">
                          Services
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/portfolio" className="text-white">
                          Portfolio
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/blogs" className="text-white">
                          Blogs
                        </Link>
                      </li>
                      <li className="pb-3">
                        <Link to="/contact" className="text-white">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
          <div className="copyright mt-4">
            <Row className="row-cols-1 row-cols-md-2">
              <Col className="text-md-start text-center mb-3 mb-md-0">
                <p className="text-white short-para">
                  © 2024 Aim Big Exports. All rights reserved.
                </p>
              </Col>
              <Col className="text-md-end text-center">
                <p className="text-white short-para">
                  Designed & Developed By{" "}
                  <a href="https://reduxsolutions.com" className="text-warning">
                    Redux Solutions.
                  </a>
                </p>
              </Col>
            </Row>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
