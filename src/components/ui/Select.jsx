import React from 'react';

export function Select({ value, onChange, name, options = [], className, placeholder }) {
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      className={`m-3 px-4 py-2 rounded-md border border-grey-300 focus:ring-2 focus:ring-blue-400 transition-all ${className}`}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, i) => (
        <option key={i} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
