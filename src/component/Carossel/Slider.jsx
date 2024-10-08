import React from 'react';
import "../Carossel/Carossel.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderImageUrl = [
  {
    url: "https://storageimagepi.blob.core.windows.net/images/IPHONE16BRANCO.jpg"
  },
  {
    url: "https://storageimagepi.blob.core.windows.net/images/IPHONE16CORES.JPG"
  },
  {
    url: "https://storageimagepi.blob.core.windows.net/images/IPHONE16PRETO.jpg"
  },
  {
    url: "https://storageimagepi.blob.core.windows.net/images/IPHONE16ROSA.jpg"
  },
  {
    url: "https://storageimagepi.blob.core.windows.net/images/IPHONE16ULTRAMARINO.jpg"
  },
  {
    url: "https://storageimagepi.blob.core.windows.net/images/IPHONE16VERDEACIZENTADO.jpg"
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slider = () => {
  return (
    <div className="parent" style={{ marginTop: '70px' }}>
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
            <div className="slider" key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <img src={imageUrl.url} alt="product" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
