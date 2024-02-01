import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import hurricane_banner from "../Images/hurricane_banner.png";
import ServiceForm from "../Components/ServiceForm";

function Hurricane() {
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
                src="https://cdn.lordicon.com/mxzuvjjs.json"
                trigger="hover"
                colors="primary:#1d355e"
                style={{ width: "60px", height: "60px" }}
              ></lord-icon>
              <h1 className="mb-3">The Hurricane Storage</h1>
              <p style={{ lineHeight: "28px" }}>
                When the storm approaches, rest easy knowing your yacht is
                sheltered in our designated hurricane storage facility,
                providing a fortified haven for your valuable investment until
                the weather clears.
              </p>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className="d-flex justify-content-center my-3"
            >
              <img src={hurricane_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-2" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row className="my-4">
            <h3 className="mb-4">Yacht Hurricane Storage Services</h3>
            <p style={{ lineHeight: "32px" }}>
              At MegaSails, we are thrilled to introduce our dedicated Yacht
              Hurricane Storage services. With our comprehensive protection
              program, you can confidently store your yacht inside our secure
              boat yard during the hurricane season that affects our area. Under
              this plan, your valuable vessel will be carefully hauled out of
              the water and securely stored, ensuring its safety amidst severe
              weather conditions. Due to limited space and high demand, we
              strongly recommend signing up in advance to secure your space and
              enjoy the peace of mind that comes with entrusting your yacht to
              MegaSails' professional hurricane storage services.
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

export default Hurricane;
