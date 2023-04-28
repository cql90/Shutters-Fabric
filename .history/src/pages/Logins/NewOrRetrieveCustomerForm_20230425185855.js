import React from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const NewOrRetrieveCustomerForm = () => {  
    return (
      <div className="container-fluid">
        <div style={{width: '100%', height: 100}}></div>
        <div style={{width: 300, height: 10, display: 'inline-block'}}></div>
        <div className="div-order-form" style={{width: 300, height: 10, display: 'inline-block'}}>
            <div className="">
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
                    <button type="submit">Retrieve</button>
                </Form>      
                </Formik>
            </div>
        </div>
        <div style={{width: '100%', height: 30}}></div>
        <div className="div-order-form">
            <h3>Create new order for new Customer!</h3>
            <Formik
                onSubmit={async (values, { setSubmitting }) => {
                    await new Promise(r => setTimeout(r, 10));
                    setSubmitting(false);
                    console.log(values)
                }}
            >
            <Form>
                <button type="submit" style={{marginTop: -5}}>Submit</button>
            </Form>      
            </Formik>
        </div>
      </div>
    );
  };

  export default NewOrRetrieveCustomerForm