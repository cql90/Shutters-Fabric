
import React from "react"
import { useField } from "formik"

const TextAreaComponent = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
    
    <div className={props.classdiv}>
      <label htmlFor={props.id || props.name} className={props.classlabel}>{label}</label>
      <textarea className="text-area" {...field} {...props} row={props.row} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>  
    </>
  );
};

export default TextAreaComponent