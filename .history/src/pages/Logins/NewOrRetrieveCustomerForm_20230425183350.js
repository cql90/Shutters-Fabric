import React from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const NewOrRetrieveCustomerForm = () => {  
    return (
        <div className="container-fluid">
      <div className="form-login-position">
        <h3>Create new order for this Customer!</h3>
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
            <TextBoxComponent label="Customer Name" name="customerName" type="text" placeholder="Came back Customer" />
            <br></br>
            <button type="submit">Submit</button>
          </Form>      
        </Formik>
      </div>
    );
  };

  export default NewOrRetrieveCustomerForm