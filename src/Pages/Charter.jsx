import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import charter_banner from '../Images/charter_banner.png'
import ServiceForm from '../Components/ServiceForm'

function Charter() {
  return (
    <>
      <section>
        <Container>
          <Row className="my-4">
            <Col xs={12} sm={12} md={12} lg={7} className="d-flex flex-column justify-content-center my-3">
              <lord-icon
                src="https://cdn.lordicon.com/qeberlkz.json"
                trigger="hover"
                colors="primary:#1d355e"
                style={{ width: '60px', height: '60px' }}>
              </lord-icon>
              <h1 className="mb-3">The Yacht Charter </h1>
              <p style={{ lineHeight: "28px" }}>Escape to the beauty of the sea with our premier yacht charter offerings, providing a gateway to explore breathtaking destinations, exquisite onboard amenities, and exceptional service for an unforgettable vacation.</p>
            </Col>
            <Col xs={12} sm={12} md={12} lg={5} className="d-flex justify-content-center my-3">
              <img
                src={charter_banner}
                alt=""
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className='py-2' style={{ backgroundColor: '#fff' }}>
        <Container>
          <Row className="my-4">
            <h3 className="mb-4">Luxury Yacht Charter Experiences</h3>
            <p style={{ lineHeight: "32px" }}>At Megasails, we are thrilled to provide our unparalleled Yacht Charter Services. Indulge in the epitome of luxury and adventure as we offer a curated selection of exquisite yachts for charter, accompanied by professional crew members dedicated to ensuring an unforgettable experience. Whether you seek sun-soaked relaxation or thrilling exploration, our Yacht Charter Services promise to create cherished memories and cater to your every desire. Experience the ultimate voyage of opulence and tranquility with [Company Name] as your trusted yacht co-broker.</p>
          </Row>
        </Container>
      </section>

      <section style={{ backgroundColor: '#ebf0f7' }}>
        <div style={{ backgroundColor: '#1d355e', color: 'white' }}>
          <Container>
            <Row className='justify-content-center'>
              <Col md={9} className='py-2'>
                <h4 className='text-center lh-base m-0'>Service Request Form</h4>
              </Col>
            </Row>
          </Container>
        </div>
        <Container className='py-3'>
          <ServiceForm />
        </Container>
        <div className='py-1' style={{ backgroundColor: '#1d355e', color: 'white' }}>
        </div>
      </section>

      <section>
        <Container>
          <Image className='my-3 p-4'
          style={{
          backgroundColor:'#DFDFDF',
          height:'200px',
          width:'100%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsyJ8ypF01nBFgeGHM-MX9KK8n1mnoRu9Hng&usqp=CAU" fluid />
        </Container>
      </section>
    </>
  )
}

export default Charter