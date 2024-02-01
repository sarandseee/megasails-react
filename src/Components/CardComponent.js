// CardComponent.js
import React from "react";
import { Card } from "react-bootstrap";

const CardComponent = ({ data }) => {
  return (
    <Card>
      <Card.Img variant="top" src={data.Images[0]} alt={data.BoatName} />
      <Card.Body>
        <Card.Title>{data.BoatName}</Card.Title>
        <Card.Text>
          <strong>Year:</strong> {data.ModelYear}
          <br />
          <strong>Length:</strong> {data.LengthOverall}
          <br />
          {/* Add more fields as needed */}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
