import React from "react"
import { useForm} from "react-hook-form"
import { Button, Form } from "react-bootstrap";
import "../style.css";
import "../styleCustom.css";

const TextBoxComponentExt = ({ inputName, label, fieldvalue, ...props }) => {
  const {textchange} = props;

  const textChange = (e) => {
    textchange(e);
  }

  const {
    register,
    formState: { errors }
  } = useForm();

  return (
    <>  
      <div className={props.classdiv} style={{display: 'inline-block'}}>
        <Form.Label className={props.classlabel}>{label}</Form.Label>
        <input type="text" name={inputName} className="text-input" value={fieldvalue} {...props} onChange={textChange}/>
        {errors.width && <p>{errors.width.message}</p>}
      </div>  
    </>
  );
};

export default TextBoxComponentExt