import React from 'react';

export function Input({ value, onChange, placeholder, name, type = 'text', className = '' }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full border p-2 rounded mb-2 ${className}`}
    />
  );
}
