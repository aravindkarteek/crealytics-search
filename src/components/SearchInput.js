import React, { useEffect, useState } from "react";
import { Input, AutoComplete } from "antd";

const { Search } = Input;

const SearchInput = ({ searchText, handleSearchText, filteredData }) => {
  const [optionsData, setOptionsData] = useState([]);
  useEffect(() => {
    // Logic to filter unique titles to show as options for auto complete
    const uniqueTitles = new Set([...filteredData.map(({ title }) => title)]);
    setOptionsData(() => [...uniqueTitles].map((title) => ({ value: title })));
  }, [filteredData]);
  return (
    <AutoComplete
      className="auto-complete"
      autoFocus
      options={searchText ? optionsData : []}
    >
      <Search
        id="search-product"
        value={searchText}
        onKeyUp={(e) => handleSearchText(e.target.value)}
        size="large"
        enterButton="Search products"
        placeholder="Enter product title"
        allowClear
      />
    </AutoComplete>
  );
};

export default SearchInput;
