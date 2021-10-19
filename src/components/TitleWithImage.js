import React from "react";
import { Avatar, Button, Typography } from "antd";

const { Title } = Typography;

const TitleWithImage = ({ text, row, isLink = false, handleProductClick }) => {
  return (
    <div className="d-flex align-items-center">
      <Avatar
        className="product-thumbnail"
        src={row.imageLink}
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
        <Title level={5} className="ms-3">
          {text}
        </Title>
      )}
    </div>
  );
};

export default TitleWithImage;
