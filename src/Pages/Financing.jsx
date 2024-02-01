import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import financing_banner from "../Images/financing_banner.png";
import ServiceForm from "../Components/ServiceForm";

function Financing() {
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
                src="https://cdn.lordicon.com/icxqolmx.json"
                trigger="hover"
                colors="primary:#1d355e"
                style={{ width: "60px", height: "60px" }}
              ></lord-icon>
              <h1 className="mb-3">The Yacht Financing </h1>
              <p style={{ lineHeight: "28px" }}>
                Experience the thrill of yacht ownership without the financial
                burden. Our yacht financing options provide you with the means
                to acquire your dream vessel, combining convenience, expertise,
                and favorable terms.
              </p>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={5}
              className="d-flex justify-content-center my-3"
            >
              <img src={financing_banner} alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-2" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row className="my-4">
            <h3 className="mb-4">Flexible Yacht Financing Solutions</h3>
            <p style={{ lineHeight: "32px" }}>
              MegaSails has established strategic partnerships with renowned
              financial and banking institutions to offer our esteemed customers
              competitive loan programs. With a focus on delivering the highest
              quality of service, our partner programs provide flexible
              financing options tailored to suit your specific needs, ensuring a
              smooth and hassle-free process for purchasing your dream boat or
              yacht. Trust MegaSails and our trusted partners to make your yacht
              ownership aspirations a reality, backed by expert guidance and
              support every step of the way.
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

export default Financing;
