import { InputContainer } from './style';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { StyledTitle } from '../../styles/typography';

interface IInputProps {
  type?: string;
  label: string;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
  text?: boolean;
}

function Input({ type, label, placeholder, register, registerName, text }: IInputProps) {
  return (
    <InputContainer>
      <label>
        <StyledTitle fontSize='input-label' tag='p'>
          {label}
        </StyledTitle>
      </label>
      {text ? (
        <textarea placeholder={placeholder} {...register(registerName)}></textarea>
      ) : (
        <input type={type} placeholder={placeholder} {...register(registerName)} />
      )}
    </InputContainer>
  );
}

export default Input;
