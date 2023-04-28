
import React from 'react'
import { useState } from 'react'

export default function FormatPhoneNumber() {
    const [inputValue, setInputValue] = useState('');
    const handelInput = e => {
        const formatedNumber = formatNumber(e.target.value)
        setInputValue(formatedNumber);
    }
  return (
    <input onChange={e => handelInput(e)} value={inputValue} />
  )
}

function formatNumber(value){
    if(!value) return value;
    const phoneNumber = value.replace("/[^\d]/g", "");
    const phoneNumberLength = phoneNumber.length;
    if(phoneNumberLength < 4) return phoneNumber;
    if(phoneNumberLength < 7){
        return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
}

