import React from 'react';
import FormField from "./FormField";

const BDayField = ({formId, name = "gender", values, setValues, label, ...props}) => {
    return <FormField formId={formId}
                      name={name}
                      values={values}
                      setValues={setValues}
                      type={"date"}
                      label={label || "Date of Birth"}
                      size={"6"}
                      autoComplete={"bday"}
                      {...props} />
};

export default BDayField;