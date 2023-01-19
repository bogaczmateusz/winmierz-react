import React from 'react';

import { Calculator } from './components/Calculator';

import './App.scss';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: '#d0354a',
        },
        tonalOffset: 0.11,
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Calculator />
            </ThemeProvider>
        </div>
    );
}

export default App;
