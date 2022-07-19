import React from "react"
import './LoginPage.css'
// import { useState, useEffect } from "react";
import LocalInput from "../../components/input/Input";
import LocalForm from "../../components/form/Form";
import LocalButton from "../../components/button/Button";
import LocalDiv from "../../components/Div/Div";
import LocalH1 from "../../components/headingTag/H1";
// import { Redirect } from "react-router";

function LoginPage(props) {
    // var [isAuthenticated, SetisAuthenticated] = useState(false)
    // var [UserAuth, SetUserAuth] = useState(null)
    function CheckUser(e) {
        e.preventDefault()
        var userName = e.target.userName.value
        var email = e.target.email.value

        // SetisAuthenticated(true)
        const url = `https://jsonplaceholder.typicode.com/users?email=${email}&username=${userName}`
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                // SetUserAuth(json)
                // console.log(json)
                return json;
            })
            .then((json) => {
                if(json.length === 0 ){ alert("Invalid Credentials") }
                else{
                    console.log('LoginSucessful')
                    sessionStorage.setItem('email',json[0].email)
                    sessionStorage.setItem('userName',json[0].username)
                    // sessionStorage.setItem('userName',json[0].username)
                    props.SetisAuthenticated(true)
                
                }
            })
    }

    return (
    <LocalDiv className='login'>
        <LocalH1>LogIn</LocalH1>
        <LocalForm onSubmit={CheckUser}>
            <label>Email address</label><br />
            <LocalInput type="email" placeholder="Enter email" name='email' /><br />
            <small>
                We'll never share your email with anyone else.
            </small><br />

            <label>User Name</label><br />
            <LocalInput type="text" placeholder="User Name" name='userName' /><br />
            <LocalButton className="btn btn-primary mt-2" type="submit">Submit</LocalButton>


        </LocalForm>


    </LocalDiv>

    )
}
export default LoginPage