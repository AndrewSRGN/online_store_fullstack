import React from 'react';
import { EMAIL_MASK } from "../../../utils/consts";
import FormField from "./FormField";

const EmailField = ({formId, name = "email", values, setValues, label, ...props}) => {
    return <FormField formId={formId}
                      name={name}
                      values={values}
                      setValues={setValues}
                      label={label || "Email"}
                      size={"6"}
                      mask={EMAIL_MASK}
                      autoComplete={"email"}
                      {...props} />

};

export default EmailField;