import React , {useState} from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.css";

const Login = () =>{
    const [username ,  setUsername ] = useState("");
    const [password , setPassword] = useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value)
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    // login function 
    function loginSubmit(event) {
        if(username !== "" && password !== ""){
        localStorage.setItem("username",username);
        localStorage.setItem("password",password);
        localStorage.removeItem("error");
        }else
        {
        localStorage.setItem("error","Please input your username and password");
        }
    }

    return (
        <div className="Login">
            <Form onSubmit={loginSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" value={username}  onChange={handleUsername}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={password} onChange={handlePassword}/>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </div>
    )
}

export default Login;