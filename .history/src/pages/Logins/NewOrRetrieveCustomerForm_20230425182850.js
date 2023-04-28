import React from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

const NewOrRetrieveCustomerForm = () => {  
    return (
      <div className="form-login-position">
        <h1>Register!</h1>
        <Formik
            initialValues={{
            customerName: ""
            }}
            validationSchema={Yup.object({
                customerName: Yup.string()
                .required("Customer Name is required"),
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
            {/* <p className="forgot-password text-right">
              <Link to={'/forgot'}></Link>
            </p> */}
          </Form>
          
        </Formik>
      </div>
    );
  };

  export default NewOrRetrieveCustomerForm