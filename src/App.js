import React from 'react';

import { Calculator } from '@components/Calculator';

import './App.scss';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
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
