import React from 'react'


const Input =
  ({ placeholder, className, type , onChange, value,name } ) => {
    return (
      <div>
        <input 
        type={type} 
        value={value}
        name={name}
        className={className} 
        placeholder={placeholder} 
        onChange={onChange} />
      </div>
    )
  }


export default Input
