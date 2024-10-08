import React from "react";
import Styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { sliderImageUrl } from "./dataCarousel";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const DivParent = Styled.div`
  width:80%;
  margin: auto;
  padding: 10px;
  margin-top: 100px;
  background-color:#f1f1f1;
`;

const DivSlider = Styled.div`
  display: flex;
  justify-content: center;
`;

const Image = Styled.img`
  width: 100%;
  height: auto;
  objectFit: 'contain';
`;

const Slider = () => {
  return (
    <DivParent>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <DivSlider key={index}>
              <Image src={imageUrl.url} alt="product" />
            </DivSlider>
          );
        })}
      </Carousel>
    </DivParent>
  );
};

export default Slider;