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
            <button type="submit">Submit</button>
          </Form>
          
        </Formik>
      </div>
    );
  };

  export default NewOrRetrieveCustomerForm