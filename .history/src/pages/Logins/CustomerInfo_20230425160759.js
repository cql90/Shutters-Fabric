import React from 'react';
import { Formik, Form, useField, useFormikContext } from "formik";
import * as Yup from "yup";
// import "../../style.css";
// import "../../styleCustom.css";
import "../../Components/SelectComponent";
import SelectComponent from '../../Components/SelectComponent';
import dataSelect from "../../data/dataSelect.json";
import dataCheckbox from "../../data/dataCheckbox.json";
import TextBoxComponent from "../../Components/TextBoxComponent";
import CheckboxComponent from '../../Components/CheckboxComponent';
import RadioButtonComponent from '../../Components/RadioButtonComponent';
import FormatPhoneNumber from '../../utilities/FormatPhoneNumber';
import {Link, Outlet} from 'react-router-dom'

const jobType = JSON.parse(JSON.stringify(dataSelect))

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

// And now we can use these
const SignupForm = () => {  
  return (
    <div className="form-login-position">
      <h1>Register!</h1>
      <Formik
      initialValues={{
        
      }}
        validationSchema={Yup.object({

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
          <TextBoxComponent label="State" name="state" type="text" />
          <TextBoxComponent label="Zip Code" name="zipCode" type="number" />
          <TextBoxComponent label="Phone" name="phone" type="text" />
          <br></br>
          <button type="submit">Submit</button>
        </Form>
        
      </Formik>
    </div>
  );
};

export default SignupForm
