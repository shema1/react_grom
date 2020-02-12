import React from "react";
import { shallow } from "enzyme";
import TodoList from "../TodoList.jsx.js";
import { fetchTasksList } from "../taskGateway";

jest.mock("../taskGateway", () => {
  return {
    createTask: jest.fn(),
    fetchTasksList: jest.fn(()=>Promise.resolve([])),
    updateTask: jest.fn(),
    deleteTask: jest.fn()
  };
});
describe("<TodoList/>", () => {
  it("should request tasks list", () => {
    shallow(<TodoList />);
    expect( fetchTasksList).toBeCalled();
  });

});
