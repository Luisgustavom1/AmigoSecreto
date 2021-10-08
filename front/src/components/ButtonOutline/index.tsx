import React, { ReactNode } from 'react';

import { ButtonOutlineStyle } from './styles';

interface ButtonOutlineProps {
  children: ReactNode
}

const ButtonOutline = ({ children }: ButtonOutlineProps) => {
  return (
    <ButtonOutlineStyle>
      {children}
    </ButtonOutlineStyle>
  );
}

export default ButtonOutline;