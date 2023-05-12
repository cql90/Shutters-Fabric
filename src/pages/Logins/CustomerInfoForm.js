import React from 'react';
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import SelectComponent from '../../Components/SelectComponent';
import state from "../../data/dataState.json";
import TextBoxComponent from "../../Components/TextBoxComponent";

const selectState = JSON.parse(JSON.stringify(state))
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// And now we can use these
const CustomerInfoForm = ({formInfo, formState}) => {  
  const cusInfo = {
    sale_man_id: "",
    customer_first_name: "",
    customer_last_name: "",
    customer_phone: "",
    customer_address: "", 
    customer_city: "",
    customer_state: "",
    customer_zip_code: "",
    customer_country: "USA"
  }

  const saleManInfo = {
    sale_man_name: "",
    sale_man_phone: "",
    company_id: ""
  }

  const navigate = useNavigate();

  const navigateToMain = () => {
    navigate('/home');
  };

  const setFormInfoSaleManId = ((val) => {
    formState({...formInfo, sale_man_id: val})
  })

  const setFormInfoSaleManName = ((val) => {
    formState({...formInfo, sale_man_name: val})
  })

  const setFormInfoCustomerId = ((val) => {
    formState({...formInfo, customer_id: val})
  })

  const setFormInfoCustomerFirstName = ((val) => {
    formState({...formInfo, customer_first_name: val})
  })

  const setFormInfoCustomerLastName = ((val) => {
    formState({...formInfo, customer_last_name: val})
  })

  return (
    <div className="form-login-position">
      <h1>Customer Info!</h1>
      <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        streetName: "",
        cityName: "",
        state: "",
        zipCode: "",
        customerPhone: "",
        saleName: "",
        salePhone: ""
      }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .required("First Name is required"),
          lastName: Yup.string()
            .required("Last Name is required"),  
          streetName: Yup.string()
            .required("Street Name is required"),
          cityName: Yup.string()
            .required("City is required"),
          state: Yup.string()
            .required("State is required"),  
          zipCode: Yup.string()
            .required("Zip Code is required"),
          customerPhone: Yup.string()
            .required("Customer Phone number is required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Must be 10 number")
            .max(10, "Must be 10 number"),
          saleName: Yup.string()
            .required("Sale Person Name is required"),  
          salePhone: Yup.string()
            .required("Sale Person Phone is required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Must be 10 number")
            .max(10, "Must be 10 number"),
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          saleManInfo.sale_man_name = values.saleName
          saleManInfo.sale_man_phone = values.salePhone
          if( formInfo.company_id === undefined){
            formInfo.company_id = sessionStorage.getItem('company_id')
            saleManInfo.company_id = formInfo.company_id
          }
          else
            saleManInfo.company_id = formInfo.company_id
          
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(saleManInfo)
          }
          const data = await fetch('http://127.0.0.1:8000/sale_man', requestOptions)
          const resSaleMan = await data.json()
          if(resSaleMan !== undefined) {
            setFormInfoSaleManId(resSaleMan.sale_man_id)
            setFormInfoSaleManName(resSaleMan.sale_man_name)
            sessionStorage.setItem('sale_man_id', resSaleMan.sale_man_id)
            sessionStorage.setItem('sale_man_name', resSaleMan.sale_man_name)
            cusInfo.customer_first_name = values.firstName
            cusInfo.customer_last_name = values.lastName
            cusInfo.customer_address = values.streetName
            cusInfo.customer_city = values.cityName
            cusInfo.customer_state = values.state
            cusInfo.customer_zip_code = values.zipCode
            cusInfo.customer_phone = values.customerPhone
            cusInfo.sale_man_id = resSaleMan.sale_man_id
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(cusInfo)
            }
            const data = await fetch('http://127.0.0.1:8000/customer', requestOptions)
            const resCustomer = await data.json()
            if(resCustomer !== undefined) {
              setFormInfoCustomerId(resCustomer.customer_id)
              setFormInfoCustomerFirstName(values.firstName)
              setFormInfoCustomerLastName(values.lastName)
              sessionStorage.setItem('customer_first_name', values.firstName)
              sessionStorage.setItem('customer_last_name', values.lastName)
              sessionStorage.setItem('customer_id', resCustomer.customer_id)
              navigateToMain()
            }
          }
          else{
            console.log("Error: " + resSaleMan)
          }
        }}
      >
        <Form>
          <TextBoxComponent label="First Name" name="firstName" type="text" placeholder="First Name" />
          <TextBoxComponent label="Last Name" name="lastName" type="text" placeholder="Last Name" />
          <TextBoxComponent label="Street Name" name="streetName" type="text" placeholder="555 Yolanda st." />
          <TextBoxComponent label="City Name" name="cityName" type="text" placeholder="Woodland Hills" />
          <SelectComponent label="State" name="state" type="select" options={selectState} />
          <TextBoxComponent label="Zip Code" name="zipCode" type="number" />
          <TextBoxComponent label="Customer Phone" name="customerPhone" type="text" />
          <TextBoxComponent label="Sale Person Name" name="saleName" type="text" />
          <TextBoxComponent label="Sale Person Phone" name="salePhone" type="text" />
          <br></br>
          <button type="submit">Submit</button>
        </Form>
        
      </Formik>
    </div>
  );
};

export default CustomerInfoForm
