import React, { useEffect, useRef, useState } from 'react';
import { swapArrayDown } from '../utilities/SwapArrayDown';
import { swapArrayUp } from '../utilities/SwapArrayUp';
import { deleteItemStateObject, deleteOrderStateObject } from '../utilities/DeleteItemStateObject';

  const TableDetailMain = (props) => {
    const { options, setdatafortable, optionorders, setdatafororder, showHideTable, setButtonDisable } = props;
    
    // let opts = null
    // // check if data return from existing invoice with several orders. If type is string => orders came back from old invoice
    // if (typeof options[0].length === 'string') {
    //   opts = options
    // }
    // else {
    //   opts = options[0]
    // }

    const onChange = (e, index) => {
      if(e.currentTarget.id === "up")
        swapArrayUp(index, options, setdatafortable)
      else if(e.currentTarget.id === "down")
        swapArrayDown(index, options, setdatafortable)
      else{
        deleteItemStateObject(index, options, setdatafortable, ShowHideTable, DisableSaveButton)     
        deleteOrderStateObject(index, optionorders, setdatafororder)  
      }
    }

    const ShowHideTable = ((objs) => {
      if(objs.length <= 0)
        showHideTable(false) 
    })

    const DisableSaveButton = ((objs) => {
      if(objs.length <= 0)
        setButtonDisable(true) 
    })
  
    return (
      <div className="container">
        <h3 className="title">Calculation Result Table</h3>
        <table>
          <thead>
            <tr>
              <th>Item#</th>
              <th>Width</th>
              <th>Length</th>
              <th>Hings</th>
              <th>Panel</th>
              <th>Mount</th>
              <th>Frame Size</th>
              <th>Frame</th>
              <th>Up</th>
              <th>Down</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option, index) => (
              <tr key={index}>
                <td>
                  <label>{index+1}</label>
                </td>
                <td>
                    <label>{option.width}</label>
                </td>
                <td>
                  <label>{option.length}</label>
                </td>
                <td>
                  <label>{option.hingeChoice}</label>
                </td>
                <td>
                  <label>{option.panel}</label>
                </td>
                <td>
                  <label>{option.mount.length === 0 ? "OM" : option.mount}</label>
                </td>
                <td>
                  <label>{option.frameSize}</label>
                </td>
                <td>
                  <label>{option.frame} </label>
                </td>
                <td>
                  <label className="material-symbols-outlined" id="up" onClick={(e) => onChange(e, index)}>arrow_circle_up</label>
                </td>
                <td>
                  <span className="material-symbols-outlined" id="down" onClick={(e) => onChange(e, index)}>arrow_circle_down</span>
                </td>
                <td>
                  <span className="material-symbols-outlined" id="delete" onClick={(e) => onChange(e, index)}>delete</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  export default TableDetailMain