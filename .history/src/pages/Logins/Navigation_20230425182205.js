
import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import {Routes, Route, Link} from "react-router-dom";
import LoginForm from "./LoginForm"
import SignupForm  from "./SignupForm"
import ContactComponent from "./Contact"
import MainComponent from '../Main';
import AboutComponent from './About';
import ResetPasswordForm from './ResetPasswordForm';
import ValidationCodeForm from './ValidationCode';
import CustomerInfoForm from './CustomerInfoForm';


const NavbarComponent = () => {
  return (
    <div>  
        <Navbar bg="dark" expand="lg" variant={'dark'}>
        <div className="container-fluid" >
            <Navbar.Brand href="#home">Shutter-Fabric</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/home">Main</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/customer">Customer Info</Nav.Link>
                <Nav.Link as={Link} to="/order">Create New Order</Nav.Link>
                <Nav.Link as={Link} to="/resetPassword">Reset Password</Nav.Link>
                <Nav.Link as={Link} to="/validationCode">Validation Code</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
            </Navbar.Collapse>
        </div>
        </Navbar>
        <Routes>
            <Route path="/" element={<LoginForm />}></Route>
            <Route path="/login" element={<LoginForm />}></Route>
            <Route path="/customer" element={<CustomerInfoForm />}></Route>
            <Route path="/order" element={<New />}></Route>
            <Route path="/resetPassword" element={<ResetPasswordForm />}></Route>
            <Route path="/validationCode" element={<ValidationCodeForm />}></Route>
            <Route path="/register" element={<SignupForm />}></Route>
            <Route path="/signupform" element={<SignupForm />}></Route>
            <Route path="/home" element={<MainComponent />}></Route>
            <Route path="/contact" element={<ContactComponent />}></Route>
            <Route path="/about" element={<AboutComponent />}></Route>
        </Routes>         
    </div> 
  )
}

export default NavbarComponent
