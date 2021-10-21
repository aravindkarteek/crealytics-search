import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("<App.js />", () => {
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
  it("should render the app with search bar and table view", () => {
    const { container, unmount } = render(<App />);
    const title = container.querySelector(".search-title");
    const desktopView = container.querySelector(".desktop-view");
    expect(title).toBeInTheDocument();
    expect(desktopView).toBeInTheDocument();
    Object.assign(window, { innerWidth: 500 });
    const mobileView = container.querySelector(".mobile-view");
    expect(mobileView).toBeInTheDocument();
    unmount();
  });
});
