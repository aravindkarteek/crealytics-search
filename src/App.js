import React, { useEffect, useState } from "react";
import SearchInput from "./components/SearchInput";
import TableInput from "./components/TableView";
import CardView from "./components/CardView";
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
  const [typingTimer, setTypingTimer] = useState(null);
  const [showAdditionalImages, setShowAdditionalImages] = useState(false);
  const [productToView, setProductToView] = useState({});

  useEffect(() => {
    // Parse products.csv from assets folder on initial render
    parseData();
  }, []);

  const handleProductClick = (rowData) => {
    setShowAdditionalImages(true);
    setProductToView({ ...rowData });
  };

  const handleSearchText = (value) => {
    // Clearing debounce
    if (typingTimer) {
      clearTimeout(typingTimer);
      setTypingTimer(null);
    }
    setSearchText(value);
    // Adding debounce
    setTypingTimer(() =>
      setTimeout(() => {
        setFilteredData(() =>
          productData.filter(({ title }) => {
            // Logic to search
            // First converting all titles to lower case excluding special symbols to extract naked text
            // Performing the same with search string and matching both
            const nakedTitle = title.replace(/[^a-zA-Z]/g, "").toLowerCase();
            const nakedSearchValue = value
              .replace(/[^a-zA-Z]/g, "")
              .toLowerCase();
            return nakedTitle.includes(nakedSearchValue);
          })
        );
      }, 600)
    );
  };

  const parseData = async () => {
    // Logic to parse data and convert into object as needed
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

  const viewProps = {
    productData: !searchText ? productData : filteredData,
    productToView,
    showAdditionalImages,
    setShowAdditionalImages,
    handleProductClick,
  };

  return (
    <div className="container-fluid p-5">
      <Title className="search-title mb-5">Crealytics Search</Title>
      <SearchInput
        searchText={searchText}
        handleSearchText={handleSearchText}
        filteredData={filteredData}
      />
      <TableInput {...viewProps} />
      <CardView {...viewProps} />
    </div>
  );
}

export default App;
