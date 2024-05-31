import React, {useRef, useState} from 'react';
import {Form, InputGroup} from "react-bootstrap";
import InputGroupText from "react-bootstrap/InputGroupText";
import { IMaskInput } from 'react-imask';

import {getTelMask} from "../../../utils/mask/getTelMask";
const flagsImg = "../../static/flags/";


const PhoneField = ({formId, name = "phoneNumber", values, setValues, ...props}) => {
    const inputRef = useRef(null);
    const [imageUrl, setImageUrl] = useState(flagsImg + "unknown.webp");
    const [mask, setMask] = useState(getTelMask(null));
    const [countryName, setCountryName] = useState("unknown");

    const id = formId ? formId + "-" + name : name + "-input";

    const handleAccept = (value, mask) => {
        setValues({...values, [name]: value});
        const newMask = getTelMask(value);
        mask.mask = newMask.mask;
        setCountryName(newMask.countryName);
        setImageUrl(flagsImg + newMask.image);
        setMask(mask);
        mask.updateValue();

        // or
        // mask.updateOptions({
        //     // while changing mask only same type allowed
        //     mask: /^\w+$/,  // ok
        //     // mask: "0000",  // ERROR! changing mask type on existing mask is not allowed!
        //     // ... other options
        // });
    }

    return (
        <Form.Group className={"col-md-6 mb-3"}>
            <Form.Label htmlFor={id}>{props.label || "Phone number"}</Form.Label>
            <InputGroup>
                <InputGroupText>
                    <img src={imageUrl} alt={countryName + "'s flag"} />
                </InputGroupText>
                <IMaskInput
                    mask={mask.mask}
                    value={values[name]}
                    id={id}
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