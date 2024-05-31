import React, { useRef } from 'react';
import { InputGroup, Form } from "react-bootstrap";
import { IMaskInput } from 'react-imask';

/**
 * Custom form field
 * @param formId {string} - The id of the form.
 * @param name {string} - The name of the input field.
 * @param values {object} - The values of the input field.
 * @param setValues {function} - The function to set the values of the input field.
 * @param label {string} - The label of the input field.
 * @param size { number | string} - The size of the input field.
 * @param onAccept {function} - The function to accept the value of the input field.
 * @param mask {RegExp} - The mask of the input field.
 * @param bottomFormGroupChildren {Element} - The bottom form group children.
 * @param bottomInputGroupChildren {Element} - The bottom input group children.
 * @param topFormGroupChildren {Element} - The top form group children.
 * @param topInputGroupChildren {Element} - The top input group children.
 * @param props
 * @return {Element} - The form field.
 * @constructor
 */
const FormField = ({formId, name, values, setValues, label, size, onAccept, mask = /^.*$/,
                       topFormGroupChildren, topInputGroupChildren,
                       bottomFormGroupChildren, bottomInputGroupChildren , ...props}) => {
    const inputRef = useRef(null);

    const id = formId ? formId + "-" + name : name + "-input";

    const handleAccept = (value, mask) => {
        setValues({...values, [name]: value});
        {onAccept && onAccept(value, mask)}
    }

    return (
        <Form.Group className={`col-md-${size || 12} mb-3`}>
            {label && <Form.Label htmlFor={id}>{label}</Form.Label>}
            {topFormGroupChildren}
            <InputGroup>
                {topInputGroupChildren}
                <IMaskInput
                    value={values[name]}
                    id={id}
                    type={"text"}
                    onAccept={handleAccept}
                    className={(props.className ? "form-control" + props.className : " form-control")}
                    mask={mask}
                    ref={inputRef}
                    {...props}
                    onChange={undefined}
                />
                {bottomInputGroupChildren}
            </InputGroup>
            {bottomFormGroupChildren}
        </Form.Group>
    );
};

export default FormField;