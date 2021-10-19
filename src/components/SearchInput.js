import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchInput = ({ searchText, handleSearchText }) => {
  return (
    <Search
      id="search-product"
      placeholder="Enter product title"
      size="large"
      enterButton="Search product"
      allowClear
      value={searchText}
      onChange={(e) => handleSearchText(e.target.value)}
      onPressEnter={(e) => handleSearchText(e.target.value)}
    />
  );
};

export default SearchInput;
