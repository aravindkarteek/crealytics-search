import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchInput = ({ searchText, setSearchText }) => {
  return (
    <Search
      id="search-product"
      placeholder="Enter product title"
      size="large"
      enterButton="Search product"
      allowClear
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      onPressEnter={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchInput;
