import React from 'react';

export function Input({ value, onChange, placeholder, name, type = 'text', className = '', onClick = ()=>{}}) {
  return (
    <input
      type={type}
      name={name}
      defaultValue={value}
      onChange={onChange}
	  onClick={onClick}
      placeholder={placeholder}
      className={`w-full border p-2 rounded mb-2 ${className}`}
    />
  );
}
