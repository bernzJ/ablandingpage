import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import styled from "styled-components"

//NOTE: since this is lazy loaded, $ is globaly set in index.js, it should not throw.
import "../assets/js/smooth-scrolling"

const Featured = ({ items }) => {
    return (
        <Col className="animated fadeIn faster">
            <Row className="justify-content-center">
                {items.map((item, key) => (
                    <MainContainer key={key} className="animated fadeInUp" style={{ animationDelay: `${key * 0.25}s` }}>
                        <StyledImg src={item.img} alt={item.title} />
                        <PullUpAarea className="PullUpAarea">
                            <Inner>
                                <VisibleSpan >{item.title}</VisibleSpan>
                                <HiddenContent>
                                    <StyledA href={item.slug}>{item.description}</StyledA>
                                </HiddenContent>
                            </Inner>
                        </PullUpAarea>
                    </MainContainer>
                ))}
            </Row>
        </Col>
    )
}

const MainContainer = styled.div`
&{
    position: relative;
    display: inline-block;
    overflow: hidden;
    margin-right: 30px;
    animation-fill-mode: both;
    height: 234px;
    width: 330px;
}
&:hover .PullUpAarea{
    bottom: -90px;
}
@media (max-width: 1122px) {
    margin-right: 0;
}
`
const StyledImg = styled(Image)`
background-repeat:no-repeat;
background-size:cover;
width: 100%;
`
const PullUpAarea = styled.div`
&{
    position: absolute;
    background-color: #0D1B2F;
    color: #FFF;
    padding: 0 5%;
    width: 110%;
    height: 200px;
    bottom: -145px;
    left: -5%;
    transition-duration: .2s;
    transform: rotate(-6deg);
}
`
const Inner = styled.div`
&{
    padding-left: 10px;
    transform: rotate(6deg);
}
&:after{
    content: " ";
    position: absolute;
    left: 15%;
    bottom: 25px;
    width: 70%;
    height: 2px;
    background-color: #5090eb;
}
`
const VisibleSpan = styled.span`
position: relative;
display: block;
text-align: right;
font-size: 16px;
letter-spacing: 5px;
text-transform: uppercase;
margin-top: 10px;
margin-right: 10px;
font-weight: 600;
`;
const HiddenContent = styled.div`
text-align: center;
margin-top: 28px;
font-size: 16px;
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

export default Featured