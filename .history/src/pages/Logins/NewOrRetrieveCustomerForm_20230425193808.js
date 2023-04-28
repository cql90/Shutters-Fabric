import React from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const NewOrRetrieveCustomerForm = () => {  
    const navigate = useNavigate();

    return (
      <div className="container-fluid">
        <div style={{width: '100%', height: 100}}></div>
        <div style={{width: 500, height: 300, display: 'inline-block'}}></div>
        <div className="div-order-form" style={{height: 300, display: 'inline-block'}}>
            <div className=" " >
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
                        navigate('/customer')
                    }}
                >
                <Form>
                    <TextBoxComponent label="Customer Name" name="customerName" type="text" placeholder="Came back Customer" />
                    <button type="submit">Retrieve</button>
                    <br></br>
                </Form>      
                </Formik>
            </div>
        </div>
        <div style={{width: '100%', height: 30}}></div>
        <div style={{width: 500, height: 100, display: 'inline-block'}}></div>
        <div className="div-order-form" style={{height: 300, display: 'inline-block'}}>
            <h3>Create new order for new Customer!</h3>
            <Formik
                initialValues={{
                }}
                validationSchema={Yup.object({})}

                onSubmit={async (values, { setSubmitting }) => {
                        await new Promise(r => setTimeout(r, 10));
                        setSubmitting(false);
                        navigate('/customer')
                    }}
            >
            <Form>
                <TextBoxComponent label="" name="saleName" type="text" className="btn-lg" style={{display: "none"}}placeholder="Came back Customer" />
                <br></br>
                <button type="submit" className="btn btn-primary btn-lg" style={{marginTop: -5}}>Submit</button>
            </Form>      
            </Formik>
        </div>
      </div>
    );
  };

  export default NewOrRetrieveCustomerForm