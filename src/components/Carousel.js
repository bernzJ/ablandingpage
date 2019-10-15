import React from "react"
import styled from "styled-components"
import { Carousel } from "react-bootstrap"
import PropTypes from "prop-types"

const CarouselComponent = ({ items, phone }) => (
  <MainCarousel indicators={false} className="w-100 animated fadeIn" interval={null}>
    {items.map((item, key) =>
      <MainCarouselItem key={key}>
        <StyledImg style={{ backgroundImage: `url(${item.img})` }} />
        <CarouselCaption>
          <BigH>{item.title}</BigH>
          {item.subtitle ?
            <Para>{item.subtitle}</Para>
            : null}
          <PhoneLink href={`tel:+1${phone}`}>
            {phone}
          </PhoneLink>
        </CarouselCaption>
      </MainCarouselItem >
    )}
  </MainCarousel>
)

CarouselComponent.propTypes = {
  items: PropTypes.array.isRequired,
}

const MainCarousel = styled(Carousel)`
&{
  height:680px;
}
`
const MainCarouselItem = styled(Carousel.Item)`
height:680px;
`
const StyledImg = styled.div`
&{
  height: 100%;
  background-repeat:no-repeat;
  background-position: center;
}
@media (min-width: 1904px) {
  width: 100%;
}
@media (max-width: 1419px) {
  background-position: 75%;  
}
`
const CarouselCaption = styled(Carousel.Caption)`
text-align: left;
top:20px;
left: 5%;
right: auto;
`
const BigH = styled.h1`
&{
  font-size: 60px;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  font-size: 40px;
}
`
const Para = styled.p`
&{
  font-size: 40px;
  text-transform: uppercase;
}
@media (max-width: 768px) {
  font-size: 20px;
}
`
const PhoneLink = styled.a`
&{
  font-size: 30px;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  background-color: #fff;
  padding: 15px;
}
&:hover, &:focus{
  text-decoration: none;
}
`
export default CarouselComponent