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

function Sell() {
  return (
    <>
      <section
        className="py-4 py-md-5 text-center st-banner"
        style={{ backgroundColor: "rgb(0, 82, 204)", color: "#fff" }}
      >
        <Container>
          <Row>
            <Col>
              <h3 className="lh-base fw-bold">
                Unlocking the Secrets of Persuasive Selling
              </h3>
              <h6 className="mb-2">
                MegaSails maximizes the tools and resources needed to sell your
                yacht.
              </h6>
              <p>We are more than just a dealership : We are a lifestyle</p>
              <Button variant="outline-light">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-4 py-lg-5">
        <Container>
          <Row>
            <Col lg={7} className="m-auto">
              <h2 className="mb-3">Actually, what we do in Sell?</h2>
              <p className="lh-base lh-md-lg m-0">
                Maximize the value of your yacht and simplify the selling
                process with Megasails, where our dedicated team of experts will
                handle every aspect of your yacht sale, ensuring a seamless
                experience and optimal returns on your investment.
              </p>
              <div
                className="d-flex mt-3 mb-4 mb-md-4"
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

            <Col lg={5}>
              <Image
                src="https://t4.ftcdn.net/jpg/00/10/94/37/360_F_10943710_AUGgz6G9ueQZAr8o3oyWIDWoe3tjDauD.jpg"
                fluid
                rounded
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="py-3 py-lg-5" style={{ backgroundColor: "#fff" }}>
        <Container>
          <Row>
            <Col className="m-auto mb-3">
              <h2 className="m-0">POWERFUL WAYS TO SELL</h2>
              <Badge className="mb-3" pill bg="primary">
                Do more with Megasails
              </Badge>
              <br />

              <small>
                MegaSails leverages a comprehensive suite of tools and resources
                to empower you in selling your yacht with maximum efficiency and
                effectiveness. Our platform provides a wide range of features
                designed to enhance your yacht selling experience
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

export default Sell;
