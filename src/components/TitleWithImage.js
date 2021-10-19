import React from "react";
import { Avatar, Button, Typography, Tag } from "antd";

const { Title } = Typography;

const TitleWithImage = ({ text, row, isLink = false, handleProductClick }) => {
  const { imageLink, price, salePrice } = row;
  return (
    <div className="d-flex align-items-center">
      <Avatar
        className="product-thumbnail"
        src={imageLink}
        alt="No Image"
        size="large"
      />
      {isLink ? (
        <Button
          onClick={() => handleProductClick(row)}
          type="link"
          className="title"
        >
          {text}
        </Button>
      ) : (
        <Title copyable level={5} className="ms-3">
          {text}
        </Title>
      )}
      {salePrice < price ? (
        <Tag className={!isLink ? "ms-3" : ""} color="green">
          On Discount
        </Tag>
      ) : null}
    </div>
  );
};

export default TitleWithImage;
