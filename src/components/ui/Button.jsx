import React from 'react';

export function Button({name, children, onClick, className }) {
  return (
    <button
      onClick={() => onClick(name)}
      className={`btn btn-primary m-3 px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors ${className}`}
    >
      {children}
    </button>
  );
}