import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { Form } from "react-bootstrap";
import * as Yup from "yup";
import "../../style.css";
import "../../styleCustom.css";
import TableCustomerInvoice from '../../Components/TableCustomerInvoice';


  // And now we can use these
const CustomerInvoiceForm = () => {  
  const customerInvoice = JSON.parse(sessionStorage.getItem('customer_invoice'))

  const[custInv, setCustInv] = useState('')
  const[showRadioButtons, setShowRadioButtons] = useState(false)

  // if only one customer retrieved, set radio button reuse invoice + invoice_id
  if(customerInvoice.length == 1) {
    setCustInv(customerInvoice.invoice_id)
  }

  const handleCustomerInvoiceChange = ((e) => {
    sessionStorage.setItem('invoice', e.currentTarget.value)
  })

  const navigate = useNavigate();

  const navigateToOrder = () => {
      navigate('/home');
  };

  const singleCustomerInvoice = JSON.parse(sessionStorage.getItem('single_customer_invoice'));

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
    }
  });

  const onSubmit = async  (data, e) => {
    navigateToOrder()
  };  

  return (
    <div className="container-fluid">
    <div className="divCustomerInvoice" id="divCustomerInvoice">
        <Form onSubmit={handleSubmit(onSubmit)} >
          <TableCustomerInvoice options={customerInvoice} setcustinv={setCustInv} setshowradiobuttons={setShowRadioButtons} ></TableCustomerInvoice>
          <br></br>
          { showRadioButtons && <div className="div-textbox-main" style={{marginLeft: '10px'}}>
            <fieldset style={{paddingTop: '.8rem', height: '6rem', width: '450px'}}>  
                <div className="div-parent">                
                <Form.Check type="radio" style={{display: 'inline-block'}} name="customerinvoice" value="reuse" label="Reuse Invoice" {...register("customerinvoice", {
                    required: "Please select your option"})} onChange={handleCustomerInvoiceChange} />
                    <label id="reuse">{singleCustomerInvoice.invoice_id}</label><label id="custnameandphone">&nbsp;&nbsp;for &nbsp;{singleCustomerInvoice.customer_name}&nbsp;&nbsp;-&nbsp;&nbsp;{singleCustomerInvoice.customer_phone}</label> 
                </div>    
                <Form.Check type="radio" name="customerinvoice" value="new" label="Create new Invoice" {...register("customerinvoice", {
                    required: "Please select your option"})} onChange={handleCustomerInvoiceChange} />
                <div className="div-vertical-spacing"></div>
                <div className="div-vertical-spacing-10"></div>
            </fieldset>
            <div className="form-main-button-position">
                <button type="submit" >Start Order</button>
            </div>
          </div> }
        </Form>
    </div>
    </div>
  );
};

export default CustomerInvoiceForm
