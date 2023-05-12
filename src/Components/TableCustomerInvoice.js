import React from 'react';

  const TableCustomerInvoice = (props) => {
    const { options, setcustinv, setshowradiobuttons } = props;
    
    // 
    const onChange = (e, invoice_id) => {
      setcustinv(invoice_id)
      setshowradiobuttons(true)
      sessionStorage.setItem('single_customer_invoice', JSON.stringify(options.find(obj => obj.invoice_id === invoice_id)))
    }
  
    return (
      <div className="container-fluid">
        <h3 className="title">Customer</h3>
        <table>
          <thead>
            <tr>
              <th>Invoice</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>City</th>
              <th>State</th>
              <th>Zip</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {options.map((option, index) => (
              <tr key={option.invoice_id} onClick={(e) => onChange(e, option.invoice_id)}>
                <td>
                    <label>{option.invoice_id}</label>
                </td>
                <td>
                    <label>{option.customer_first_name}&nbsp;{option.customer_last_name}</label>
                </td>
                <td>
                  <label>{option.customer_phone}</label>
                </td>
                <td>
                  <label>{option.customer_address}</label>
                </td>
                <td>
                  <label>{option.customer_city}</label>
                </td>
                <td>
                  <label>{option.customer_state}</label>
                </td>
                <td>
                  <label>{option.customer_zip_code}</label>
                </td>
                <td>
                  <label>{option.customer_country} </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  export default TableCustomerInvoice