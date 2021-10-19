import React, { useEffect, useState } from "react";
import { Input, AutoComplete } from "antd";

const { Search } = Input;

const SearchInput = ({ searchText, handleSearchText, filteredData }) => {
  const [optionsData, setOptionsData] = useState([]);
  useEffect(() => {
    const uniqueTitles = new Set([...filteredData.map(({ title }) => title)]);
    setOptionsData(() => [...uniqueTitles].map((title) => ({ value: title })));
  }, [filteredData]);
  return (
    <AutoComplete
      className="auto-complete"
      value={searchText}
      autoFocus
      options={searchText ? optionsData : []}
      onChange={(value) => handleSearchText(value)}
    >
      <Search
        id="search-product"
        size="large"
        enterButton="Search products"
        placeholder="Enter product title"
        allowClear
      />
    </AutoComplete>
  );
};

export default SearchInput;
