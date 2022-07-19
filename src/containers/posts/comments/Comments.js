import React from "react"
// import { useParams } from "react-router";
import { useState, useEffect } from "react";
import LocalDiv from "../../../components/Div/Div";
import LocalH4 from "../../../components/headingTag/H4";
import LocalP from "../../../components/paragraph/P";

function UserComments(props) {

    var { id } = props
    // id++;
    var [UsersComments, setUsersComment] = useState(["...Loading"])
    // var [UsersCommentsid, setUsersCommentid] = useState(commentid)
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`

    // id++;
    const fetchComments = async () => {
        try {
            const response = await fetch(url)
            // console.log(response)
            const Comments = await response.json()
            setUsersComment(Comments)



        }
        catch (error) {
            // console.log(error)
            // console.log('inside catch')
        }
    }
    useEffect(() => {
        fetchComments()
    },[])
    var UserComments = UsersComments.map((val, ind) => {

        return <LocalDiv className="card w-75" key={ind}>
            <LocalDiv className="card-body">
            
                <LocalH4 className="card-title">{UsersComments[ind].email}</LocalH4>
                <LocalP className='card-title'>{UsersComments[ind].body}</LocalP>
            </LocalDiv>
        </LocalDiv>
    })

    return (
        <LocalDiv>
            {console.log("Inside comment return")}
            {UserComments}

        </LocalDiv>
    )




}
export default UserComments;