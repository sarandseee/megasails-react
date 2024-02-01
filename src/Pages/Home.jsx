import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Placeholder,
  Row,
} from "react-bootstrap";
//import banner_hcb from '../Images/banner_hcb.png'
import yacht_gallary from "../Images/yacht_gallary.png";

const Home = () => {
  // useEffect(() => {
  //   if (window.adsbygoogle && window.adsbygoogle.push) {
  //     window.adsbygoogle.push({});
  //   }
  // }, []);

  return (
    <>
      <section>
        <Container>
          <Row className="my-3 my-lg-5">
            <Col
              xs={12}
              md={6}
              className="d-flex flex-column justify-content-center position-relative"
            >
              <div className="main">
                <video
                  src="http://hcbyachts.com//wp-content/uploads/2022/02/feature_short9.mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="content">
                  <h2 className="text-center">Dream Yacht: Perfect Shadow</h2>
                  <p className="text-center px-5">
                    Did you have new, used and featured yacht plan? You will
                    find it all with MEGASAILS.
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} className="position-relative">
              <div className="main">
                <video
                  src="https://cdn2.hubspot.net/hubfs/294010/HomepageVideos/FHCheerloop_Color_Optimized.mp4?t=1536086660446"
                  type="video/mp4"
                  autoPlay
                  loop
                  muted
                />
                <div className="content">
                  <h2 className="text-center">
                    Yacht broker's complete solution
                  </h2>
                  <p className="text-center px-5">
                    Your ultimate yacht broker solution, offering detailed
                    services for all your needs.
                  </p>
                </div>
              </div>
              {/* <div class="app-layout">
                <div class="box tweets">
                  <div className="main">
                    <video src='http://hcbyachts.com//wp-content/uploads/2022/02/feature_short9.mp4' autoPlay loop muted />
                  </div>
                </div>
                <div class="box replies">
                  <div className="main">
                    <video src='http://hcbyachts.com//wp-content/uploads/2022/02/feature_short9.mp4' autoPlay loop muted />
                  </div>
                </div>
                <div class="box search">
                  <div className="main">
                    <video src='http://hcbyachts.com//wp-content/uploads/2022/02/feature_short9.mp4' autoPlay loop muted />
                  </div>
                </div>
                <div class="box messages">
                  <div className="main">
                    <video src='http://hcbyachts.com//wp-content/uploads/2022/02/feature_short9.mp4' autoPlay loop muted />
                  </div>
                </div>
              </div> */}
            </Col>
            {/* <Col xs={12} md={5}>
              <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="home" className='banner-tab' title="Search by Yacht's Class Names">
                  <Row className=''>
                    <Col className='p-0' xs={6}>
                      <li className='list'>Center Console</li>
                      <li className='list'>Anitique & Classic</li>
                      <li className='list'>Power Catamarans</li>
                      <li className='list'>Convertible Boats</li>
                      <li className='list'>Express Crusier</li>
                      <li className='list'>Runa Boats</li>
                    </Col>
                    <Col className='p-0' xs={6}>
                      <li className='list'>Cuddy Cabin</li>
                      <li className='list'>Dual Console</li>
                      <li className='list'>Flybridge</li>
                      <li className='list'>Sports Crusier</li>
                      <li className='list'>Salt Water Fishing</li>
                      <li className='list'>Sports Fishing</li>
                    </Col>
                  </Row>
                </Tab>
                <Tab eventKey="profile" title="Services">
                <Row className=''>
                    <Col className='p-0' xs={6}>
                      <li className='list'>Center Console</li>
                      <li className='list'>Anitique & classic</li>
                      <li className='list'>power catamarans</li>
                      <li className='list'>Convertible Boats</li>
                      <li className='list'>Express Crusier</li>
                      <li className='list'>Runa Boats</li>
                    </Col>                    
                  </Row>
                </Tab> 
              </Tabs>
            </Col>*/}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="mb-2">
            <Col xs={12} md={8}>
              <h5 className="siteTextColor mb-md-3 fw-bold">
                Yacht's Class Name
              </h5>
              <hr className="mb-3 mb-lg-4" />
              <Row className="mb-3">
                <Col xs={12} md={6}>
                  <ul className="m-0 p-0">
                    <li className="list fs-6">Center Console</li>
                    <li className="list fs-6">Anitique and Classic</li>
                    <li className="list fs-6">Power Catamarans</li>
                    <li className="list fs-6">Convertible Boats</li>
                    <li className="list fs-6">Express Crusier</li>
                    <li className="list fs-6">Runa Boats</li>
                  </ul>
                </Col>
                <Col xs={12} md={6}>
                  <ul className="m-0 p-0">
                    <li className="list fs-6">Cuddy Cabin</li>
                    <li className="list fs-6">Dual Console</li>
                    <li className="list fs-6">Flybridge</li>
                    <li className="list fs-6">Sports Crusier</li>
                    <li className="list fs-6">Salt Water Fishing</li>
                    <li className="list fs-6">Sports Fishing</li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <h5 className="siteTextColor mb-md-3 fw-bold">
                Our Yacht Services
              </h5>
              <hr className="mb-3 mb-lg-4" />
              <Row className="mb-2">
                <Col xs={12} md={12}>
                  <ul className="m-0 p-0">
                    <li className="list fs-6">saravanan</li>
                    <li className="list fs-6">Financing</li>
                    <li className="list fs-6">Brokerage</li>
                    <li className="list fs-6">Hurricane Storage</li>
                    <li className="list fs-6">Transportation</li>
                    <li className="list fs-6">Trade-in</li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col xs={6} sm={6} md={6} lg={3} className="text-center">
              <div className="py-3" style={{ backgroundColor: "#525FE1" }}>
                <a className="c-card-link-end text-white" href="#hhhh">
                  New Yachts &nbsp;
                  <i style={{ fontSize: 16 }} className="fa c-hover">
                    
                  </i>
                </a>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} className="text-center">
              <div className="py-3" style={{ backgroundColor: "#FF1E00" }}>
                <a className="c-card-link-end text-white" href="#link4">
                  Used Yachts &nbsp;
                  <i style={{ fontSize: 16 }} className="fa c-hover">
                    
                  </i>
                </a>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} className="text-center">
              <div className="py-3" style={{ backgroundColor: "#3AB0FF" }}>
                <a className="c-card-link-end text-white" href="#link4">
                  Featured Yachts &nbsp;
                  <i style={{ fontSize: 16 }} className="fa c-hover">
                    
                  </i>
                </a>
              </div>
            </Col>
            <Col xs={6} sm={6} md={6} lg={3} className="text-center">
              <div className="py-3" style={{ backgroundColor: "#F8B400" }}>
                <a className="c-card-link-end text-white" href="#link4">
                  Services &nbsp;
                  <i style={{ fontSize: 16 }} className="fa c-hover">
                    
                  </i>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row className="my-4 my-md-5">
            <Col md={4}>
              <Card className="c-card">
                <Card.Body>
                  <Card.Title>Who We Are</Card.Title>
                  <Card.Text className="my-4">
                    We are premier yacht co-broker, connecting you to the world
                    of luxury vessels for unforgettable seafaring experiences.
                  </Card.Text>
                  <a className="c-card-link-end" href="#link4">
                    Browse Yachts &nbsp;
                    {/* <i style={{ fontSize: 16 }} className="fa c-hover"></i> */}
                  </a>
                </Card.Body>
                <Placeholder xs={12} bg="primary" />
              </Card>
            </Col>
            <Col md={4}>
              <Card className="c-card">
                <Card.Body>
                  <Card.Title>What We Do</Card.Title>
                  <Card.Text className="my-4">
                    From yacht selection to seamless transactions, we guide you
                    through the entire process, ensuring you find the perfect
                    yacht for sale with ease.
                  </Card.Text>
                  <a className="c-card-link-end" href="#link4">
                    Contact Us &nbsp;
                    {/* <i style={{ fontSize: 16 }} className="fa c-hover"></i> */}
                  </a>
                </Card.Body>
                <Placeholder xs={12} bg="warning" />
              </Card>
            </Col>
            <Col md={4}>
              <Card className="c-card">
                <Card.Body>
                  <Card.Title>Why Choose Us</Card.Title>
                  <Card.Text className="my-4">
                    We also provide after sale services like
                    <a className="c-card-link" href="#link1">
                      Yacht Insurance,
                    </a>
                    <a className="c-card-link" href="#link2">
                      Yacht Financing,
                    </a>
                    <a className="c-card-link" href="#link3">
                      Hurricane Storage,
                    </a>
                    <a className="c-card-link" href="#link4">
                      Transportation.
                    </a>
                  </Card.Text>
                  <a className="c-card-link-end" href="#link4">
                    Browse Services &nbsp;
                    {/* <i style={{ fontSize: 16 }} className="fa c-hover"></i> */}
                  </a>
                </Card.Body>
                <Placeholder xs={12} bg="primary" />
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="position-relative"
        style={{ backgroundColor: "#F5F0BB" }}
      >
        <Container>
          <Row className="my-5 justify-content-center">
            <Col md={9} className="pt-3 pb-md-2 pb-lg-4">
              <div className="d-flex justify-content-center mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: 60, height: 60 }}
                ></lord-icon>
              </div>
              <h3 className="text-center lh-sm mb-3">
                "Discover Your Dream Yacht: Embark on a Journey of Unmatched
                Luxury and Adventure"
              </h3>
              <h5 className="text-center">-- Megasails --</h5>
            </Col>
          </Row>
        </Container>
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

      <section className="my-5">
        <Container>
          <h2 className="text-center">Browse a wide collections of yachts</h2>
          <Row className="my-5">
            <Col xs={12} md={4}>
              <div className="mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: "60px", height: "60px" }}
                ></lord-icon>
              </div>
              <h5 className="mb-2">Mega Yachts</h5>
              <p className="lh-base text-black-50 ">
                Mega yachts epitomize luxury and opulence, boasting extravagant
                amenities and spacious interiors that redefine maritime
                indulgence.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <div className="mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: 60, height: 60 }}
                ></lord-icon>
              </div>
              <h5 className="mb-2">Motor Yachts</h5>
              <p className="lh-base text-black-50">
                Motor yachts are the epitome of speed and power on the water,
                featuring robust engines that propel them swiftly through the
                waves.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <div className="mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: 60, height: 60 }}
                ></lord-icon>
              </div>
              <h5 className="mb-2">Sports Yachts</h5>
              <p className="lh-base text-black-50">
                Sports yachts are designed for the thrill-seekers and adrenaline
                junkies of the yachting world, offering exceptional speed,
                agility, and handling capabilities.
              </p>
            </Col>
          </Row>
          <Row className="my-5">
            <Col xs={12} md={4}>
              <div className="mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: 60, height: 60 }}
                ></lord-icon>
              </div>
              <h5 className="mb-2">Motorsailers</h5>
              <p className="lh-base text-black-50">
                Motorsailers seamlessly blend the elegance of sailing yachts
                with the convenience of motor yachts, offering versatility in
                both cruising and sailing experiences.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <div className="mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: 60, height: 60 }}
                ></lord-icon>
              </div>
              <h5 className="mb-2">Trimaran</h5>
              <p className="lh-base text-black-50">
                Trimarans are a type of multihull vessel known for their
                exceptional stability, speed, and efficiency on the water.
              </p>
            </Col>
            <Col xs={12} md={4}>
              <div className="mb-3">
                <lord-icon
                  src="https://cdn.lordicon.com/frtqoext.json"
                  trigger="hover"
                  colors="primary:#121331"
                  style={{ width: 60, height: 60 }}
                ></lord-icon>
              </div>
              <h5 className="mb-2">Catamaran</h5>
              <p className="lh-base text-black-50">
                Trimarans are a type of multihull vessel known for their
                exceptional stability, speed, and efficiency on the water.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="my-5">
        <img src={yacht_gallary} alt="" className="img-fluid" />
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

      <section
        className="position-relative py-4 py-md-5"
        style={{ backgroundColor: "#0052cc", color: "white" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={9}>
              <h2 className="text-center lh-base fw-bolder mb-2">
                Join the HCB Lifestyle
              </h2>
              <p className="text-center lh-base my-3">
                Our company celebrates our commitment to customer care
                throughout the ownership cycle. You are not just purchasing
                another boat, you are joining our HCB Family.
              </p>
              <h4 className="text-center m-0">
                <Button className="lh-base mt-3" variant="outline-light">
                  Take Me To HCB
                </Button>
              </h4>
            </Col>
          </Row>
        </Container>
      </section>

      <section
        className="position-relative pt-0 pb-2"
        style={{ backgroundColor: "#0052cc", color: "white" }}
      >
        <Container>
          <Row className="justify-content-center">
            <Col md={9} className="pt-3 pb-md-2 pb-lg-4">
              <h2 className="text-center lh-base fw-bolder my-3">
                Join the HCB Lifestyle
              </h2>
              <p className="text-center lh-base my-3">
                Our company celebrates our commitment to customer care
                throughout the ownership cycle. You are not just purchasing
                another boat, you are joining our HCB Family.
              </p>
              <h4 className="text-center m-0">
                <Button className="lh-base mt-3" variant="outline-light">
                  Take Me To HCB
                </Button>
              </h4>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
