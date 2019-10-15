import React from "react"
import styled from "styled-components"
import { Container, Col, Row, Tooltip, OverlayTrigger } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"

const Dev = ({ site }) => {
    return (
        <DevContainer fluid>
            <Row className="justify-content-center">
                <Col lg="4" md="5" sm="5" className="p-3">
                    <WhiteSpan>© 2019 Benzi. - Tous droits réservés.</WhiteSpan>
                </Col>
                <Col lg="4" md="5" sm="5" className="p-3">
                    <Row className="justify-content-end">
                        <Col lg="1" md="1" sm="1" xs="1">
                            <OverlayTrigger
                                trigger="click"
                                key="top"
                                placement="top"
                                overlay={
                                    <Tooltip>
                                        {site.inquiry}
                                    </Tooltip>
                                }>
                                <FontAwesomeIcon color="#fff" icon={faInfoCircle} />
                            </OverlayTrigger>
                        </Col>
                        <Col lg="6" md="7" sm="6" xs="10">
                            <WhiteSpan>
                                Designed by <WhiteLink href={site.github} target="_blank">{site.author}</WhiteLink>
                            </WhiteSpan>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </DevContainer>
    )
}

const DevContainer = styled(Container)`
background-color: #231f20;
`
const WhiteSpan = styled.span`
color: #fff;
`
const WhiteLink = styled.a`
&{
    text-decoration: none;
    color: #fff;
}
&:hover {
    text-decoration: none;
    color: #8eb0e0;
}
`

export default Dev