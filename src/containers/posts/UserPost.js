import React from "react"
import { useParams } from "react-router-dom"
import { Accordion} from "react-bootstrap";

import { useState, useEffect } from "react";

import UserComments from "./comments/Comments";
import LocalForm from "../../components/form/Form";
import LocalButton from "../../components/button/Button";
import LocalP from "../../components/paragraph/P";
import LocalH1 from "../../components/headingTag/H1";
import LocalContainerFluid from "../../components/container/LocalContainerFluid";
import LocalTextarea from "../../components/textarea/Textarea";
import Logout from "../../Actions/Logut";
function UserPost(props) {
    var [UsersPost, setUsersPost] = useState(["...Loading"])
    var [commentid,setcommentid]=useState(null)
    const { id } = useParams()
    const { username } = useParams()
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    const fetchPosts = async () => {
        try {
            const response = await fetch(url)
            const Posts = await response.json()
            setUsersPost(Posts)
        }
        catch (error) {
        }
    }
    useEffect(() => {
        fetchPosts()
        // console.log(UsersPost)
    },[])
    function getComments(id){
        setcommentid(id)
    }
    var postTable = UsersPost.map((val, ind) => {
        return <Accordion.Item eventKey={ind} key={ind}>
            <Accordion.Header onClick={()=>getComments(val.id)}>#{ind+1} &nbsp;{UsersPost[ind].title}
            </Accordion.Header>
            <Accordion.Body>{UsersPost[ind].body}
            <LocalForm>
                <LocalTextarea className='form-control' placeholder='Leave a comment here'></LocalTextarea>
                <LocalButton  type='submit' className='btn btn-primary mt-2'>&#10004;</LocalButton>
                {commentid===val.id?<UserComments 
                    id={val.id}
                />: <LocalP>...Comments</LocalP>
                }
            </LocalForm>
            </Accordion.Body>
        </Accordion.Item>

    })


    return (
        <LocalContainerFluid>
            <LocalH1>Displaying  Posts of {username}</LocalH1>
            <Accordion>
                {postTable}
            </Accordion>
            <Logout />
        </LocalContainerFluid>
        
    )
}
export default UserPost;