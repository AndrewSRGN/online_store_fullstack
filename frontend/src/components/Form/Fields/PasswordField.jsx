import React, {useState} from 'react';
import { Form } from "react-bootstrap";
import FormField from "./FormField";


const PasswordField = ({formId, name = "password", values, setValues, label, ...props}) => {
    const [type, setType] = useState("password");

    const handleCheckboxChange = (event) => {
        setType(event.target.checked ? "text" : "password");
    }

    const bottomFormGroupChildren = (
            <Form.Check className={"d-flex align-items-center"}
                        type="checkbox"
                        label="Show password"
                        onChange={handleCheckboxChange}
            />
    );

    return <FormField formId={formId}
                      name={name}
                      values={values}
                      setValues={setValues}
                      label={label || "Password"}
                      size={"6"}
                      autoComplete={"current-password"}
                      type={type}
                      bottomFormGroupChildren={bottomFormGroupChildren}
                      {...props} />
};

export default PasswordField;