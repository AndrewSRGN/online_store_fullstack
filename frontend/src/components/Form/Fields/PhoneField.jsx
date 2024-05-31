import React, {useRef, useState} from 'react';
import Form from "react-bootstrap/Form";
import {InputGroup} from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";

import { IMaskInput } from 'react-imask';
import {getTelMask} from "../../../utils/mask/getTelMask";
const flagsImg = "../../static/flags/";

/**
 * @param id {string} - The id of the input field.
 * @param name {string} - The name of the input field.
 * @param values {object} - The values of the input field.
 * @param setValues {function} - The function to set the values of the input field.
 * @param label {string} - The label of the input field.
 * @param props {object} - The props of the input field.
 */

const PhoneField = ({id, name = "phoneNumber", values, setValues, label, ...props}) => {
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState(flagsImg + "unknown.webp");
    const [mask, setMask] = useState(getTelMask(null));
    const [countryName, setCountryName] = useState("unknown");

    const handleAccept = (value, mask) => {
        setValues({...values, [name]: value})

        const newMask = getTelMask(value);
        mask.mask = newMask.mask;
        setCountryName(newMask.countryName);
        setImageUrl(flagsImg + newMask.image);
        setMask(mask);
        mask.updateValue();
    }

    return (
        <Form.Group className={"col-md-6 mb-3"}>
            <Form.Label htmlFor={id}>{label || "Phone number"}</Form.Label>
            <InputGroup>
                <InputGroupText>
                    <img src={imageUrl} alt={countryName + "'s flag"} />
                </InputGroupText>
                <IMaskInput
                    mask={mask.mask}
                    value={values[name]}
                    id={id || "tel-input"}
                    type={props.type || "tel"}
                    name={name}
                    autoComplete={props.autoComplete || "tel"}
                    onAccept={handleAccept}
                    onChange={undefined}
                    className={(props.className ? "form-control" + props.className : " form-control")}
                    ref={inputRef}
                    {...props}
                />
            </InputGroup>
        </Form.Group>
    );
};

export default PhoneField;