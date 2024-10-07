import React from 'react'
import "../Carossel/Carossel.module.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const sliderImageUrl = [
  {
    url:
      "https://storageimagepi.blob.core.windows.net/images/IPHONE16BRANCO.jpg"
  },
  {
    url:
      "https://storageimagepi.blob.core.windows.net/images/IPHONE16CORES.JPG"
  },
  {
    url:
      "https://storageimagepi.blob.core.windows.net/images/IPHONE16PRETO.jpg"
  },
  {
    url:
      "https://storageimagepi.blob.core.windows.net/images/IPHONE16ROSA.jpg"
  },
  {
    url:
      "https://storageimagepi.blob.core.windows.net/images/IPHONE16ULTRAMARINO.jpg"
  },
  {
    url:
      "https://storageimagepi.blob.core.windows.net/images/IPHONE16VERDEACIZENTADO.jpg"
  },
];

const Slider = () => {
  return (
    <div className="parent">
      <Carousel
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
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="product" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider;
