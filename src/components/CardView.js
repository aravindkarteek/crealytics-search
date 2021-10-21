import React from "react";
import { List, Card } from "antd";
import TitleWithImage from "./TitleWithImage";
import AdditionalImagesDrawer from "./AdditionalImagesDrawer";
import { pagination } from "../utils/utils";
import ProductDetails from "./ProductDetails";

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
        loading={!productData.length}
        renderItem={(item) => {
          return (
            <List.Item>
              <Card
                loading={!item}
                title={
                  <TitleWithImage
                    text={item.title}
                    row={item}
                    isLink
                    handleProductClick={handleProductClick}
                  />
                }
              >
                <ProductDetails productDetails={item} />
              </Card>
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
