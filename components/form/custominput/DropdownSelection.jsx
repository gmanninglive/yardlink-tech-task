import { useState } from 'react';
import PropTypes from 'prop-types';

import { Field } from "formik";

export default function DropdownSelection({title, fieldName, data, className}){

    const [isOpen, setIsOpen] = useState();

    return (
        <>
        <div className="relative">
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
              className={`w-full p-2 relative z-8`}
              key={idx}
            >
              {option}
              <Field
                type="checkbox"
                value={option}
                name={fieldName}
                className="opacity-0 absolute left-0 bottom-0 h-full w-full cursor-pointer z-10"
              />
            </label>
          ))}
        </div>
      </div>
        </>
    )
}

DropdownSelection.propTypes = {
    title: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    data: PropTypes.array,
    className: PropTypes.string,

}