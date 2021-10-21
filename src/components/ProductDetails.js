import React from "react";
import { Typography } from "antd";
import { addEuroSymbol } from "../utils/utils";

const { Text, Paragraph } = Typography;

const ProductDetails = ({ productDetails }) => {
  const { gtin, gender, salePrice, price } = productDetails || {};

  const discount = (((price - salePrice) / price) * 100).toFixed(2);

  return (
    <div className="product-details p-3">
      <Paragraph className="d-flex justify-content-between">
        <Text strong>Gtin:</Text>
        <Text copyable className="ms-3">
          {gtin}
        </Text>
      </Paragraph>
      <Paragraph className="d-flex justify-content-between">
        <Text strong>Gender:</Text>
        <Text className="ms-3 gender">{gender}</Text>
      </Paragraph>
      <Paragraph className="d-flex justify-content-between">
        <Text strong>Price:</Text>
        <Text delete className="ms-3">
          {addEuroSymbol(price)}
        </Text>
      </Paragraph>
      <Paragraph className="d-flex justify-content-between">
        <Text strong>Sale price:</Text>
        <Text className="ms-3">{addEuroSymbol(salePrice)}</Text>
      </Paragraph>
      {discount > 0 ? (
        <Paragraph className="d-flex justify-content-between">
          <Text strong>Discount:</Text>
          <Text type="success" strong className="ms-3">
            {discount} %
          </Text>
        </Paragraph>
      ) : null}
    </div>
  );
};

export default ProductDetails;
