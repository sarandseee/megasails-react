import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function FeaturedYacht() {
  return (
    <> 
        <section className='position-relative pt-0 pb-2' style={{ backgroundColor: '#F1F6F9' }}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="curve-container__curve"
                viewBox="10 -80 1870 210"
            >
            <path
              fill="#fff"
              d="M977.9 76.2C475.2-17.4.2 132.5.2 132.5v143h1891.1V.7s-410.7 169.1-913.4 75.5z"
              className="plain fill-n0"
            ></path>
            </svg>
          <Container>
            <Row className='mb-5 justify-content-center'>
              <Col md={9} className='pt-3 pb-md-2 pb-lg-5'>
                <h3 className='text-center lh-sm my-3'>Featured Yachts</h3>                
                <h5 className='text-center lh-sm my-3'>Unveiling our exquisite featured yacht, a compact gem that radiates elegance and offers an enchanting yachting experience in a perfectly sized package.</h5>
                <h6 className='text-center'>-- Refine your search, find your perfect yacht with our filter. --</h6>
              </Col>
            </Row>
          </Container>
        </section > 
    </>
    )
}

export default FeaturedYacht