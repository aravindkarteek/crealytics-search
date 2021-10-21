import React from "react";
import {
  render,
  fireEvent,
  waitForElement,
  getByPlaceholderText,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchInput from "../SearchInput";

describe("<TableView.js />", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });
  const props = {
    searchText: "",
    handleSearchText: jest.fn(),
    filteredData: [
      {
        title: "Weekday THURSDAY Jeans Slim Fit black",
        gtin: "2001007926858",
        gender: "female",
        salePrice: 39.95,
        price: 39.95,
      },
      {
        title: "KIOMI Uhr navy",
        gtin: "4054789817584",
        gender: "female",
        salePrice: 14.95,
        price: 29.95,
      },
    ],
  };
  it("should render search input", () => {
    const { container, unmount } = render(<SearchInput {...props} />);
    const searchInput = container.querySelector(".auto-complete");
    expect(searchInput).toBeInTheDocument();
    unmount();
  });

  it("should show options on search", () => {
    const { container, unmount } = render(<SearchInput {...props} />);
    const searchInput = getByPlaceholderText(container, "Enter product title");
    fireEvent.keyUp(searchInput, { target: { value: "week" } });
    expect(props.handleSearchText).toHaveBeenCalled();
    unmount();
  });
});
