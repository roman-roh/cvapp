import React from 'react';
import { useCVData } from "./../../providers/CVDataContext"; 

export function Input({ value, placeholder, name, type = 'text', className = '', onClick = ()=>{}}) {
  const { handleInputChange } = useCVData();

  return (
    <input
      type={type}
      name={name}
      defaultValue={value}
      onChange={handleInputChange}
	  onClick={onClick}
      placeholder={placeholder}
      className={`w-full border p-2 rounded mb-2 ${className}`}
    />
  );
}
