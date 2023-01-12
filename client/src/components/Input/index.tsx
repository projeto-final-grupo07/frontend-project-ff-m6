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
  value?: any;
  defaultValue?: any;
}

function Input({
  type,
  label,
  placeholder,
  register,
  registerName,
  text,
  value,
  defaultValue,
}: IInputProps) {
  return (
    <InputContainer>
      <label>
        <StyledTitle fontSize='input-label' tag='p'>
          {label}
        </StyledTitle>
      </label>
      {text ? (
        <textarea
          defaultValue={defaultValue}
          value={value}
          placeholder={placeholder}
          {...register(registerName)}
        ></textarea>
      ) : (
        <input
          defaultValue={defaultValue}
          type={type}
          placeholder={placeholder}
          {...register(registerName)}
          value={value}
        />
      )}
    </InputContainer>
  );
}

export default Input;
