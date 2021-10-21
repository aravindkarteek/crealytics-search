import React from "react";
import { Table } from "antd";
import { addEuroSymbol, pagination } from "../utils/utils";
import AdditionalImagesDrawer from "./AdditionalImagesDrawer";
import TitleWithImage from "./TitleWithImage";

const TableView = ({
  productData,
  productToView,
  showAdditionalImages,
  setShowAdditionalImages,
  handleProductClick,
}) => {
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
      filters: [
        { text: "On Discount", value: "onDiscount" },
        { text: "No Discount", value: "noDiscount" },
      ],
      onFilter: (value, record) => {
        if (value === "onDiscount") {
          return record.salePrice < record.price;
        }
        if (value === "noDiscount") {
          return record.salePrice >= record.price;
        }
      },
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
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
        { text: "Unisex", value: "unisex" },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
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

  return (
    <>
      <Table
        className="desktop-view mt-5"
        columns={columns}
        dataSource={productData}
        pagination={pagination}
        loading={!productData.length}
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
