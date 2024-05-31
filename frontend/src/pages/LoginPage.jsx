import React, {useState} from 'react';
import { Button, Card, Container, Form, Row} from "react-bootstrap";
import {REGISTRATION_ROUTE} from "../utils/consts";
import {NavLink} from "react-router-dom";
import EmailField from "../components/Form/Fields/EmailField";
import PasswordField from "../components/Form/Fields/PasswordField";

const LoginPage = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
        rememberMe: false
    })

    return (
        <Container className={"d-flex justify-content-center align-items-center vh-100"}>
            <Card className={"p-3"}>
                <Form className={"d-flex flex-column"}>
                    <EmailField values={values} setValues={setValues} size={"12"}/>
                    <PasswordField values={values} setValues={setValues} size={"12"}/>
                    <Form.Check
                        className={"mb-3"}
                        type={"checkbox"}
                        label={"Remember me"}
                    />
                    <Form.Group className={"d-flex align-items-center gap-5"}>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Form.Text className="text-muted">
                            Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Registration</NavLink>
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Card>

        </Container>
    );
};

export default LoginPage;