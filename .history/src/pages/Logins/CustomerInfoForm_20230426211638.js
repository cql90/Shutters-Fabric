import React from 'react';
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import SelectComponent from '../../Components/SelectComponent';
import dataSelect from "../../data/dataSelect.json";
import state from "../../data/dataState.json";
import TextBoxComponent from "../../Components/TextBoxComponent";

const selectState = JSON.parse(JSON.stringify(state))
const jobType = JSON.parse(JSON.stringify(dataSelect))
// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// And now we can use these
const CustomerInfoForm = () => {  
  return (
    <div className="form-login-position">
      <h1>Customer Info!</h1>
      <Formik
      initialValues={{
        customerName: "",
        streetName: "",
        cityName: "",
        state: "",
        zipCode: "",
        phone: ""
      }}
        validationSchema={Yup.object({
          customerName: Yup.string()
            .required("Customer Name is required"),
          streetName: Yup.string()
            .required("Street Name is required"),
          cityName: Yup.string()
            .required("City is required"),
          state: Yup.string()
            .required("State is required"),  
          zipCode: Yup.string()
            .required("Zip Code is required"),
          phone: Yup.string()
            .required("Phone number is required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Must be 10 number")
            .max(10, "Must be 10 number")
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          console.log(values)
        }}
      >
        <Form>
          <TextBoxComponent label="Customer Name" name="customerName" type="text" placeholder="Customer Name" />

          <TextBoxComponent label="Street Name" name="streetName" type="text" placeholder="555 Yolanda st." />

          <TextBoxComponent label="City Name" name="cityName" type="text" placeholder="Woodland Hills" />

          <SelectComponent label="State" name="state" type="select" options={selectState} />


          <TextBoxComponent label="Zip Code" name="zipCode" type="number" />

          <TextBoxComponent label="Phone" name="phone" type="text" />
          <br></br>
          <button type="submit">Submit</button>
        </Form>
        
      </Formik>
    </div>
  );
};

export default CustomerInfoForm
