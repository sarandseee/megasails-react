import { addDoc, collection } from "firebase/firestore";
import React, { useMemo, useState } from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import Select from "react-select";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { db } from "../firebase";

const ServiceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [services, setServices] = useState("");
  const [comments, setComments] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const serviceOptions = [
    { value: "1", label: "Insurance" },
    { value: "2", label: "Finance" },
    { value: "3", label: "Hurricane" },
    { value: "4", label: "Transportation" },
    { value: "5", label: "Charter" },
  ];

  const serviceReqData = {
    name,
    email,
    phone_number,
    country,
    services,
    comments,
  };

  const AddReqData = async (e) => {
    e.preventDefault();
    try {
      //console.log(serviceReqData)
      const serviceReqDataRef = collection(db, "Service_Request");
      await addDoc(serviceReqDataRef, serviceReqData);
      setName("");
      setEmail("");
      setPhoneNumber("");
      setCountry("");
      setServices("");
      setComments("");
    } catch (error) { }
  };

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption.label);
  };

  return (
    <>
      <Form onSubmit={AddReqData}>
        <Row
          className="justify-content-center mb-3"
          style={{ backgroundColor: "#1d355e", color: "white" }}
        >
          <h4 className="text-center lh-base m-0 p-1">Service Request Form</h4>
        </Row>
        <Container>
          <Row className="pt-4">
            <Col md={6}>
              <Form.Label htmlFor="name">Name</Form.Label>
              <Form.Control
                className="mb-3 field"
                type="text"
                id="aaa"
                aria-describedby="passwordHelpBlock"
                value={serviceReqData.name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label htmlFor="email">Email</Form.Label>
              <Form.Control
                className="mb-3 field"
                type="email"
                id="aaa"
                aria-describedby="passwordHelpBlock"
                value={serviceReqData.email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Label htmlFor="phone">Phone Number</Form.Label>
              <PhoneInput
                className="mb-3"
                //style={/* specify your desired styles */}
                //defaultCountry="US"
                value={serviceReqData.phone_number}
                onChange={setPhoneNumber}
              />
              <Form.Label htmlFor="country">Country</Form.Label>
              <Select
                options={options}
                value={country ? { label: country, value: country } : null}
                onChange={handleCountryChange}
              />
            </Col>
            <Col>
              <Form.Label htmlFor="service">Service</Form.Label>
              <Select
                className="mb-3"
                options={serviceOptions}
                value={serviceReqData.services}
                onChange={(selectedOption) => setServices(selectedOption)}
              />

              <Form.Group>
                <Form.Label>Comments</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  className="mb-3 field"
                  value={serviceReqData.comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <h4 className="text-center m-0">
            <Button
              type="submit"
              className="lh-base text-black c-contact-footer-btn mb-3"
            >
              Request
            </Button>
          </h4>
        </Container>
      </Form>
    </>
  );
};

export default ServiceForm;
