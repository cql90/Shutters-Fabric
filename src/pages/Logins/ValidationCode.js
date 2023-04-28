import React from 'react';
import { Formik, Form } from "formik";
import * as Yup from "yup";
import "../../style.css";
import "../../styleCustom.css";
import "../../Components/SelectComponent";
import TextBoxComponent from "../../Components/TextBoxComponent";

const ValidationCodeForm = () => {  
  return (
    <div className="form-login-position">
      <h1>Validation Code</h1>
      <Formik
      initialValues={{
        validationCode: "",
      }}
        validationSchema={Yup.object({
            validationCode: Yup.number()    
            .required("Validation Code number is required")    
        })}
        onSubmit={async (values, { setSubmitting }) => {
          await new Promise(r => setTimeout(r, 10));
          setSubmitting(false);
          console.log(values)
        }}
      >
        <Form>
          <TextBoxComponent label="Validation Code" name="validationCode" type="number" />
          <br/>
          <button type="submit">Send</button>
        </Form>
        
      </Formik>
    </div>
  );
};

export default ValidationCodeForm
