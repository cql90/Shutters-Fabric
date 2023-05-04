
import React, { useState } from 'react';
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../style.css";
import "../../styleCustom.css";
import "../../Components/SelectComponent";
import TextBoxComponent from "../../Components/TextBoxComponent";

const LoginForm = ({formInfo, formState}) => {  
  const navigate = useNavigate();

  const navigateToRegisterForm = () => {
    navigate('/register');
  };

  const navigateToResetPasswordForm = () => {
    navigate('/resetPassword');
  };

  const navigateToCreateNewOrder = () => {
    navigate('/order');
  };

  const[showError, setShowError] = useState(false)

  const formValues = {
    user_email: '',
    user_password: ''
  }

  const showHideError = ((show) => {
    setShowError(show)
  })

  const setFormInfo = ((val, field) => {
    formState({...formInfo, company_id: val})
  })

  return (
    <div className="form-login-position">
      <h1>Login!</h1>{ showError && <h4 style={{color: 'red'}}>Invalid email or password</h4> }
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
          formValues.user_email = values.email;
          formValues.user_password = values.password;
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
          }
          const resUser = await fetch('http://127.0.0.1:8000/user_email_password', requestOptions)
          const data = await resUser.json()
          if(data !== undefined) {
            if(resUser.statusText === "Not Found"){
                showHideError(true)
            }
            else{
                showHideError(false)
                setFormInfo(data.company_id)
                sessionStorage.setItem('company_id', data.company_id)
                navigateToCreateNewOrder()
            }
          }
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
