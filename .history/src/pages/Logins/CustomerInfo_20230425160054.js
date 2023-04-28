import React from 'react';
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import SelectComponent from '../../Components/SelectComponent';
import dataSelect from "../../data/dataSelect.json";
import dataCheckbox from "../../data/dataCheckbox.json";
import TextBoxComponent from "../../Components/TextBoxComponent";
import CheckboxComponent from '../../Components/CheckboxComponent';
import RadioButtonComponent from '../../Components/RadioButtonComponent';
import FormatPhoneNumber from '../../utilities/FormatPhoneNumber';
import {Link, Outlet} from 'react-router-dom'

const jobType = JSON.parse(JSON.stringify(dataSelect))
const color = JSON.parse(JSON.stringify(dataCheckbox))
const radioOptions = JSON.parse(JSON.stringify(dataCheckbox))[2]
const animals = JSON.parse(JSON.stringify(dataCheckbox))[3]

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// And now we can use these
const SignupForm = () => {  
  return (
    <div className="form-login-position">
      <h1>Register!</h1>
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
          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          console.log(values)
        }}
      >
        <Form>
          <TextBoxComponent label="Customer Name" name="customerName" type="text" placeholder="Jane" />
          <TextBoxComponent label="Last Name" name="lastName" type="text" placeholder="Doe" />
          <TextBoxComponent label="Mobil Number" name="phone" type="text" />
          <TextBoxComponent label="Company Name" name="companyName" type="text" />
          <TextBoxComponent label="Email Address" name="email" type="email" placeholder="jane@formik.com" />
          <TextBoxComponent label="Password" name="password" type="text"  />
          <TextBoxComponent label="Confirm Password" name="confirmPassword" type="text" />
          <CheckboxComponent name="acceptedTerms">I accept the terms and conditions</CheckboxComponent>
          <br></br>
          <button type="submit">Submit</button>
          {/* <p className="forgot-password text-right">
            <Link to={'/forgot'}></Link>
          </p> */}
        </Form>
        
      </Formik>
    </div>
  );
};

export default SignupForm
