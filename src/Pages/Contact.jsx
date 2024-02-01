import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import ContactForm from "../Components/ContactForm";

function Contact() {
  // useEffect(() => {
  //   if (window.adsbygoogle && window.adsbygoogle.push) {
  //     window.adsbygoogle.push({});
  //   }
  // }, []);

  return (
    <>
      <section className="py-4 py-lg-5" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row className="my-md-3 my-lg-0">
            <Col>
              <h3 className="text-center fw-bold mb-3">
                Our teams are ready to assist
              </h3>
              <h6 className="text-center lh-base" style={{ fontSize: "14px" }}>
                Join our network and stay connected by reaching out through the
                provided contact details.
              </h6>
              <p
                className="text-center"
                style={{
                  color: "#537FE7",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                "We'd love to support you!"
              </p>
              <div className="text-center">
                <a href="#!">
                  <Button className="lh-base mt-3" variant="outline-dark">
                    Get Help
                  </Button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-0">
        <Container>
          <Row className="my-md-3 my-lg-5">
            <Col>
              <h4 className="text-center mb-3">
                Get in Touch:{" "}
                <span className="fw-bold">Find Us on the Map</span>
              </h4>
              <h6
                className="text-center mb-3 col-md-10 mx-auto lh-base mb-4"
                style={{ fontSize: "14px" }}
              >
                You can find us in the heart of Anytown, conveniently situated
                near major transportation hubs and accessible by public
                transportation. Our central location ensures easy access for our
                valued customers.
              </h6>
              <div className="ratio ratio-21x9" style={{ height: "500" }}>
                <iframe
                  title="Megasails"
                  className="rounded"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.0085402897435!2d-80.16863632590338!3d26.065977295967695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x573707b841e4849%3A0x867d66c7c628fdf8!2sMegaSails.com!5e0!3m2!1sen!2sin!4v1684746496601!5m2!1sen!2sin"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#ebf0f7" }}>
        <ContactForm />
      </section>

      <section>
        <Container>
          {/* <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="6409212221098617"
            data-ad-slot="fe8c47fec0942fa0"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins> */}
          <Image
            className="my-3"
            style={{
              backgroundColor: "#DFDFDF",
              height: "auto",
              width: "100%",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyJ8ypF01nBFgeGHM-MX9KK8n1mnoRu9Hng&usqp=CAU"
            fluid
          />
        </Container>
      </section>
    </>
  );
}

export default Contact;
