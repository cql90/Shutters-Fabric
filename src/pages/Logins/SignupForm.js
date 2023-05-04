import React, { useState } from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import TextBoxComponent from "../../Components/TextBoxComponent";
import CheckboxComponent from '../../Components/CheckboxComponent';

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// And now we can use these
const SignupForm = ({formInfo, formState}) => {  
  const formValues = {
    first_name: '',
    last_name: '',
    mobile_number: '',
    company_name: '',
    user_email: '',
    user_password: '',
    user_acceptance: '',
    company_id: '',
  }

  const[showError, setShowError] = useState(false)

  const showHideError = ((show) => {
    setShowError(show)
  })

  const setCompanyId = ((companyId) => {
    formValues.company_id = companyId
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
      <h1>Register!</h1>{ showError && <h4 style={{color: 'red'}}>The User already registered in the system</h4> }
      <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        companyName: "",
        password: "",
        confirmPassword: "",
        acceptedTerms: false,
      }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First Name is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Last Name is required"),
          email: Yup.string()
            .email("Invalid email addresss`")
            .required("Email is required"),
          phone: Yup.string()
            .required("Phone number is required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Must be 10 number")
            .max(10, "Must be 10 number"),
          companyName: Yup.string()
            .required("Company Name is required")
            .min(4, "Must be at least 4 characters"), 
          password: Yup
            .string()
            .min(8, 'Password must be 8 characters long')
            .matches(/[0-9]/, 'Password requires a number')
            .matches(/[a-z]/, 'Password requires a lowercase letter')
            .matches(/[A-Z]/, 'Password requires an uppercase letter')
            .matches(/[^\w]/, 'Password requires a symbol')
            .required("Password is required"),
          confirmPassword: Yup
            .string()
            .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
            .required("Confirm Password is required"),     
          acceptedTerms: Yup.boolean()
            .required("Required")
            .oneOf([true], "You must accept the terms and conditions."),
        })}
        
        onSubmit={async (values, { setSubmitting }) => {
          formValues.first_name = values.firstName
          formValues.last_name = values.lastName
          formValues.mobile_number = values.phone
          formValues.company_name = values.companyName
          formValues.user_email = values.email
          formValues.user_password = values.password
          formValues.user_acceptance = values.acceptedTerms
          showHideError(false)

          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          const resCompany = await fetch('http://127.0.0.1:8000/company_name/' + values.companyName)
          const data = await resCompany.json()
          if(data !== undefined) {
            setCompanyId(data.company_id)
            sessionStorage.setItem('company_id', data.company_id)
            setFormInfo(data.company_id)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(formValues)
            }
            console.log(JSON.stringify(formValues))
            const resUser = await fetch('http://127.0.0.1:8000/user', requestOptions)
            if(resUser !== undefined) {
              if(resUser.statusText === "Found"){
                showHideError(true)
              }
              else{
                showHideError(false)
                navigateToLoginForm()
              }
            }
            console.log(resUser)
          }
          console.log(formValues)
        }}
      >
        <Form>
          <TextBoxComponent label="First Name" name="firstName" type="text" placeholder="Jane" />
          <br></br>
          <TextBoxComponent label="Last Name" name="lastName" type="text" placeholder="Doe" />
          <br></br>
          <TextBoxComponent label="Mobil Number" name="phone" type="text" />
          <br></br>
          <TextBoxComponent label="Company Name" name="companyName" type="text" />
          <br></br>
          <TextBoxComponent label="Email Address" name="email" type="email" placeholder="jane@formik.com" />
          <br></br>
          <TextBoxComponent label="Password" name="password" type="text"  />
          <br></br>
          <TextBoxComponent label="Confirm Password" name="confirmPassword" type="text" />
          <br></br>
          <CheckboxComponent name="acceptedTerms">I accept the terms and conditions</CheckboxComponent>
          <br></br>
          <button type="submit">Submit</button>
        </Form>
        
      </Formik>
    </div>
  );
};

export default SignupForm
