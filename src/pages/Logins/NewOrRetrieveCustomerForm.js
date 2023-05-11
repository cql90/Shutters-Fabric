import React, { useState } from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const NewOrRetrieveCustomerForm = ({formInfo, formState}) => {  
    const customerCompany = {
        company_id: "",
        customer_name: ""
    }

    const navigate = useNavigate();

    const navigateToCustomerInvoice = () => {
        navigate('/customerinvoice');
    };

    const[showError, setShowError] = useState(false)

    const showHideError = ((show) => {
        setShowError(show)
      })

    return (
      <div className="container-fluid">
        <div style={{width: '100%', height: 100}}></div>
        <div style={{width: 500, height: 300, display: 'inline-block'}}></div>
        <div className="div-order-form" style={{height: 350, display: 'inline-block'}}>
            <div className=" " >
                <h3>Create new order for this Customer!</h3>{ showError && <h4 style={{color: 'red'}}>Customer wasn't in the system</h4> }
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
                        // make sure Customer existed in database first then make second call to retrieve customer and invoice
                        const data = await fetch('http://127.0.0.1:8000/customer_name/' + values.customerName)
                        const resCustomer = await data.json()
                        if(data.statusText == 'Not Found'){
                            showHideError(true)
                            return
                        }
                        if(resCustomer !== undefined) {
                            customerCompany.company_id = sessionStorage.getItem("company_id")
                            customerCompany.customer_name = values.customerName
                            // make this call to retrieve Customer and invoice information
                            const requestOptions = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify(customerCompany)
                            }
                            const data = await fetch('http://127.0.0.1:8000/customer_invoice', requestOptions)
                            const resCustomerInvoice = await data.json()
                            if(resCustomerInvoice !== undefined){
                                sessionStorage.setItem('customer_invoice', JSON.stringify(resCustomerInvoice))
                                navigateToCustomerInvoice()
                            }    
                        }
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
                <button type="submit" className="btn btn-primary btn-lg" style={{marginTop: -5}}>Create</button>
            </Form>      
            </Formik>
        </div>
      </div>
    )
  };

  export default NewOrRetrieveCustomerForm