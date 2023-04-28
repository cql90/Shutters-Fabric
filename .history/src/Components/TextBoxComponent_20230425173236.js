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
  const a = props.name;
  const errors = {`{props.name}`: "required"};
  return (
    <>  
    <div className={props.classdiv}>
      {/* <label style={meta.error && meta.touched? setStyle(errors, 'invoiceNumber', 1): null} htmlFor={props.id || props.name} className={props.classlabel}>{label}</label>
      <input style={meta.error && meta.touched? setStyle(errors, 'invoiceNumber', 0): null} className="text-input" {...field} {...props} /> */}
      <label htmlFor={props.id || props.name}>{label}</label>
      <input style={meta.error && meta.touched? setStyle(errors, props.name, 0): null}className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>  
    </>
  );
};

export default TextBoxComponent