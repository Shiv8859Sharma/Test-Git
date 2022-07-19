import React, {useState} from 'react'
import { BrowserRouter as Router,Link, Route, Switch,Redirect } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'
import Home from './shivhome';
import About from './about';
import { Container } from 'react-bootstrap';
function NavbarContainer() {
    const homepage = true
    return (
        <Router>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>React Task</Navbar.Brand>
                    <Nav>
                        <Link className="nav-link" to="/home">Home</Link>
                        <Link className="nav-link" to="/about">About</Link>
                    </Nav>
                </Container>
            </Navbar>
            {/* <Switch>
                <Route exact path='/' render={()=>{
                return(
                    homepage ? <Redirect to='/home' /> :
                    null
                )   } 
            } />
                <Route exact path='/home' component={Home} />
                <Route path='/about'><About /></Route>
            </Switch> */}
        </Router>
    )
}

// function Home(){
//     return <h1>Home Page</h1>
// }
// function About(){
//     return <h1>About Page</h1>
// }

export default NavbarContainer;

