import { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Field } from "formik";

import useKeypress from "../../../hooks/useKeyPress";
import useOnClickOutside from "../../../hooks/useClickOutside";

/**
 * @param {string} title, @param {string} fieldName, @param {array} data, @param {string} className
 * @returns Dropdown single choice selection
 */

export default function DropdownSelection({
    title,
    fieldName,
    data,
    className,
  }) {
    const [isOpen, setIsOpen] = useState();
    // ref required for useOnClickOutside hook
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
        <div className="relative" ref={ref}>
          {/* Dropdown button */}
          <button
            className={`${className} inline-flex items-center justify-between font-bold`}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="dropdownButton"
          >
            {title}
            <img src="/branding/icon-arrow.svg" alt="open menu" className={`${isOpen && "transform rotate-180"} transition-all ease-in-out`} />
          </button>
          {/* Dropdown selection */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } w-full absolute top-15 bg-white z-50 divide-y divide-gray-100 grid border-2 border-t-0 border-lightblue rounded-b-md`}
          >
            {data && data.map((option, idx) => (
              <label
                htmlFor={option}
                className="bg-transparent w-full p-2 relative z-8 input-container hover:bg-lightblue "
                key={idx}
              >
                {option}
                <Field
                  type="checkbox"
                  value={option}
                  name={fieldName}
                  className="opacity-0 absolute left-0 bottom-0 h-full w-full cursor-pointer z-10"
                  data-testid={`dropdownField${idx}`}
                />
                {/* span classname gives blue background when checked */}
                <span className="checkbox mix-blend-darken" />
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
