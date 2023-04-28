import React from 'react'
import TextBoxComponent from "../../Components/TextBoxComponent";
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";

const NewOrRetrieveCustomerForm = () => {
  return (
    <div className="form-login-position">
      <h3>Create new order for existing Customer</h3>
      <TextBoxComponent label="Customer Name" name="customerName" type="text" placeholder="Came back Customer" />
    </div>
  )
}

export default NewOrRetrieveCustomerForm
