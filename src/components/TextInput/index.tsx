import { Container, InputContainer, Input } from './style';
import { InputHTMLAttributes } from 'react';
import Image from 'next/image';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  label?: string;
  search?: boolean;
}

const TextInput = ({ name, label, search, ...rest }: InputProps) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <InputContainer>
        {search && <Image src="/icons/search.svg" alt="anyfin" width={20} height={20} />}
        <Input id={name} type="text" {...rest} />
      </InputContainer>
    </Container>
  );
};

export default TextInput;
