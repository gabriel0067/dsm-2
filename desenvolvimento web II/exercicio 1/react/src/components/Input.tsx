import React from 'react';
import styled from 'styled-components'

interface ColorInputProps {
  label: string;
  value: number;
  setValue: (value: number) => void;
}

const Input = styled.input`
  width: 40px;
  margin: 5px;
`;

const ColorInput = ({ label, value, setValue }: ColorInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Math.max(0, Math.min(255, Number(e.target.value)));
    setValue(newValue);
  };

  return (
    <div>
      <label>{label}: </label>
      <Input type="number" value={value} onChange={handleChange} />
    </div>
  );
};

export default ColorInput;
