import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import { Col, Container, Image, Navbar, Nav, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHistory, faCloudShowersHeavy, faAngleUp } from "@fortawesome/free-solid-svg-icons"
import { keywords, site, carousel, featured, footer } from "../data/index"
import LazyLoader from "./LazyLoader"

const App = (props) => {
  return (
    <Container fluid>
      <Helmet
        htmlAttributes={{ lang: site.lang }}
        title={site.title}
        meta={[
          {
            name: "description",
            content: site.description,
          },
          {
            property: "title",
            content: site.title,
          }
        ].concat(
          {
            name: "keywords",
            content: keywords.join(", "),
          }
        )} />
      <Row>
        <WhiteNavbar id="top" collapseOnSelect expand="lg" className="w-100">
          <Container fluid>
            <Row className="align-items-end">
              <Col lg="3">
                <Navbar.Brand>
                  <img
                    src={site.logo}
                    width="86"
                    height="62"
                    className="d-inline-block align-top"
                    alt={site.title}
                  />
                </Navbar.Brand>
              </Col>
              <Col lg="7">
                <NavTitle href="/">
                  {site.title}
                </NavTitle>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row className="align-items-end w-100">
              <NavbarToggle aria-controls="responsive-navbar-nav" className="ml-auto" >
                <FontAwesomeIcon icon={faBars} color="#fff" />
              </NavbarToggle>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                  <StyledNavLink className="nav-link" href="#top">
                    Accueil
                   </StyledNavLink>
                  <StyledNavLink className="nav-link" href="#services">
                    Services
                   </StyledNavLink>
                  <StyledNavLink className="nav-link" href="#contact">
                    Nous Joindre
                  </StyledNavLink>
                </Nav>
              </Navbar.Collapse>
            </Row>
          </Container>
        </WhiteNavbar>
      </Row>
      <Row>
        <LazyLoader callback={() => import("./Carousel")} props={{ items: carousel, phone: site.phone }} />
      </Row>
      <RowPullUp className="justify-content-center">
        <LazyLoader callback={() => import("./Featured")} props={{ items: featured }} />
      </RowPullUp>
      <Row id="services">
        <Row className="justify-content-center w-100" noGutters={true}>
          <ResCol id="residential" lg="5" className="wow animated fadeInUp">
            <h2>Résidentiel</h2>
            <p>
              Anybody with a pickup and a blade can plow snow. At Landscaping, we employ certified snow professionals who actually study the mechanics of how snow behaves. We consider how snow melts, the consequences of freezing.
            </p>
          </ResCol>
        </Row>
        <AltRow className="justify-content-center w-100" noGutters={true}>
          <ResCol id="commercial" lg="5" className="wow animated fadeInLeft">
            <h2>Commercial</h2>
            <p>
              Anybody with a pickup and a blade can plow snow. At Landscaping, we employ certified snow professionals who actually study the mechanics of how snow behaves. We consider how snow melts, the consequences of freezing.
            </p>
          </ResCol>
        </AltRow>
        <Row className="justify-content-center w-100" noGutters={true}>
          <ResCol id="price" lg="5" className="wow animated fadeInRight">
            <h2>Prix Compétitifs</h2>
            <p>
              Anybody with a pickup and a blade can plow snow. At Landscaping, we employ certified snow professionals who actually study the mechanics of how snow behaves. We consider how snow melts, the consequences of freezing.
            </p>
          </ResCol>
        </Row>
        <Row className="justify-content-center w-100" noGutters={true}>
          <LazyLoader callback={() => import("./Contact")} props={{ site: site }} />
        </Row>
      </Row>
      <Footer>
        <Container fluid>
          <Row className="justify-content-center">
            <Col lg="12">
              <FooterDoodle className="wow animated delay-1s bounceInLeft" src={footer.doodle} alt="Souffleuse a neige" />
            </Col>
            <Col lg="10" xs="12">
              <RowOverFlowHidden className="justify-content-center">
                <Angled className="col-lg-5 col-md-5 col-sm-8 col-8">
                  <AngledContent className="container-fluid">
                    <Row className="align-items-center">
                      <Col lg="5" md="4" sm="8" xs="10">
                        <FontAwesomeIcon className="PrettyFontAwesomeIcon" icon={faHistory} color="#1F1F1F" size="4x" />
                      </Col>
                      <Col lg="7" md="6" sm="8" xs="10">
                        <p> 24/7 preparedness in wintry weather</p>
                      </Col>
                    </Row>
                  </AngledContent>
                </Angled>
                <Angled className="col-lg-5 col-md-5 col-sm-8 col-8">
                  <AngledContent className="container-fluid">
                    <Row className="align-items-center">
                      <Col lg="5" md="4" sm="8" xs="10">
                        <FontAwesomeIcon className="PrettyFontAwesomeIcon" icon={faCloudShowersHeavy} color="#1F1F1F" size="4x" />
                      </Col>
                      <Col lg="7" md="6" sm="8" xs="10">
                        <p> Pre-season and pre-storm planning</p>
                      </Col>
                    </Row>
                  </AngledContent>
                </Angled>
              </RowOverFlowHidden>
            </Col>
          </Row>
          <Row>
            <LazyLoader callback={() => import("./Dev")} props={{ site: site }} />
          </Row>
        </Container>
      </Footer>
      <BackToTopButton id="to-top" href="#top">
        <FontAwesomeIcon icon={faAngleUp} color="#fff" />
      </BackToTopButton>
    </Container>
  )
}

const WhiteNavbar = styled(Navbar)`
background-color: #0D1B2F;
`
const StyledNavLink = styled(Nav.Link)`
&&& {
    padding: 5px;
    margin-left: 15px;
    margin-right: 15px;
    color: #8eb0e0;
}
&&&:hover, &&&:active, &&&.active {
  color: #fff;
}
`
const NavTitle = styled(Nav.Link)`
&&& {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-weight: 600;
  
}
`
const NavbarToggle = styled(Navbar.Toggle)`
&&& {
  border-radius: 0;
  border-color: rgba(255,255,255,0.3);
}
`
///margin-top: -130px; problem with carousel control
const RowPullUp = styled(Row)`
margin-top: 15px;
`
const ResCol = styled(Col)`
display:block;
text-align: center;
margin: 45px;
`
const AltRow = styled(Row)`
background-color: #F5F5F5;
`
const Footer = styled(Row)`
background-color: #454545;
margin-top: 150px;
`
const Angled = styled.div`
&{
  display: inline-block;
  background-color: #3B3B3C;
  color: #FFF;
  transition-duration: .2s;
  transform: skewX(-20deg);
}
.PrettyFontAwesomeIcon{
  margin-bottom: 40px;
  margin-top: 40px;
}
&:hover, &:active, &:hover .PrettyFontAwesomeIcon, &:active .PrettyFontAwesomeIcon{
  background-color: #2273e6;
  color: #FFF;
}
`
const AngledContent = styled.div`
transform: skewX(20deg);
display: inline-block;
padding: 15px 10px;
`
const RowOverFlowHidden = styled(Row)`
overflow: hidden;
`
const FooterDoodle = styled(Image)`
&{
  position: absolute;
  pointer-events: none;
  bottom: -105px;
  z-index: 9;
  max-width: 90%;
}
`
const BackToTopButton = styled.a`
&&&{
  position: fixed;
  display: none;
  right: 30px;
  bottom: 34px;
  z-index: 99;
  height: 50px;
  width: 50px;
  font-size: 20px;
  text-align: center;
  padding-top: 5px;
  line-height: 36px;
  border-radius: 50%;
  background: #0D1B2F;
}
`

export default App