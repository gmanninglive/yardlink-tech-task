import ReactDOM from "react-dom";
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import { fireEvent } from "@testing-library/dom";
import { Formik } from "formik";

import DropdownSelection from "../DropdownSelection";

afterEach(cleanup);


it("Renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Formik><DropdownSelection title="TEST 1" fieldName="TEST 1"></DropdownSelection></Formik>, div);
});

it("Renders dropdown button correctly with title", () => {
  const { getByTestId } = render(<Formik><DropdownSelection title="This is a Test Title!" fieldName="TEST 2"></DropdownSelection></Formik>);
  expect(getByTestId("dropdownButton")).toHaveTextContent("This is a Test Title!");
});

it("Opens Dropdown", () => {
  const { getByTestId } = render(
    <Formik><DropdownSelection title="This is a Test Title!" fieldName="This is a Test Field" data={["Test Value"]}></DropdownSelection></Formik>
  );
  fireEvent.click(getByTestId("dropdownButton"));
  
  expect(getByTestId("dropdownField0")).toBeInTheDocument();
  expect(getByTestId("dropdownField0")).toHaveAttribute("type", "checkbox");
});

it("Opens Dropdown checks Field is displayed correctly", () => {
    const { getByTestId } = render(
      <Formik><DropdownSelection title="This is a Test Title!" fieldName="This is a Test Field" data={["Test Value"]}></DropdownSelection></Formik>
    );
    fireEvent.click(getByTestId("dropdownButton"));
    
    expect(getByTestId("dropdownField0")).toBeInTheDocument();
    expect(getByTestId("dropdownField0")).toHaveAttribute("type", "checkbox");
    expect(getByTestId("dropdownField0")).toHaveAttribute("value", "Test Value");
  });

it("Matches snapshot", () => {
  const tree = renderer.create(<Formik><DropdownSelection title="This is a Test Title!" fieldName="This is a Test Field" data={["Test Value"]} className="test-classname"></DropdownSelection></Formik>).toJSON();
  expect(tree).toMatchSnapshot();
});