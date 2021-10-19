import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import TableInput from "./components/TableView";
import { Typography } from "antd";
import { csv } from "d3-fetch";
import csvData from "./assets/products.csv";
import "antd/dist/antd.css";
import "./App.css";

const { Title } = Typography;

function App() {
  const [productData, setProductData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    parseData();
  }, []);

  const parseData = async () => {
    const parsedData = await csv(
      csvData,
      ({
        title,
        gtin,
        gender,
        sale_price,
        price,
        image_link,
        additional_image_link,
      }) => {
        return {
          title: title,
          gtin: gtin,
          gender: gender === "male" || gender === "female" ? gender : "unisex",
          salePrice: +sale_price.split(" ")[0],
          price: +price.split(" ")[0],
          imageLink: image_link,
          additionalLinks: additional_image_link,
        };
      }
    );
    setProductData([...parsedData]);
  };

  return (
    <div className="container-fluid p-5">
      <Title className="mb-5">Crealytics Search</Title>
      <SearchInput searchText={searchText} setSearchText={setSearchText} />
      <TableInput productData={productData} />
    </div>
  );
}

export default App;
