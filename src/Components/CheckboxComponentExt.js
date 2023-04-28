import React from "react"
import { useField } from "formik"

const CheckboxComponent = ({ options, ...props }) => {
    const [field, meta] = useField({ ...props });
    return (
      <>
        {
            options.map((item, i) => (      
            {...field.name !== 'acceptedTerms'? field.name = item.value : field.name},   
            <div key={i} style={{display: 'inline-block', 'marginRight': 100}}>     
              <label key={item.value}>
                <input type="checkbox" name={item.name} value={item.value} {...field} />
                {item.value}
              </label>
              {meta.touched && meta.error ? (
                <div className="error" key={i+1}>{meta.error}</div>
              ) : null}
            </div>          
            ))
        }
      </>
    );
  };

  export default CheckboxComponentExt