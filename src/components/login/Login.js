import React, { useState } from 'react'
import AuthenticationService from '../../services/authService/AuthenticationService'
import history from '../history'
import { Form } from 'react-bootstrap'
import './Login.css'

export default function Login() {

    const [username, setUsername] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')

    const loginHandler = async (event) => {
        event.preventDefault();
        let loginRequest={
            username:username,
            password:password
        }

     await   AuthenticationService.login(loginRequest).then(
            () => {
                console.log(JSON.parse(localStorage.getItem('user')))
                history.push('/login-ok')
            }, error => {
                setError(JSON.stringify(error))
                setTimeout(() => { alert("Login Failed\n" + error.response.data.response) }, 0.5)
                console.log(error)
            }
        )

    }



    return (
        <div className='login-container'>
            <Form onSubmit={loginHandler}>


                <div className="wrapper">
                    <div className="logo">
                        <img src="https://www.freepnglogos.com/uploads/motor-png/motor-scooter-icon-noto-emoji-travel-places-iconset-18.png" alt="scooter-login-icon" />
                    </div>
                    <div className="text-center mt-4 name"> Delivery Manager  </div>
                   
                        <div className="form-field d-flex align-items-center">
                            <span className="far fa-user"></span>
                            <input type="text" name="userName" id="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="form-field d-flex align-items-center">
                            <span className="fas fa-key"></span>
                            <input type="password" name="password" id="pwd" placeholder="Password" value={password} onChange={e => setpassword(e.target.value)} /> </div>
                        <button className="btn mt-3" >Login</button>
                    
                    <div className="text-center fs-6">
                        <a href="#">Forget password?</a> or <a href="#">Sign up</a> </div>
                </div>

            </Form>
        </div>


    )
}
