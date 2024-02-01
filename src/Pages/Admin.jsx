import React from "react";
import { Navbar, Nav, Container, Row, Col } from "react-bootstrap";

const Admin = () => {
  return (
    <div>
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
        </Navbar>
        <Container fluid>
          <Row>
            <Col sm={2} className="sidebar">
              <Nav className="flex-column">
                <Nav.Link href="#users">Users</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#orders">Orders</Nav.Link>
                {/* Add more Nav.Link items for additional sections */}
              </Nav>
            </Col>
            <Col sm={9} className="content">
              {/* Add your content here */}
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Admin;
