// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";

// it("renders without crashing", () => {
//   const div = document.createElement("div");
//   ReactDOM.render(<App />, div);
// });

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { filterEmoji } from "./filterEmoji.js";

import App from "./App.js";

describe("emoji test", () => {
  let title;

  beforeEach(() => {
    render(<App />);

    title = screen.getByText(/Emoji Search/i);
  });

  test("is there title", () => {
    expect(title).toBeInTheDocument();
  });

  test("is there emoji list", () => {
    // const emoji = screen.getByText(/100/i);
    // expect(emoji).toBeInTheDocument();
    const { queryByTestId } = render(<App />);
    expect(queryByTestId("component-emoji-result-row"));
  });

  test("check filter", () => {
    const input = screen.getByLabelText("Search");
    const emojiFilt = "Grin";
    userEvent.type(input, emojiFilt);
    expect(screen.getByText(emojiFilt)).toBeInTheDocument();
  });

  test("click emoji", () => {
    const emoji = screen.getByText(/100/i);
    userEvent.click(emoji);
  });
});
