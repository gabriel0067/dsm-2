import React from 'react';
import styled from 'styled-components'

interface ColorInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const ColorInput = ({ label, value, onChange, onKeyDown }: ColorInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = Math.max(0, Math.min(255, Number(e.target.value)));
    onChange(newValue);
  };

return (
  <Wrapper>
      <label>{label}</label>
      <input
        type="number"
        min={0}
        max={255}
        value={value}
        onChange={handleChange}
        onKeyDown={onKeyDown}
      />
    </Wrapper>
);
};

const Wrapper = styled.div`
display: flex;
flex-direction: column;
`

export default ColorInput;
