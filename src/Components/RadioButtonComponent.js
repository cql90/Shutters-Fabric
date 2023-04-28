import React from "react"
import { useField, Field, ErrorMessage, getIn } from "formik"
import TextError  from "./TextError"

function getStyles(errors, fieldName) {
    if (getIn(errors, fieldName)) {
      return {
        // border: '1px solid red',
        color: 'red'
      }
    }
}

const RadioButtonComponent = (props) => {
    const {name, options, display, margin, padding} = props;
    const errors = {inside: "required"};
    const [field, meta] = useField(props);
    return (
      <div className="">
        <Field name={name}>
            {
                ({field}) => {
                    return options.map((option, i) => {
                        return (
                            <div key={i} style={{display: display, marginLeft:Number(margin), paddingTop:Number(padding)}}>
                                <label htmlFor={option.name} style={meta.error && meta.touched ? getStyles(errors, 'inside'): null}>
                                <input type="radio" id={option.value} {...field} {...props} value={option.value} disabled={props.notallow} 
                                checked={field.value == undefined && option.value == "standard" ? "standard" : field.value === option.value}/>
                                {option.name}</label>                                
                            </div>
                        )
                    })
                }
            }
        </Field>
      </div>
    );
  };

  export default RadioButtonComponent