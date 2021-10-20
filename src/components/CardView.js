import React from "react";
import { List } from "antd";
import TitleWithImage from "./TitleWithImage";
import AdditionalImagesDrawer from "./AdditionalImagesDrawer";
import { pagination } from "../utils/utils";

const CardView = ({
  productData,
  productToView,
  showAdditionalImages,
  setShowAdditionalImages,
  handleProductClick,
}) => {
  return (
    <>
      <List
        className="mobile-view my-5"
        itemLayout="horizontal"
        dataSource={productData}
        pagination={pagination}
        renderItem={(item) => {
          return (
            <List.Item>
              <TitleWithImage
                text={item.title}
                row={item}
                isLink
                handleProductClick={handleProductClick}
              />
            </List.Item>
          );
        }}
      />
      <AdditionalImagesDrawer
        visible={showAdditionalImages}
        onClose={() => setShowAdditionalImages(false)}
        productDetails={productToView}
      />
    </>
  );
};

export default CardView;
