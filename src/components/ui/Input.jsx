import React from 'react';

export function Input({ value, onChange, placeholder, name, type = 'text', className }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`m-3 px-4 py-2 rounded-md border border-grey-300 focus:ring-2 focus:ring-blue-400 transition-all ${className}`}
    />
  );
}
