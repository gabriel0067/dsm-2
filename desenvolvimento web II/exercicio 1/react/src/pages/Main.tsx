import styled from 'styled-components';
import ColorInput from '../components/Input'; 
import { useColor } from '../contexts/Contexto'; 

const Main = () => {
    const { red, green, blue, setRed, setGreen, setBlue } = useColor();

    const bgColor = `rgb(${red}, ${green}, ${blue})`;

    return (
        <Wrapper>
            <BackgroundBox style={{ backgroundColor: bgColor }}>
                <ColorInput label="R" value={red} setValue={setRed} />
                <ColorInput label="G" value={green} setValue={setGreen} />
                <ColorInput label="B" value={blue} setValue={setBlue} />
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

const BackgroundBox = styled.div`
    padding: 40px;
    border-radius: 8px;
    display: flex;
    gap: px;
`;

export default Main;
