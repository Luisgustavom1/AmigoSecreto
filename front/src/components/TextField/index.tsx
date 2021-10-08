import { InputHTMLAttributes, ReactNode } from 'react';
import { Label, InputContainer } from './styles';

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children: ReactNode;
  placeholder: string;
}

const TextField = ({ label, placeholder, children, ...rest }: InputContainerProps) => {
  return (
    <div className='textField'>
      <Label>{label}</Label>
      <InputContainer>
        <input 
          {...rest}
          placeholder={placeholder}
        />
        {children}
      </InputContainer>
    </div>
  )
}

export default TextField;