import React from 'react';
import FormField from "./FormField";


const LastNameField = ({formId, name = "lastName", values, setValues, label, ...props}) => {

    return <FormField formId={formId}
                      name={name}
                      values={values}
                      setValues={setValues}
                      label={label || "Last Name"}
                      size={"6"}
                      autoComplete={"family-name"}
                      {...props} />
};

export default LastNameField;