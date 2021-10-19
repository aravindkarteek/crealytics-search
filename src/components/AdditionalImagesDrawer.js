import React from "react";
import { Drawer } from "antd";
import TitleWithImage from "./TitleWithImage";
import ProductDetails from "./ProductDetails";
import ImageCarousel from "./ImageCarousel";

const AdditionalImagesDrawer = ({ visible, onClose, productDetails }) => {
  const { title, additionalLinks } = productDetails || {};
  return (
    <Drawer
      visible={visible}
      onClose={onClose}
      width="50vw"
      title={<TitleWithImage text={title} row={productDetails} />}
    >
      <ImageCarousel additionalLinks={additionalLinks} />
      <ProductDetails productDetails={productDetails} />
    </Drawer>
  );
};

export default AdditionalImagesDrawer;
