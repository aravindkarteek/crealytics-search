import React from "react";
import { Drawer } from "antd";
import TitleWithImage from "./TitleWithImage";
import ProductDetails from "./ProductDetails";
import ImageCarousel from "./ImageCarousel";

const AdditionalImagesDrawer = ({ visible, onClose, productDetails }) => {
  const { title, additionalLinks } = productDetails || {};
  return (
    <Drawer
      className="additional-images"
      visible={visible}
      onClose={onClose}
      title={<TitleWithImage text={title} row={productDetails} />}
      width="100vw"
    >
      <ImageCarousel additionalLinks={additionalLinks} />
      <ProductDetails productDetails={productDetails} />
    </Drawer>
  );
};

export default AdditionalImagesDrawer;
