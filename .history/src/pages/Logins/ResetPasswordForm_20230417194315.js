import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import TextBoxComponent from "../../Components/TextBoxComponent";

const ResetPasswordForm = () => {  
  return (
    <div className="form-login-position">
      <h1>Reset Password</h1>
      <Formik
      initialValues={{
        password: "",
        confirmPassword: "",
        // validationCode: "",
      }}
        validationSchema={Yup.object({
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
          console.log(values)
        }}
      >
        <Form>
          <TextBoxComponent label="New Password" name="password" type="password"  />
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
