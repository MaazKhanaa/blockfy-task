import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'solid' | 'outline';
  href?: string;
}

export const Button: React.FC<ButtonProps> = React.memo(
  ({ text, onClick, type = 'button', variant = 'solid', href }) => {
    const buttonStyles =
      variant === 'solid'
        ? 'bg-primary text-white' // Solid background and white text
        : 'bg-transparent border border-primary text-primary'; // Transparent background with primary border and text

    // Conditionally render a button or a link
    if (href) {
      return (
        <Link
          to={href}
          className={`w-full rounded-full h-[40px] flex items-center justify-center ${buttonStyles}`}
        >
          {text}
        </Link>
      );
    }

    return (
      <button
        type={type}
        className={`w-full rounded-full h-[40px] ${buttonStyles}`}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
);
