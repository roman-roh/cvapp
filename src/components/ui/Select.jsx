import React from 'react';

import { useCVData } from "./../../providers/CVDataContext"; 


export function Select({ value, onChange, name, options = [], className, placeholder }) {
  const {handleInputChange} = useCVData();

  return (
    <select
      name={name}
      value={value}
      onChange={onChange ? onChange : handleInputChange}
      className={`m-3 px-4 py-2 rounded-md border border-grey-300 focus:ring-2 focus:ring-blue-400 transition-all ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.label ? option.label : option.value} 
        </option>
      ))}
    </select>
  );
}
