import React from 'react';
import FormField from "./FormField";

const FirstNameField = ({formId, name = "firstName", values, setValues, label, ...props}) => {

    return <FormField formId={formId}
                      name={name}
                      values={values}
                      setValues={setValues}
                      label={label || "First Name"}
                      size={"6"}
                      autoComplete={"given-name"}
                      {...props} />
};

export default FirstNameField;