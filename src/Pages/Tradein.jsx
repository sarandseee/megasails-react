import React from "react";
import {
  Accordion,
  Badge,
  Button,
  Col,
  Container,
  Image,
  Row,
} from "react-bootstrap";
import BrokerageForm from "../Components/BrokerageForm";

function Tradein() {
  return (
    <>
      <section
        className="py-4 py-md-5 text-center st-banner"
        style={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Container>
          <Row>
            <Col>
              <h3 className="lh-base fw-bold">
                Great opportunity for trade-in from Megasails
              </h3>
              <h6 className="mb-2">
                Effortlessly upgrade your yacht with Megasails' trade-in
                service, maximizing value while our professionals handle
                valuation and paperwork
              </h6>
              <Button variant="outline-dark">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5">
        <Container>
          <Row>
            <Col lg={5} className="mb-3 mb-lg-0">
              <Image
                src="https://t4.ftcdn.net/jpg/00/10/94/37/360_F_10943710_AUGgz6G9ueQZAr8o3oyWIDWoe3tjDauD.jpg"
                fluid
                rounded
              />
            </Col>
            <Col lg={7} className="m-auto">
              <h2 className="mb-3">Actually, what we do in Trade-in?</h2>
              <p className="lh-base lh-md-lg m-0">
                Upgrade your yacht effortlessly with Megasails' convenient
                trade-in service, allowing you to seamlessly transition to your
                dream vessel while our knowledgeable team manages the entire
                trade-in process, ensuring you receive maximum value for
                your current yacht
              </p>
              <div
                className="d-flex mt-3 mb-4 mb-md-0"
                style={{ gap: "12px", flexWrap: "wrap" }}
              >
                <span className="badge text-bg-primary">Text1</span>
                <span className="badge text-bg-secondary">Text2</span>
                <span className="badge text-bg-success">Text3</span>
                <span className="badge text-bg-danger">Text4</span>
                <span className="badge text-bg-warning">Text5</span>
                <span className="badge text-bg-info">Text6</span>
                <span className="badge text-bg-light">Text7</span>
                <span className="badge text-bg-dark">Text8</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-lg-5" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row>
            <Col className="m-auto mb-3">
              <h2 className="m-0">POWERFUL WAYS TO TRADE-IN</h2>
              <Badge className="mb-3" pill bg="primary">
                Do more with Megasails
              </Badge>
              <br />
              <small>
                Experience a hassle-free yacht trade-in with Megasails, where
                our dedicated team of professionals takes care of every detail,
                from valuation to paperwork, making your transition to a new
                vessel effortless while maximizing the value of your trade-in.
              </small>
              <Accordion className="mt-3" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    Lorem ipsum dolor sit amet ?
                  </Accordion.Header>
                  <Accordion.Body className="lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>
                    Lorem ipsum dolor sit amet ?
                  </Accordion.Header>
                  <Accordion.Body className="lh-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: "#ebf0f7" }}>
        <BrokerageForm />
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

export default Tradein;
