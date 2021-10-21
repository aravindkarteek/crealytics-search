import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TableView from "../TableView";

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
    productData: [
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
      {
        title: "Sisley Langarmshirt offwhite",
        gtin: "8031894587706",
        gender: "female",
        salePrice: 19.95,
        price: 19.95,
      },
    ],
    productToView: {},
    showAdditionalImages: false,
    setShowAdditionalImages: jest.fn(),
    handleProductClick: jest.fn(),
  };
  it("should render table view", () => {
    const { container, unmount } = render(<TableView {...props} />);
    const desktopView = container.querySelector(".desktop-view");
    expect(desktopView).toBeInTheDocument();
    unmount();
  });

  it("should call handleProductClick on click of product", () => {
    const { container, unmount } = render(<TableView {...props} />);
    const button = container.querySelector(".gtin-2001007926858");
    fireEvent.click(button);
    expect(props.handleProductClick).toHaveBeenCalledWith({
      title: "Weekday THURSDAY Jeans Slim Fit black",
      gtin: "2001007926858",
      gender: "female",
      salePrice: 39.95,
      price: 39.95,
    });
    unmount();
  });
});
