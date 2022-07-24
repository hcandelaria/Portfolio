import React from "react";
import { Carousel } from "react-bootstrap";

const CardCarousel = (props) => {
  return (
    <Carousel variant="dark">
      {props.images.map((image, index) => {
        return (
          <Carousel.Item key={index} interval={5000}>
            <img
              className="card-img-top d-block"
              src={image}
              alt={"image " + index}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default CardCarousel;
