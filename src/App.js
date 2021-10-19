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
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);

  useEffect(() => {
    parseData();
  }, []);

  const handleSearchText = (value) => {
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }
    setSearchText(value);
    setTypingTimeout(() =>
      setTimeout(() => {
        setFilteredData(() =>
          productData.filter(({ title }) => {
            const nakedTitle = title.replace(/[^a-zA-Z]/g, "").toLowerCase();
            const nakedSearchValue = value
              .replace(/[^a-zA-Z]/g, "")
              .toLowerCase();
            return nakedTitle.includes(nakedSearchValue);
          })
        );
      }, 800)
    );
  };

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
      <SearchInput
        searchText={searchText}
        handleSearchText={handleSearchText}
        filteredData={filteredData}
      />
      <TableInput productData={!searchText ? productData : filteredData} />
    </div>
  );
}

export default App;
