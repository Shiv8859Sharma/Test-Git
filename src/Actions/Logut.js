import React from "react"
import LocalButton from "../components/button/Button"
import LocalForm from "../components/form/Form"
function Logout(props) {
    console.log("logout")
    sessionStorage.removeItem('isAuthenticated')
    sessionStorage.removeItem('userName')
    sessionStorage.removeItem('email')




    return (
    <LocalForm >
            <LocalButton type='submit' className="btn btn-primary" >LogOut</LocalButton>
        </LocalForm>
    )
}
export default Logout;