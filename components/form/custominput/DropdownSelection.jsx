import { useState } from 'react';
import PropTypes from 'prop-types';

import { Field } from "formik";

export default function DropdownSelection({title, fieldName, data, className}){

    console.log(title, fieldName, data, className);
    return (
        <>
        </>
    )
}

DropdownSelection.propTypes = {
    title: PropTypes.string.isRequired,
    fieldName: PropTypes.string.isRequired,
    data: PropTypes.array,
    className: PropTypes.string,

}