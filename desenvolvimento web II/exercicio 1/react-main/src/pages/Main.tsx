import React from 'react';
import styled from 'styled-components';
import Imput from '../components/Input';

function Main() {
    return (
        <Wrapper>
            <Imput/>
            <Imput/>
            <Imput/>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    gap: 10px;
`

export default Main;
