import React, { useState } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Button,
  Modal,
  Col,
  Form,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import my_logo from "../Images/my_logo.png";
import filter from "../Images/filter.png";
import Select from "react-select";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar expand="lg" data-bs-theme="light" sticky="top" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src={my_logo}
              alt="Megasails"
              className="img-fluid"
              style={{ width: "120px", height: "25px" }}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title="Buy" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/yacht-sales/new">
                  New
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/yacht-sales/used">
                  Used
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/yacht-sales/featured">
                  Featured
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Broker" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/yacht-broker/sell">
                  Sell
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/yacht-broker/trade-in">
                  Trade-in
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Service" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/services/insurance">
                  Insurance
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/financing">
                  Financing
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/hurricane-storage">
                  Hurricane Storage
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/transportation">
                  Transportation
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/services/charter">
                  Charter
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Media" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/media/virtual-tours">
                  Virtual Tours and Videos
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Events" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/events/boat-show">
                  Boat Show
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link id="navbarScrollingDropdown" as={Link} to="/contact-us">
                Contact
              </Nav.Link>
              <Nav.Link id="navbarScrollingDropdown" as={Link} to="/Dev">
                DevRef
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* <div style={{ position: 'fixed', top: '70px', right: '-5px', zIndex: '10' }}>
        <Button className='floatButton' onClick={handleShow}>
          <span className='px-2'>Search</span>
          <img
            src={filter}
            alt="Megasails"
            className="img-fluid"
            style={{ width: '20px', height: '20px' }}
          /> */}
      {/* <lord-icon
              src="https://cdn.lordicon.com/xfftupfv.json"
              trigger="hover"
              colors="primary:#ffffff"
              style={{width:'25px',height:'25px'}}>
            </lord-icon> */}
      {/* </Button>
      </div> */}
      <Modal show={show} onHide={handleClose}>
        <Form>
          <Modal.Body>
            <Modal.Title className="text-center m-0">
              Yacht/Boat Sales
            </Modal.Title>
            <Row>
              <Col>
                <Form.Label htmlFor="name">Make</Form.Label>
                <Select className="mb-2" />
                <Form.Label htmlFor="name">Condition</Form.Label>
                <Select className="mb-2" />
                <Row>
                  <Form.Label htmlFor="name">Length</Form.Label>
                  <Col>
                    <Form.Control
                      className="mb-2 field"
                      placeholder="min"
                      type="text"
                      id="aaa"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-2 field"
                      placeholder="max"
                      type="text"
                      id="aaa"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.Label htmlFor="name">Year</Form.Label>
                  <Col>
                    <Form.Control
                      className="mb-2 field"
                      placeholder="min"
                      type="text"
                      id="aaa"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-2 field"
                      placeholder="max"
                      type="text"
                      id="aaa"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                </Row>
                <Row>
                  <Form.Label htmlFor="name">Price</Form.Label>
                  <Col>
                    <Form.Control
                      className="mb-2 field"
                      placeholder="min"
                      type="text"
                      id="aaa"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      className="mb-2 field"
                      placeholder="max"
                      type="text"
                      id="aaa"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Search
            </Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default NavBar;
