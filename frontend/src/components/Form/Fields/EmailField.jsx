import React, { useRef, useState } from 'react';
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";

import { IMaskInput } from 'react-imask';
import { EMAIL_MASK } from "../../../utils/consts";

const EmailField = ({id, name = "email", values, setValues, label, ...props}) => {
    const inputRef = useRef(null);
    const [mask, setMask] = useState(EMAIL_MASK);

    const handleAccept = (value, mask) => {
        setValues({...values, [name]: value})
    }

    return (
        <Form.Group className={"col-md-6 mb-3"}>
            <Form.Label htmlFor={id}>{label || "Email"}</Form.Label>
            <InputGroup>
                <IMaskInput
                    mask={mask}
                    value={values[name]}
                    id={id || "email-input"}
                    type={props.type || "text"}
                    name={name}
                    autoComplete={props.autoComplete || "email"}
                    onAccept={handleAccept}
                    className={(props.className ? "form-control" + props.className : " form-control")}
                    ref={inputRef}
                    {...props}
                    onChange={undefined}
                />
            </InputGroup>
        </Form.Group>
    );
};

export default EmailField;