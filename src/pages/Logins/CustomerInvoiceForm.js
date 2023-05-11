import React, { useState } from 'react'
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import "../../style.css";
import "../../styleCustom.css";
import TableCustomerInvoice from '../../Components/TableCustomerInvoice';
import RadioButtonComponentExt from '../../Components/RadioButtonComponentExt';
import dataCustInv from "../../data/dataCustomerInvoice.json";

  const dataCustInvoice = JSON.parse(JSON.stringify(dataCustInv))
  // And now we can use these
const CustomerInvoiceForm = () => {  
  const customerInvoice = JSON.parse(sessionStorage.getItem('customer_invoice'))

  const[custInv, setCustInv] = useState('')
  const[fontSize, setFontSize] = useState('1.4rem')
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

  return (
    <div className="container-fluid">
    <div className="divCustomerInvoice" id="divCustomerInvoice">
      <Formik
        initialValues={{
        }}
        validationSchema={Yup.object({
        })}
        
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(false);
          navigateToOrder()
        }}
      >
        <Form>
          <TableCustomerInvoice options={customerInvoice} setcustinv={setCustInv} setshowradiobuttons={setShowRadioButtons} ></TableCustomerInvoice>
          <br></br>
          { showRadioButtons && <div className="div-textbox-main" style={{marginLeft: '10px'}}>
            <fieldset style={{paddingTop: '.8rem', height: '6rem'}}>  
                <RadioButtonComponentExt name="customerinvoice" display="" options={dataCustInvoice} changelabel={custInv} fontsize={fontSize} selectchange={handleCustomerInvoiceChange}/>             
            </fieldset>
            <div className="form-main-button-position">
                <button type="submit" >Start Order</button>
            </div>
          </div> }
        </Form>
        
      </Formik>
    </div>
    </div>
  );
};

export default CustomerInvoiceForm
