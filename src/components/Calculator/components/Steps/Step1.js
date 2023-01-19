import React from 'react';

import TextField from '@mui/material/TextField';

export default function Step1({ startBlg, handleChange }) {
    return (
        <div className="calculator-form-step">
            <div className="calculator-form-input">
                <p>1. Mierzymy BLG moszczu przed fermentacją - moszcz musi byc odcedzony z częsci stałych i miec przy pomiarze temperaturę 20°C:</p>
                <TextField
                    label="BLG"
                    type="number"
                    variant="outlined"
                    onChange={handleChange}
                    value={startBlg}
                    fullWidth
                    autoFocus
                />
            </div>
        </div>
    );
}
