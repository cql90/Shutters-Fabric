import React, { useState } from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const NewOrRetrieveCustomerForm = ({formInfo, formState}) => {  
    const navigate = useNavigate();

    const navigateToMain = () => {
        navigate('/home');
    };

    const[showError, setShowError] = useState(false)

    const showHideError = ((show) => {
        setShowError(show)
      })

    const setFormInfoCustomerId = ((val) => {
        formState({...formInfo, customer_id: val})
    })

    const setFormInfoCustomerName = ((val) => {
        formState({...formInfo, customer_name: val})
    })

    const setFormInfoSaleManId = ((val) => {
        formState({...formInfo, sale_man_id: val})
    })

    const setFormInfoSaleManName = ((val) => {
        formState({...formInfo, sale_man_name: val})
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
                        const data = await fetch('http://127.0.0.1:8000/customer_name/' + values.customerName)
                        const resCustomer = await data.json()
                        if(data.statusText == 'Not Found'){
                            showHideError(true)
                            return
                        }
                        if(resCustomer !== undefined) {
                            setFormInfoCustomerId(resCustomer.customer_id)
                            setFormInfoCustomerName(resCustomer.customer_name)
                            setFormInfoSaleManId(resCustomer.sale_man_id)
                            sessionStorage.setItem('customer_id', resCustomer.customer_id)
                            sessionStorage.setItem('customer_name', resCustomer.customer_name)
                            sessionStorage.setItem('sale_man_id', resCustomer.sale_man_id)
                            const dataSaleMan = await fetch('http://127.0.0.1:8000/sale/' + resCustomer.sale_man_id)
                            const resSaleMan = await dataSaleMan.json()
                            if(resSaleMan !== undefined){
                                setFormInfoSaleManName(resSaleMan.sale_man_name)
                                sessionStorage.setItem("sale_man_name", resSaleMan.sale_man_name)
                            }
                            navigateToMain()
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
    );
  };

  export default NewOrRetrieveCustomerForm