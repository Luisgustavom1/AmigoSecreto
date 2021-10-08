import { ButtonHTMLAttributes } from 'react';
import { ContainerButton } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  children: string;
  icon?: any;
  click?: () => void;
}

const Button = ({ children, icon, click, ...rest }: ButtonProps) => {
  return (
    <ContainerButton
      onClick={click}
      {...rest}
    >
      {children}{icon}
    </ContainerButton>
  );
}

export default Button;