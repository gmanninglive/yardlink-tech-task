import { useState, useRef } from "react";
import PropTypes from "prop-types";
import useKeypress from "../../../hooks/useKeyPress";
import useOnClickOutside from "../../../hooks/useClickOutside";

import { Field } from "formik";

export default function DropdownSelection({
  title,
  fieldName,
  data,
  className,
}) {
  const [isOpen, setIsOpen] = useState();
  const ref = useRef();

  // Hooks to close dropdown menu when escape key pressed or user clicks outside menu items
  useKeypress("Escape", () => {
    setIsOpen(false);
  });
  useOnClickOutside(ref, () => {
    setIsOpen(false);
  });

  return (
    <>
      <div className="relative dropdown-container" ref={ref}>
        <button
          className={`${className} inline-flex items-center`}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {title}
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full absolute top-15 bg-white z-50 divide-y grid`}
        >
          {data.map((option, idx) => (
            <label
              htmlFor={option}
              className="w-full p-2 relative z-8 input-container"
              key={idx}
            >
              {option}
              <Field
                type="checkbox"
                value={option}
                name={fieldName}
                className="opacity-0 absolute left-0 bottom-0 h-full w-full cursor-pointer z-10"
              />
              <span className="checkbox" />
            </label>
          ))}
        </div>
      </div>
    </>
  );
}

DropdownSelection.propTypes = {
  title: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  data: PropTypes.array,
  className: PropTypes.string,
};
