import React from "react"
import { useField, getIn } from "formik"

function setStyle(errors, fieldName, type) {
  if (getIn(errors, fieldName)) {
    if(type === 0)
      return { border: '1px solid red' }
    return { color: 'red' }
  }
}

const TextBoxComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const errors = {invoiceNumber: "required"};
  return (
    <>  
    <div className={props.classdiv}>
    <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>  
    </>
  );
};

export default TextBoxComponent