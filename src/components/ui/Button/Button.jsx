import React from 'react';

export function Button({name, children, onClick, className }) {
  return (
    <button
      onClick={() => onClick(name)}
      className={`btn btn-primary m-3 px-4 py-2 rounded-md bg-gray-400 text-white hover:bg-blue-400 transition-colors ${className}`}>
      {children}
    </button>
  );
}