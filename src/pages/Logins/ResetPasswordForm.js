import React, { useState} from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import TextBoxComponent from "../../Components/TextBoxComponent";

const ResetPasswordForm = ({formInfo, formState}) => {  
  const[showError, setShowError] = useState(false)

  const formValues = {
    user_email: '',
    user_password: ''
  }

  const showHideError = ((show) => {
    setShowError(show)
  })

  const setFormInfo = ((val) => {
    formState({...formInfo, company_id: val})
  })

  const navigate = useNavigate();

  const navigateToLoginForm = () => {
    navigate('/login');
  };

  return (
    <div className="form-login-position">
      <h1>Reset Password</h1>{ showError && <h4 style={{color: 'red'}}>Email was not found</h4> }
      <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        // validationCode: "",
      }}
        validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Email is required"),
            password: Yup
              .string()
              .required("User Id is required"),
            password: Yup
              .string()
              .min(8, 'Password must be 8 characters long')
              .matches(/[0-9]/, 'Password requires a number')
              .matches(/[a-z]/, 'Password requires a lowercase letter')
              .matches(/[A-Z]/, 'Password requires an uppercase letter')
              .matches(/[^\w]/, 'Password requires a symbol')
              .required("New Password is required"),
          confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
            .required("Confirm Password is required"),
        // validationCode: Yup.number()    
        //     .required("Validation Code number is required")
        //     .min(10, "Must be 4 number")
        //     .max(10, "Must be 4 number"),    
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          formValues.user_email = values.email;
          formValues.user_password = values.password;
          const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formValues)
          }
          const resUser = await fetch('http://127.0.0.1:8000/user', requestOptions)
          const data = await resUser.json()
          if(data !== undefined) {
            if(resUser.statusText === "Not Found"){
                showHideError(true)
            }
            else{
                showHideError(false)
                const data = await fetch('http://127.0.0.1:8000/user_email/' + values.email)
                const user = await data.json()
                if(user !== undefined) {
                  setFormInfo(user.company_id)
                  navigateToLoginForm()
                }
            }
          }
          console.log(values)
        }}
      >
        <Form>
          <TextBoxComponent label="Email Address" name="email" type="email" placeholder="jane@formik.com" />  
          <br></br>
          <TextBoxComponent label="New Password" name="password" type="password"  />
          <br></br>
          <TextBoxComponent label="Confirm New Password" name="confirmPassword" type="password" />
          {/* <TextBoxComponent label="Validation Code" name="validationCode" type="number" /> */}
          <br/>
          <button type="submit">Reset Password</button>
        </Form>
        
      </Formik>
    </div>
  );
};

export default ResetPasswordForm
