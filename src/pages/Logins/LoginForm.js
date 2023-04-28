
import React from 'react';
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../style.css";
import "../../styleCustom.css";
import "../../Components/SelectComponent";
import TextBoxComponent from "../../Components/TextBoxComponent";

const LoginForm = () => {  
  const navigate = useNavigate();

  const navigateToRegisterForm = () => {
    navigate('/register');
  };

  const navigateToResetPasswordForm = () => {
    navigate('/resetPassword');
  };

  return (
    <div className="form-login-position">
      <h1>Login!</h1>
      <Formik
      initialValues={{
        email: "",
        password: "",
      }}
        validationSchema={Yup.object({
            email: Yup.string()
                .email("Invalid email addresss`")
                .required("Email is required"),
            password: Yup
                .string()
                .required("Password is required"),  
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          console.log(values)
          navigate('/home')
        }}
      >
        <Form>
          <TextBoxComponent label="Email Address" name="email" type="email" placeholder="jane@formik.com" />  
          <br></br>  
          <TextBoxComponent label="Password" name="password" type="password"  />
          <div className="nav-right nav-menu">
            <a className="nav-item" onClick={navigateToResetPasswordForm}>
              forgot password?
            </a>
          </div>
          <br/>
          <button type="submit">Login</button> 
          <button type="button" onClick={navigateToRegisterForm}>Register New User</button> 
        </Form>
        
      </Formik>
    </div>
  );
};

export default LoginForm
