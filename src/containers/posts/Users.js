import { Link } from "react-router-dom"
import React, { useState, useEffect } from "react";
import LocalContainer from "../../components/container/LocalContainer";
import LocalButton from "../../components/button/Button";
import LocalForm from "../../components/form/Form";
import Logout from "../../Actions/Logut";
// import { Container } from "react-bootstrap";
// import React, { useState, useEffect } from "react";
function Users(props) {


    var [UsersData, setState] = useState(["...Loading"])
    // var [UsersPost, setUsersPost] = useState(["...Loading"])


    const fetchUsers = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/')
            let Users = await response.json()
            setState(Users)
            // console.log("inside try")
        }
        catch (error) {

        }

    }
    useEffect(() => {
        fetchUsers()

    }, [])
    // function logout() {
    //     console.log("logout")
    //     sessionStorage.removeItem('isAuthenticated')
    //     sessionStorage.removeItem('userName')
    //     sessionStorage.removeItem('email')

    // }

    // const { UsersData } = props

    var dataTable = UsersData.map((val, ind) => {

        return <tr key={ind}>
            <td>{UsersData[ind].id}</td>
            <td>{UsersData[ind].name}</td>
            <td id={ind + 1} ><Link to={`/post/${UsersData[ind].id}/${UsersData[ind].username}`} style={{ textDecoration: 'none' }}>{UsersData[ind].username}</Link></td>
            <td>{UsersData[ind].email}</td>
        </tr>
    })
    return (
        <LocalContainer>
            <table className="table table-striped">
                <thead><tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        User_Name
                    </th>
                    <th>
                        Email
                    </th>
                </tr></thead>
                <tbody>

                    {dataTable}

                </tbody>
            </table>
            <Logout />
        </LocalContainer>
    )
}
export default Users;