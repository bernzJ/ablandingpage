import React from "react"
import { Container, Col, Row } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMobileAlt, faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons"
import styled from "styled-components"
import PropTypes from "prop-types"
import parallax from "../assets/parallax.jpg"

const Contact = ({ site }) => {
  return (
    <ShadyContainer id="contact" className="my-5 py-5 animated fadeIn">
      <Row className="justify-content-center">
        <Col lg="5" md="8" className="m-3">
          <Row>
            <Col lg="4" className="my-4">
              <FontAwesomeIcon icon={faMobileAlt} color="#fff" size="5x" />
            </Col>
            <Col lg="8" className="my-4">
              <Row>
                <WH3>Téléphone</WH3>
              </Row>
              <Row>
                <StyledA href={`tel:+1${site.phone}`}>{site.phone}</StyledA>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col lg="5" md="8" className="m-3">
          <Row>
            <Col lg="4" className="my-4">
              <FontAwesomeIcon icon={faEnvelopeOpenText} color="#fff" size="5x" />
            </Col>
            <Col lg="8" className="my-4">
              <Row>
                <WH3>Email</WH3>
              </Row>
              <Row>
                <StyledA href={`mailto:${site.email}`}>{site.email}</StyledA>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </ShadyContainer>
  )
}

Contact.propTpes = {
  site: PropTypes.object.isRequired
}

const ShadyContainer = styled(Container)`
background-color: #39629b;
padding: 50px;
background-image: url(${parallax});
background-attachment: fixed;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
`
const StyledA = styled.a`
&{
  text-decoration: none;
  color: #fff;
}
&:hover {
  text-decoration: none;
  color: #8eb0e0;
}
`
const WH3 = styled.h3`
color: #fff;
`

export default Contact