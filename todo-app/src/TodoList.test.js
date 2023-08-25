import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ToDoList from "./TodoList";

it("renders without crashing", function() {
  render(<ToDoList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<ToDoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("adds a new item", function() {
    const { getByLabelText, getByText, queryByText } = render(<ToDoList />);
  
    // Check if initial item is not present
    expect(queryByText("Initial Item")).toBeNull();
  
    // Get the input field and add a new item
    const inputField = getByLabelText("ToDo:");
    fireEvent.change(inputField, { target: { value: "New Item" } });
  
    // Submit the form
    const addButton = getByText("Add a new item!");
    fireEvent.click(addButton);
  
    // Check if the new item is added to the list
    expect(queryByText("New Item")).toBeInTheDocument();
  });

  
it("deletes an item", function() {
    const { getByLabelText, getByText, queryByText } = render(<ToDoList />);
  
    // Add a new item
    const inputField = getByLabelText("ToDo:");
    fireEvent.change(inputField, { target: { value: "New Item" } });
    const addButton = getByText("Add a new item!");
    fireEvent.click(addButton);
  
    // Check if the new item is added to the list
    expect(queryByText("New Item")).toBeInTheDocument();
  
    // Delete the added item
    const deleteButton = getByText("X");
    fireEvent.click(deleteButton);
  
    // Check if the deleted item is no longer in the list
    expect(queryByText("New Item")).toBeNull();
  });
  
  
  
