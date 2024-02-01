import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import insurance_banner from "../Images/insurance_banner.png";
import ServiceForm from "../Components/ServiceForm";

function Insurance() {
  return (
    <>
      <section>
        <Container>
          <Row className="my-4">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={7}
              className="d-flex flex-column justify-content-center my-3"
            >
              <lord-icon
                src="https://cdn.lordicon.com/isugonwi.json"
                trigger="hover"
                colors="primary:#1d355e"
                style={{ width: "60px", height: "60px" }}
              ></lord-icon>
              <h1 className="mb-3">The Yacht Insurance</h1>
              <p style={{ lineHeight: "28px" }}>
                Protect your luxurious investment on the high seas with
                comprehensive yacht insurance, providing peace of mind and
                coverage for potential damages, accidents, and theft.
              </p>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className="d-flex justify-content-center my-3"
            >
              <img src={insurance_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-2" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row className="my-4">
            <h3 className="mb-4 fw-bold">
              Tailored Marine Insurance Solutions
            </h3>
            <p style={{ lineHeight: "32px" }}>
              At MegaSails, our dedicated team collaborates with leading marine
              insurance carriers to deliver a superior range of comprehensive
              marine insurance products. We understand the significance of
              protecting your valuable investment, which is why we strive to
              provide tailored insurance solutions that cater to your specific
              needs. Our goal is to make your yacht buying process seamless and
              worry-free, offering peace of mind as you embark on your yachting
              journey. Trust MegaSails to navigate the intricacies of marine
              insurance, ensuring you receive the best coverage and protection
              for your prized yacht.
            </p>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#ebf0f7" }}>
        <ServiceForm />
      </section>

      <section>
        <Container>
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

export default Insurance;
