import React, { useState } from "react";
import { Table } from "antd";
import { addEuroSymbol } from "../utils/utils";
import AdditionalImagesDrawer from "./AdditionalImagesDrawer";
import TitleWithImage from "./TitleWithImage";

const TableView = ({ productData }) => {
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [productToView, setProductToView] = useState({});

  const handleProductClick = (rowData) => {
    setShowAdditionalImages(true);
    setProductToView(rowData);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, row) => (
        <TitleWithImage
          text={text}
          row={row}
          isLink
          handleProductClick={handleProductClick}
        />
      ),
    },
    {
      title: "Gtin",
      dataIndex: "gtin",
      key: "gtin",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      className: "gender",
      filterMultiple: true,
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
        { text: "Unisex", value: "unisex" },
      ],
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: addEuroSymbol,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "Sale price",
      dataIndex: "salePrice",
      key: "salePrice",
      render: addEuroSymbol,
      sorter: (a, b) => a.salePrice - b.salePrice,
    },
  ];

  const pagination = {
    defaultPageSize: 100,
  };

  return (
    <>
      <Table
        key="product-table"
        className="mt-5"
        columns={columns}
        dataSource={productData}
        pagination={pagination}
      />
      <AdditionalImagesDrawer
        visible={showAdditionalImages}
        onClose={() => setShowAdditionalImages(false)}
        productDetails={productToView}
      />
    </>
  );
};

export default TableView;
