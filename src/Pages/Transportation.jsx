import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import tranaportation_banner from "../Images/transportation_banner.png";
import ServiceForm from "../Components/ServiceForm";

function Transportation() {
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
                src="https://cdn.lordicon.com/osuxyevn.json"
                trigger="hover"
                colors="primary:#1d355e"
                style={{ width: "60px", height: "60px" }}
              ></lord-icon>
              <h1 className="mb-3">The Yacht Transportation </h1>
              <p style={{ lineHeight: "28px" }}>
                Trust your yacht's relocation to our trusted yacht
                transportation services, providing expert handling, meticulous
                planning, and seamless logistics for a smooth and stress-free
                journey.
              </p>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className="d-flex justify-content-center my-3"
            >
              <img src={tranaportation_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-2" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row className="my-4">
            <h3 className="mb-4">Efficient Yacht Pickup & Delivery</h3>
            <p style={{ lineHeight: "32px" }}>
              At MegaSails, we are delighted to offer our exceptional Yacht
              Transportation Services. With our own fleet and a dedicated team
              of yacht transportation specialists, we provide reliable pickup
              and delivery options for your yacht, whether by land or by water.
              Rest assured that your prized vessel will be handled with utmost
              care and expertise throughout the transportation process.
              Experience a seamless and stress-free journey as we ensure the
              safe and timely arrival of your yacht to its intended destination.
              Trust MegaSails for a smooth and efficient yacht transportation
              experience, backed by our commitment to excellence.
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
export default Transportation;
