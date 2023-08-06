import React, { useState } from 'react'
import { Alert, Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';

export default function SignIn() {

    const [err, setError] = useState("");
    const [loading, setLoader] = useState(false);
    const [data, setData] = useState({
        "email": "",
        "password": "",
    })
    let navigate = useNavigate();
    const { email, password } = data;

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        setError("");
    }

    const Login = (e) => {
        setLoader(true)
        e.preventDefault();
        RouteChange();
        setLoader(false)
    }

    const RouteChange = () => {
        let path = `${import.meta.env.BASE_URL}indexpage`;
        navigate(path);
    }

    return (
        <div>
            <div className="main-container container-fluid">
                <Row className="no-gutter">

                    <Col md={6} lg={6} xl={7} className="d-none d-md-flex bg-primary-transparent">
                        <Row className="wd-100p mx-auto text-center">
                            <Col md={12} lg={12} xl={12} className="my-auto mx-auto wd-100p">
                                logo here
                            </Col>
                        </Row>
                    </Col>

                    <Col md={6} lg={6} xl={5} className="bg-white py-4">
                        <div className="login d-flex align-items-center py-2">

                            <Container className="p-0">
                                <Row>
                                    <Col md={10} lg={10} xl={9} className="mx-auto">
                                        <div className="card-sigin">
                                            <div className="mb-5 d-flex">
                                                <h1 className="main-logo1 ms-1 me-0 my-auto tx-28">Max<span>Bodega</span></h1>
                                            </div>
                                            <div className="card-sigin">
                                                <div className="main-signup-header">
                                                    <h2>Bienvenido!</h2>
                                                    <h5 className="fw-semibold mb-4">Ingresar datos de usuario.</h5>
                                                    {err && <Alert variant="danger">{err}</Alert>}
                                                    <Form action="#">
                                                        <Form.Group>
                                                            <Form.Label className="mb-2">Correo</Form.Label>
                                                            <Form.Control className="mb-3" name="email" placeholder="Enter your email" type="text" value={email} onChange={changeHandler} required />{" "}
                                                        </Form.Group>
                                                        <Form.Group>
                                                            <Form.Label className="mb-2">Contraseña</Form.Label>
                                                            <Form.Control className="mb-3" name="password" placeholder="Enter your password" type="password" value={password} onChange={changeHandler} required />{" "}
                                                        </Form.Group>
                                                        <Button className="btn-main-primary btn-block" onClick={Login}>
                                                            Ingresar{loading ? <span role="status" aria-hidden="true" className="spinner-border spinner-border-sm ms-2"></span> : ""}
                                                        </Button>
                                                    </Form>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>

                        </div>
                    </Col>

                </Row>
            </div>
        </div>
    )
}
