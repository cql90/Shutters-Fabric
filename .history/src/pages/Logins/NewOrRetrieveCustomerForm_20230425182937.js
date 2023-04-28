import React from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form } from "formik";
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