import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "./features/store";
import React from "react";
import App from "./App";

describe("Testing for App.jsx", () => {
  const renderStore = () =>
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

  it("render headline in App.jsx", () => {
    renderStore();
    const element = screen.getByRole("heading");
    expect(element).toBeInTheDocument();
  });
});