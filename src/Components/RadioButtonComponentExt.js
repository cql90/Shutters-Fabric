import React from "react"
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import TextError  from "./TextError"

// function getStyles(errors, fieldName) {
//     if (getIn(errors, fieldName)) {
//       return {
//         // border: '1px solid red',
//         color: 'red'
//       }
//     }
// }

const RadioButtonComponentExt = (props) => {
    const {name, options, selectchange, checkedoption} = props;
    const x = options;
    const initialValues = {
        measurement: "Standard",
        mount: "IM",
        louverSide: "3 1/2",
        railLength: "4 1/2",
        splitSize: "splitFiftyFifty",
        choice: "Standard",
        frame: "normal",
        numOfFrame: "4",
        hingsChoice: checkedoption,
        dividerSplitOption: "None",
        dividerSplitSize: ""
    };

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
            defaultValues: {
                measurement: initialValues.measurement,
                mount: initialValues.mount,
                louverSide: initialValues.louverSide,
                railLength: initialValues.railLength,
                splitSize: initialValues.splitSize,
                choice: initialValues.choice,
                frame: initialValues.frame,
                numOfFrame: initialValues.numOfFrame,
                hingsChoice: initialValues.hingsChoice,
                dividerSplitOption: initialValues.dividerSplitOption,
                dividerSplitSize: initialValues.dividerSplitSize
            }
    });

    const selectChange = (e) => {
        selectchange(e)
    }

    return (
        <div>
            {   
                options.map((option, i) => {
                    return (
                        <div key={i} >
                            <label >
                            <input type="radio" id={option.value} value={option.value} disabled={props.notallow} 
                            {...register(name)}  onChange={selectChange}/>
                            {option.name}</label>                                
                        </div>   
                    ) 
                })
                
            }
        </div>
    );
  };

  export default RadioButtonComponentExt