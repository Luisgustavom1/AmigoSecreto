import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import { ButtonOutlineStyle } from './styles';

interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: ReactNode;
  onClick: () => void;
}

const ButtonOutline = ({ children, onClick }: ButtonOutlineProps) => {
  return (
    <ButtonOutlineStyle
      onClick={onClick}
    >
      {children}
    </ButtonOutlineStyle>
  );
}

export default ButtonOutline;