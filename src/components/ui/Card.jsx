import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode; 
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`shadow-lg rounded-lg p-6 bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;
