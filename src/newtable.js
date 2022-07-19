import Button from "@restart/ui/esm/Button";
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
function NewTable() {
    const heading = [
        { sn: "S.no", hname: "Name", hemail: "Email", hmobile: "Mobile", er: "Edit/Remove" },]
    const users = [
        { id: 1, name: "Vishnu", email: "vishnu@gmail.com", mobile: 740923 },
        { id: 2, name: "Shiv", email: "Shiv@gmail.com", mobile: 885977 },
        { id: 3, name: "Paras", email: "paras@gmail.com", mobile: 639990 },
        { id: 4, name: "Ganesh", email: "ganesh@gmail.com", mobile: 941001 },
        { id: 5, name: "Nikunj", email: "nikunj@gmail.com", mobile: 600561 }

    ]
    const newuser = { name: "", email: "", mobile: "" }

    const [head, sethead] = useState(heading)
    const [newdata, setnewdata] = useState(users)
    const [getdata, setgetdata] = useState(newuser);
    const [show, setShow] = useState(false);
    const [tMshow, settMShow] = useState(false);
    const [activeuser, setactiveuser] = useState(0)
    // var activeuser= 1
    // modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // modal input value
    const handleChange = (e) => {
        const { name, value } = e.target;
        setgetdata({ ...getdata, [name]: value });
    };

    //modal submit
    const handleSubmit = () => {
        const clonedata = [...newdata]
        const mapemail = clonedata.map((val) => val.email);
        const mapnum = clonedata.map((val) => val.mobile);
        const newname = getdata.name;
        const newuser = getdata.email;
        const newmobile = getdata.mobile;
        // console.log("newnum : ", mapnum, "newmobile : ", newmobile)
        mapemail.find((value) => value === newuser) || mapnum.find((value) => value === newmobile) ? alert("plese Enter New User")
        : newname === "" || newuser ==="" || newmobile === "" ? alert("please Fill Value")
        : clonedata.push(getdata)
        setnewdata(clonedata)
        setShow(false)
    }
    // table edit buttan
    const edituser = (index) => {
        setactiveuser(index)
        settMShow(true)

    }
    // table tr remove buttan  

    const removeuser = (index) => {
        const cloneuser = [...newdata]
        const removedata = cloneuser.filter((val, ind) => ind !== index)
        setnewdata(removedata)
    }


    // table edit input box value
    // const handleuserchange =(e,index) => {
    //     const { name, value } = e.target;
    //     const newtable = [...newdata]   
    //     var x = newtable[index][name] = value
    //     setnewdata(x);
    //     console.log(x)
    // }



    // edit input submit 

    const editSubmit = (event) => {
        event.preventDefault();
        settMShow(false)
        const { name, email, mobile} = event.target.elements;
        var newtable = [...newdata]
        name.value === "" || event.target.email.value === "" || mobile.value === "" ? alert("please Fill value")
        :newtable[activeuser].name = name.value
        newtable[activeuser].mobile = mobile.value
        newtable[activeuser].email = email.value
         setnewdata(newtable);
        console.log(name.value)
        // console.log("event : ", event.target.name.value)
        //  const arr =["Name :",name.value,"Email :",email.value,"Mobile :",mobile.value]
        //  let username = newtable.map((val) => val.name)
        //  let useremail = newtable.map((val) => val.email)
        //  let usermobile = newtable.map((val) => val.mobile)
        //  username.find((value) => value === name.value) ||
        //  useremail.find((value) => value === email.value) ||
        //  usermobile.find((value) => value === mobile.value) ? alert("Please edit")

    }

    const editclose = () => settMShow(false);

    return (
        <div className="p-3 bg-warning pt-4">
            <table className="table table-dark table-striped">
                <thead>
                    {head.map((headdata, hind) => {
                        return (
                            <tr>
                                <td className="px-3"><b>{headdata.sn}</b></td>
                                <td><b>{headdata.hname}</b></td>
                                <td><b>{headdata.hemail}</b></td>
                                <td><b>{headdata.hmobile}</b></td>
                                <td><b>{headdata.er}</b></td>
                            </tr>
                        )
                    })
                    }
                </thead>
                <tbody>
                    {newdata.map((usersdata, uind) => {
                        return (
                            <>
                                <tr key="uind">
                                    <td className="px-4"><b>{uind + 1}</b></td>
                                    <td>{usersdata.name}</td>
                                    <td>{usersdata.email}</td>
                                    <td>{usersdata.mobile}</td>
                                    <td className=" col-1 px=5" >
                                        <button className="btn btn-warning m-1 p-0" onClick={() => edituser(uind)}>&#9998;</button>
                                        <button className="btn btn-info m-1 mx-2 p-0" onClick={() => removeuser(uind)}>&#10006;</button>
                                    </td>
                                </tr>
                            </>
                        )
                    }
                    )}
                </tbody>
            </table>

            <Modal show={tMshow}>
                <Modal.Header>
                    <h3>User Edit</h3>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={editSubmit}>
                        <label>Name</label>
                        <input type="text" name="name" maxLength="20" minLength="3" defaultValue={newdata[activeuser].name}
                            className="col-12 p-1 m-1"  />
                        <label>Email</label>
                        <input type="email" name="email" defaultValue={newdata[activeuser].email}
                            className="col-12 p-1 m-1"/>
                        <label>Mobile</label>
                        <input type="number" name="mobile" defaultValue={newdata[activeuser].mobile}
                            className="col-12 p-1 m-1"/>
                        <button type="button" className="btn btn-secondary m-1" onClick={editclose}>Close</button>
                        <button type="submit" className="btn btn-primary mt-2">Submit</button>
                    </form>
                </Modal.Body>
            </Modal>


            <Modal show={show} >
                <Modal.Header>
                    <h3>User Add</h3>
                </Modal.Header>
                <Modal.Body>
                    <lable>Name</lable>
                    <input type="text" name="name" value={newdata.name}
                        onChange={(e) => handleChange(e)}
                        className="col-12 border border-dark m-1 p-1" />
                    <lable>Email</lable>
                    <input type="email" name="email" value={newdata.email}
                        onChange={(e) => handleChange(e)}
                        className="col-12 border border-dark m-1 p-1" />
                    <lable>Mobile</lable>
                    <input type="number" name="mobile" value={newdata.mobile}
                        onChange={(e) => handleChange(e)}
                        className="col-12 border border-dark m-1 p-1" />

                </Modal.Body>
                <Modal.Footer>
                    <button className=" btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button className="btn btn-primary" onClick={handleSubmit}>
                        Submit
                    </button>
                </Modal.Footer>
            </Modal>
            <Button variant="primary" className="col-1 btn btn-primary pt-1 p-0" onClick={handleShow}>
                <h4>&#10010;</h4> 
            </Button>
        </div>
    )
}
export default NewTable;




  // getdata.name.length < 1? 
        // alert("Please Enter Your name")
        // cloneuser[activeuser] = (newdata)

        // : getdata.email.length < 11 ? 
        // alert("Please Currect Email Address \nHint : s@gmial.com")
        // :getdata.mobile.length < 5 ?
        // alert("Enter Currect Number")


// }
// import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
// import { Form } from 'react-bootstrap';

// function TheListMovies() {
//     const moviename = ["Lighters Up",
//     "No guns allowed",
//     "Ashtrays and Heartbreaks",
//     "Torn Apart",
//     "The Doggfather"
// ];
//     const [list, setlist] = useState(moviename)

//     var listWithTags = list.map((val, ind) => {
//         var i = ind + "movie"
//         return (<li key={ind}>
//             {val}
//             &emsp;<button className="icon" onClick={del} id={i}>&#10008;</button>
//         </li>)
//     })

//     function update() {
//         var listclown = [...list]
//         listclown.push(document.getElementById("movieInp").value);
//         setlist(listclown)
//         document.getElementById("myform").reset();
//     }

//     function del(e) {
//         var listclown = [...list]

//         listclown.splice(e.target.id.slice(0, 1), 1)
//         setlist(listclown)
//     }

//     return (
//         <div className="list">
//             <h3>This is the Movie list: </h3>
//             <ul>{listWithTags}</ul>
//             <Form id="myform">
//                 <input type="text" id="movieInp" placeholder="Enter Movie" />
//                 <br />
//                 <Button className="btn btn-primary btn-sm" type="button" onClick={update}>Update</Button>
//             </Form>
//         </div>
//     );
// }

// export default TheListMovies;