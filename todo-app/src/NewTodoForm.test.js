import React from "react";
import { render } from "@testing-library/react";
import NewTodoForm from "./NewTodoForm";

it("renders without crashing", function() {
  render(<NewTodoForm addToDo={() => {}} />);
}); 

it("matches snapshot", function() {
    const { asFragment } = render(<NewTodoForm addToDo={() => {}} />);
    expect(asFragment()).toMatchSnapshot();
  });