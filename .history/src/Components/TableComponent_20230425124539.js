import React, { useEffect, useRef, useState } from 'react';
import { swapArrayDown } from '../utilities/SwapArrayDown';
import { swapArrayUp } from '../utilities/SwapArrayUp';
import { deleteItemStateObject } from '../utilities/DeleteItemStateObject';

  const TableDetailMain = (props) => {
    const { options, setdatafortable, showHideTable, setButtonDisable } = props;
    
    const onChange = (e, index) => {
      if(e.currentTarget.id === "up")
        swapArrayUp(index, options, setdatafortable)
      else if(e.currentTarget.id === "down")
        swapArrayDown(index, options, setdatafortable)
      else{
        deleteItemStateObject(index, options, setdatafortable, ShowHideTable, setButtonDisable)        
      }
    }

    const ShowHideTable = ((objs) => {
      if(objs.length <= 0)
        showHideTable(false) 
    })

    const DisableSaveButton = ((objs) => {
      if(objs.length <= 0)
        setButtonDisable(false) 
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
              <th>Outside Frame</th>
              <th>Inside Frame</th>
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
                  <label>{option.hingsChoice}</label>
                </td>
                <td>
                  <label>{option.panel}</label>
                </td>
                <td>
                  <label>{option.outsideFrame}</label>
                </td>
                <td>
                  <label>{option.insideFrame}</label>
                </td>
                <td>
                  <label>{option.numOfFrame} </label>
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