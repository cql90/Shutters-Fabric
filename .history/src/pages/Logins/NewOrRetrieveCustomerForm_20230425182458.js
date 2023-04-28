import React from 'react'

const NewOrRetrieveCustomerForm = () => {
  return (
    <div className="form-login-position">
      <h3>Create new order for existing Customer</h3>
      <TextBoxComponent label="Customer Name" name="customerName" type="text" placeholder="came" />
    </div>
  )
}

export default NewOrRetrieveCustomerForm
