import React from "react";
import { Carousel, Image } from "antd";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { parseImageLinks } from "../utils/utils";

const ImageCarousel = ({ additionalLinks }) => {
  const parsedLinks = parseImageLinks(additionalLinks);
  const getImages = () => {
    return parsedLinks.map((img) => (
      <LazyLoadComponent>
        <Image height={480} src={img} />
      </LazyLoadComponent>
    ));
  };

  return (
    <Carousel
      className="image-carousel text-center"
      autoplay
      autoplaySpeed={1200}
    >
      {getImages()}
    </Carousel>
  );
};

export default ImageCarousel;
