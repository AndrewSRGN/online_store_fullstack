import React from 'react';
import Form from "react-bootstrap/Form";

const GenderSelect = ({formId, name = "dateOfBirth", values, setValues, label, ...props}) => {
    const id = formId ? formId + "-" + name : name + "-input";
    const handleChange = (event) => {
        setValues({...values, [name]: event.target.value});
    }

    return (
        <Form.Group className={"col-md-4"}>
            <Form.Label htmlFor={id}>Gender</Form.Label>
            <Form.Select
                id={id}
                name={name}
                value={values[name]}
                onChange={handleChange}
                {...props}
            >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
            </Form.Select>
        </Form.Group>
    );
};

export default GenderSelect;