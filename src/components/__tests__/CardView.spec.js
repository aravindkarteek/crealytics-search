import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CardView from "../CardView";

describe("<CardView.js />", () => {
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
  it("should render card view", () => {
    const { container, unmount } = render(<CardView {...props} />);
    const mobileView = container.querySelector(".mobile-view");
    expect(mobileView).toBeInTheDocument();
    unmount();
  });

  it("should call handleProductClick on click of product", () => {
    const { container, unmount } = render(<CardView {...props} />);
    const button = container.querySelector(".gtin-2001007926858");
    fireEvent.click(button);
    expect(props.handleProductClick).toHaveBeenCalledTimes(1);
    unmount();
  });
});
