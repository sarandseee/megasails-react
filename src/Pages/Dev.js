import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row, Button, Form } from "react-bootstrap";
import { makeStringNames } from "../Components/MakeStringCollection";
import { classNames } from "../Components/ClassNameCollections";

function Dev() {
  const [yachts, setYachts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [make, setMake] = useState("HCB");
  const [condition, setCondition] = useState("All");
  const [className, setClassName] = useState("");

  const [minLength, setMinLength] = useState("");
  const [maxLength, setMaxLength] = useState("");

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");

  const fetchData = (start, rows) => {
    let conditionParam = condition;
    // If 'All' is selected, include both 'New' and 'Used'
    if (condition === "All") {
      conditionParam = "New,Used";
    }

    let apiUrl = `http://18.223.93.100:5001/documents?start=${start}&rows=${rows}`;

    // Append selected parameters to the API URL
    if (make !== "All") {
      apiUrl += `&make=${make}`;
    }

    if (condition !== "All") {
      apiUrl += `&condition=${conditionParam}`;
    }

    if (className !== "All") {
      apiUrl += `&boatClass=${className}`;
    }

    if (minLength && maxLength) {
      apiUrl += `&length=${minLength}:${maxLength}|feet`;
    }

    if (minYear && maxYear) {
      apiUrl += `&year=${minYear}:${maxYear}`;
    }

    if (minPrice && maxPrice) {
      apiUrl += `&price=${minPrice}:${maxPrice}|USD`;
    }

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const yachtsArray = data.data.results;
        setYachts(yachtsArray);
        setTotalPages(Math.ceil(data.data.totalCount / rows));
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    fetchData(0, 24);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(0, 24);
  };

  const handleNextPage = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * 24;
    fetchData(start, 24);
    setPage(nextPage);
  };

  const handlePrevPage = () => {
    const prevPage = page - 1;
    const start = (prevPage - 1) * 24;
    fetchData(start, 24);
    setPage(prevPage);
  };

  return (
    <>
      <div
        className="m-3 p-3 rounded-4 shadow"
        style={{
          background:
            "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(36, 59, 85) 91.1%)",
        }}
      >
        <Container fluid>
          <Form onSubmit={handleSubmit}>
            <Row className="g-1">
              <Col xs={12} md={4} lg={2}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label className="text-white">Make</Form.Label>
                  <Form.Control
                    as="select"
                    value={make}
                    onChange={(e) => {
                      setMake(e.target.value);
                      setClassName("All");
                    }}
                  >
                    <option value="All">All</option>
                    {makeStringNames.map((make) => (
                      <option key={make} value={make}>
                        {make}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="text-white">Condition</Form.Label>
                  <Form.Control
                    as="select"
                    value={condition}
                    onChange={(e) => setCondition(e.target.value)}
                  >
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="All">All</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group>
                  <Form.Label className="text-white">Class Names</Form.Label>
                  <Form.Control
                    as="select"
                    value={className}
                    onChange={(e) => {
                      setClassName(e.target.value);
                      setMake("All");
                    }}
                  >
                    <option value="All">All</option>
                    {classNames.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-white">Length</Form.Label>
                  <Row className="g-1">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="min"
                        value={minLength}
                        onChange={(e) => setMinLength(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="max"
                        value={maxLength}
                        onChange={(e) => setMaxLength(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label className="text-white">Year</Form.Label>
                  <Row className="g-1">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="min"
                        value={minYear}
                        onChange={(e) => setMinYear(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="max"
                        value={maxYear}
                        onChange={(e) => setMaxYear(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
              <Col xs={12} md={4} lg={2}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput2"
                >
                  <Form.Label className="text-white">Price</Form.Label>
                  <Row className="g-1">
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="min"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </Col>
                    <Col>
                      <Form.Control
                        type="text"
                        placeholder="max"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </Col>
                  </Row>
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center">
              <Button className="btn-sm" type="submit">
                Advanced Search
              </Button>
            </div>
          </Form>
        </Container>
      </div>
      <Container>
        {/* <p>
          {make}_{condition}_{minLength}_{maxLength}_{minYear}_{maxYear}_
          {minPrice}_{maxPrice}
        </p> */}

        <Row>
          {yachts.map((yacht) => (
            <Col
              className="my-3"
              key={yacht.DocumentID}
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card>
                {/* Display the first image from the 'Images' array */}
                {yacht.Images && yacht.Images.length > 0 && (
                  <Card.Img
                    style={{ height: "250px", width: "100%" }}
                    variant="top"
                    src={yacht.Images[0].Uri}
                    alt="Yacht"
                  />
                )}

                <Card.Body>
                  {/* Display the CompanyName */}
                  <Card.Title>
                    {yacht.SaleClassCode} {yacht.MakeString}{" "}
                    {yacht.LengthOverall}
                  </Card.Title>

                  {/* Display the ModelYear */}
                  <Card.Subtitle className="mb-2 text-muted">
                    {yacht.ModelYear}
                  </Card.Subtitle>

                  {/* Display the Location */}
                  <Card.Text>
                    Location: {yacht.BoatLocation.BoatCityName},{" "}
                    {yacht.BoatLocation.BoatCountryID},{" "}
                    {yacht.BoatLocation.BoatStateCode}
                  </Card.Text>

                  {/* Display the Price */}
                  <Card.Text>Price:{yacht.Price}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {yachts.length === 0 && <p>No yachts found.</p>}
        <div className="d-flex justify-content-between mt-4">
          <Button onClick={handlePrevPage} disabled={page === 1}>
            Previous
          </Button>
          <p>
            Page {page} of {totalPages}
          </p>
          <Button onClick={handleNextPage} disabled={page === totalPages}>
            Next
          </Button>
        </div>

        {/* Display unique MakeString values */}
        {/* <div>
        <h2>Unique Makes</h2>
        <ul>
          {makeStringNames.map((make) => (
            <li key={make}>{make}</li>
          ))}
        </ul>
      </div> */}
      </Container>
    </>
  );
}

export default Dev;
