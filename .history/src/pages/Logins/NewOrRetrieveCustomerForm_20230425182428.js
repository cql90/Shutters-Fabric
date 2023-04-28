import React from 'react'

const NewOrRetrieveCustomerForm = () => {
  return (
    <div className="form-login-position">
      <h3>Create new order for existing Customer</h3>
      <TextBoxComponent label="First Name" name="firstName" type="text" placeholder="Jane" />
    </div>
  )
}

export default NewOrRetrieveCustomerForm
