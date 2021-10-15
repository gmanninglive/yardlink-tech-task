import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { fireEvent } from "@testing-library/dom";
import { Formik } from "formik";

import DropdownSingle from "../DropdownSingle";

afterEach(cleanup);


it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Formik><DropdownSingle title="TEST 1" fieldName="TEST 1"></DropdownSingle></Formik>, div);
});

it("Renders Dropdown button correctly with title", () => {
  const { getByTestId } = render(<Formik><DropdownSingle title="This is a Test Title!" fieldName="TEST 2" ></DropdownSingle></Formik>);
  expect(getByTestId("dropdownSingleButton")).toHaveTextContent("This is a Test Title!");
});

it("Opens DropdownSingle", () => {
  const { getByTestId } = render(
    <Formik><DropdownSingle title="This is a Test Title!" fieldName="This is a Test Field" data={["Test Value"]}></DropdownSingle></Formik>
  );
  fireEvent.click(getByTestId("dropdownSingleButton"));
  
  expect(getByTestId("dropdownSingleField0")).toBeInTheDocument();
  expect(getByTestId("dropdownSingleField0")).toHaveAttribute("type", "radio");
});

it("Opens DropdownSingle checks Field is displayed correctly", () => {
    const { getByTestId } = render(
      <Formik><DropdownSingle title="This is a Test Title!" fieldName="This is a Test Field" data={["Test Value"]}></DropdownSingle></Formik>
    );
    fireEvent.click(getByTestId("dropdownSingleButton"));
    
    expect(getByTestId("dropdownSingleField0")).toBeInTheDocument();
    expect(getByTestId("dropdownSingleField0")).toHaveAttribute("type", "radio");
    expect(getByTestId("dropdownSingleField0")).toHaveAttribute("value", "Test Value");
  });

it("Matches snapshot", () => {
  const tree = renderer.create(<Formik><DropdownSingle title="This is a Test Title!" fieldName="This is a Test Field" data={["Test Value"]} className="test-classname"></DropdownSingle></Formik>).toJSON();
  expect(tree).toMatchSnapshot();
});