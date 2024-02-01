import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const CustomCard = () => {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Img variant="top" src="https://images.boatsgroup.com/images/1/32/23/8913223_20230619070622279_1_LARGE.jpg" />
      <Card.Body>
        <Card.Title>Estrella</Card.Title>
        <Card.Text>
          <Row>
            <Col xs={4}>
              <Col xs={12}>Length</Col>
              <Col xs={12}>Built</Col>
              <Col xs={12}>Location</Col>
              <Col xs={12}>Price</Col>
            </Col>
            <Col xs={8}>
              <Col xs={12}>65</Col>
              <Col xs={12}>HCB 2024</Col>
              <Col xs={12}>Jupiter, FL, US</Col>
              <Col xs={12}>2,149,000.00 USD</Col>
            </Col>
          </Row>
        </Card.Text>

        <Row>
          <Col xs={2}>
            <lord-icon
              src="https://cdn.lordicon.com/bhfjfgqz.json"
              trigger="hover"
              colors="primary:#121331"
              style={{ width: '25px', height: '25px' }}>
            </lord-icon>
          </Col>
          <Col xs={2}>
            <lord-icon
              src="https://cdn.lordicon.com/ssvybplt.json"
              trigger="hover"
              colors="primary:#121331"
              style={{ width: '25px', height: '25px' }}>
            </lord-icon>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CustomCard;