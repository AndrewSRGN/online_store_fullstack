import React from 'react';
import Form from "react-bootstrap/Form";

const GivenNameField = ({id, name = "firstName", values, setValues, label, ...props}) => {

    const handleChange = (e) => {
        setValues({
            ...values,
            [name]: e.target.value
        })
    }

    return (
        <Form.Group className={"col-md-6 mb-3"}>
            <Form.Label htmlFor={props.id}>
                {props.label || "First Name"}
            </Form.Label>
            <Form.Control
                id={props.id || "first-name-input"}
                type={props.type || "text"}
                name={name}
                autoComplete={props.autoComplete || "given-name"}
                value = {values[name]}
                onChange = {handleChange}
                {...props}
            />
        </Form.Group>
    );
};

export default GivenNameField;