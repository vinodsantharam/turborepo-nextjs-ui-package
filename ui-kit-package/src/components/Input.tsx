import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      className="px-4 py-2 border border-neutral rounded-box font-sans"
      {...props}
    />
  );
}; 