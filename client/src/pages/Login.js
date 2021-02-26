import React, { useState } from 'react'
import { Link, useHistory } from "react-router-dom";
import fire from '../firebase.js';

import { Alert, Button, Col, Container, Form } from "react-bootstrap"



export default function login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [showpassword, setShowPassword] = useState(false);
    const history = useHistory()
    const [message, setMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setLoading(true)
            setMessage("Welcome to AidExchange")
            await fire.auth().signInWithEmailAndPassword(email, password)
            history.push("/")
        } catch {
            setError("Password or email incorrect.")
        }

        setLoading(false)
    }

    function togglePasswordVisiblity(e) {
        e.preventDefault()
        setShowPassword(showpassword => !showpassword)
        console.log(showpassword)
    }

    return (
        <>
            <Container className="d-flex justify-content-center">
                <Col sm md='auto' lg xl='6' className="align-items-center my-4 p-5 bg-light rounded">

                    <h1 className="text-center mb-4">Sign In</h1>
                    {message && <Alert variant="success">{message} </Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form className="login text-center" onSubmit={handleSubmit}>
                        <Form.Group >

                            <Form.Control type="text" name="username" onChange={({ target }) => setEmail(target.value)} placeholder="Email" />
                        </Form.Group>
                        <Form.Group >

                            <Form.Control type={showpassword ? "text" : "password"} name="password" onChange={({ target }) => setPassword(target.value)} placeholder="Password" />
                            <i className={`fa ${showpassword ? "fa-eye-slash" : "fa-eye"}  password-icon`} onClick={togglePasswordVisiblity} />
                        </Form.Group>
                        <Button type="submit" className=" justify-content-center" disabled={loading} >Login</Button>

                    </Form>
                    <div className="text-center mt-3"><Link to="/ForgotPassword">Forgot Password?</Link></div>
                    <div className="text-center mt-3">
                        <p>Not a user?
                    Create an account <Link to="/Signup">here.</Link>
                        </p>
                    </div>
                </Col>
            </Container >
        </>
    )
}
