// New.js
import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

function New() {
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const params = new URLSearchParams(window.location.search);
      const apiParams = params.get("params");

      if (apiParams) {
        try {
          const response = await fetch(
            `https://services.boats.com/pls/boats/search?fields=DocumentID,ModelYear,NominalLength,LengthOverall,MakeString,Model,Images,BoatName,BoatLocation,SaleClassCode,BoatClassCode,Office,PriceHideInd,Price,GeneralBoatDescription&key=gs4g3hpp688c&rows=3&facets=MakeStringExact;BoatClassCode${apiParams}`
          );
          const data = await response.json();
          setJsonData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <section className="c-buy-banner py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={9}>
              <h3 className="text-center lh-base mb-3">New Yachts</h3>
              <h6 className="text-center lh-sm mb-2">
                Discover the epitome of luxury and performance with our
                exquisite selection of new yachts for sale.
              </h6>
              <h6 className="text-center" style={{ fontSize: "14px" }}>
                "Refine your search, find your perfect yacht with our filter"
              </h6>
              <div className="text-center m-0">
                <a href="#!">
                  <Button className="lh-base mt-3" variant="outline-light">
                    View more
                  </Button>
                </a>
              </div>

              {/* Display JSON data */}
              <pre>
                {jsonData ? JSON.stringify(jsonData, null, 2) : "Loading..."}
              </pre>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default New;
