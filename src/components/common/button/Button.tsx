import React, { ButtonHTMLAttributes, MouseEventHandler } from 'react';

type Props = {
  text: string,
  className: string,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"]
}

export const Button = ({text, className, onClick, type="button"}: Props) => {
  return (
    <button
      className={className}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};
