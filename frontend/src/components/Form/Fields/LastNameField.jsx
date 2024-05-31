import React from 'react';
import Form from "react-bootstrap/Form";

const GivenNameField = ({id, name = "lastName", values, setValues, label, ...props}) => {

    const handleChange = (e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    }

    return (
        <Form.Group className={"col-md-6 mb-3"}>
            <Form.Label htmlFor={props.id}>
                {props.label || "Last Name"}
            </Form.Label>
            <Form.Control
                id={props.id || "last-name-input"}
                type={props.type || "text"}
                name={name}
                autoComplete={props.autoComplete || "family-name"}
                value = {values[name]}
                onChange = {handleChange}
                {...props}
            />
        </Form.Group>
    );
};

export default GivenNameField;