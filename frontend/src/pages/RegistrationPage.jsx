import React, {useState} from 'react';
import {Card, Container, Form, Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "../utils/consts";
import PhoneField from "../components/Form/Fields/PhoneField";
import FirstNameField from "../components/Form/Fields/FirstNameField";
import LastNameField from "../components/Form/Fields/LastNameField";
import EmailField from "../components/Form/Fields/EmailField";
import PasswordField from "../components/Form/Fields/PasswordField";
import BDayField from "../components/Form/Fields/BDayField";
import GenderSelect from "../components/Form/Fields/GenderSelect";

const RegistrationPage = () => {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        gender: "",
        dateOfBirth: "",
        phoneNumber: "",
        address: {
            street: "",
            apartment: "",
            city: "",
            state: "",
            postalCode: "",
            country: ""
        },
        email: "",
        password: "",
        confirmPassword: "",
        isPasswordVisible: false,
        terms: false,
        field: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values);
    }

    const formId = "registration-form";
    return (
        <Container className={"d-flex justify-content-center align-items-center vh-100"}>
            <Card className={"p-3 w-50"}>
                <Form id={formId}
                      noValidate
                      onSubmit={handleSubmit}>
                    <Row>
                        <FirstNameField values={values} setValues={setValues}/>
                        <LastNameField values={values} setValues={setValues}/>
                    </Row>

                    <Row>
                        <BDayField values={values} setValues={setValues}/>
                        <GenderSelect values={values} setValues={setValues}/>
                    </Row>

                    <Row>
                        <EmailField values={values} setValues={setValues}/>
                    </Row>

                    <Row>
                        <PhoneField formId={formId} values={values} setValues={setValues}/>
                    </Row>

                    <Row>
                        <PasswordField formId={formId} name={"password"} values={values} setValues={setValues}
                                       autoComplete={"new-password"}/>
                        <PasswordField formId={formId} name={"confirmPassword"} values={values} setValues={setValues}
                                       autoComplete={"new-password"} label={"Confirm Password"}/>
                    </Row>

                    <Form.Group className={"d-flex justify-content-between align-items-center"}>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                        <Form.Text className="text-muted">
                            Already have an account? <NavLink to={LOGIN_ROUTE}>Sign In!</NavLink>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card>

        </Container>
    );
};

export default RegistrationPage;