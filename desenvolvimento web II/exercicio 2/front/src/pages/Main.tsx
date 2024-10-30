/* eslint-disable react-hooks/exhaustive-deps */
import styled from 'styled-components';
import ColorInput from '../components/Input'; 
import { useColor } from '../contexts/Contexto'; 
import { useEffect } from 'react';
import rgbService from "../services/RGB";

export function Main() {
    const { rgb, setColor } = useColor();
  
    const ultimoRGB = async () => {
      const lastRGB = await rgbService.get(undefined); 
    
      if ('error' in lastRGB) {
        console.error(lastRGB.error); 
        return; 
      }
    
      setColor(lastRGB.r, lastRGB.g, lastRGB.b);
    };
  
    useEffect(() => {ultimoRGB()}, []);
  
    const saveRGB = async () => {
      const result = await rgbService.save(rgb.r, rgb.g, rgb.b);
      if ('error' in result) console.error(result.error);
    };
  
    const save = (event:any) => {
      if (event.key === 'Enter' || event.key === 'Tab') saveRGB(); 
    };
  
    return (
        <Wrapper>
            <BackgroundBox rgb={rgb}>
            <ColorInput label="R" value={rgb.r} onChange={(value) => setColor(value, rgb.g, rgb.b)} onKeyDown={save} />
            <ColorInput label="G" value={rgb.g} onChange={(value) => setColor(rgb.r, value, rgb.b)} onKeyDown={save} />
            <ColorInput label="B" value={rgb.b} onChange={(value) => setColor(rgb.r, rgb.g, value)} onKeyDown={save} />
      </BackgroundBox>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f0f0;
`;

const BackgroundBox = styled.div<{ rgb: { r: number; g: number; b: number } }>`
    background-color: rgb(${({ rgb }) => `${rgb.r}, ${rgb.g}, ${rgb.b}`});
    padding: 40px;
    border-radius: 8px;
    display: flex;
    gap: 40px;
    color: rgb(${({ rgb }) => `${255-rgb.r}, ${255-rgb.g}, ${255-rgb.b}`});
`;

export default Main;
