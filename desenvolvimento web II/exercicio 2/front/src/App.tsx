import React from 'react';
import Main from './pages/Main'; 
import { ColorProvider } from './contexts/Contexto'; 

function App() {
    return (
        <ColorProvider>
            <Main />
        </ColorProvider>
    );
}

export default App;
