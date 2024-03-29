import React from 'react';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default function Step2({ type, handleTypeChange, handleAmountChange }) {
    return (
        <div className="calculator-form-step">
            <div className="calculator-form-input are-checkboxes">
                <p>2. Podajemy ilość nastawu w litrach, wybierając typ nastawu. Na podstawie tego obliczymy poprawkę BLG na niecukry:</p>
                <FormControl component="fieldset">
                    <RadioGroup aria-label="type" name="type" value={type} onChange={handleTypeChange}>
                        <FormControlLabel value="juice" control={<Radio color="primary" />} label="Moszcz" />
                        <FormControlLabel value="juice-with-water" control={<Radio color="primary" />} label="Moszcz + Woda" />
                    </RadioGroup>
                </FormControl>
                {type === 'juice' &&
                    <div className="calculator-form-row">
                        <TextField
                            label="Ilość nastawu w litrach"
                            name="amount"
                            type="number"
                            variant="outlined"
                            onChange={handleAmountChange}
                            inputProps={{
                                step: '.01'
                            }}
                            fullWidth
                        />
                    </div>
                }
                {type === 'juice-with-water' &&
                    <div className="calculator-form-row">
                        <span className="calculator-form-row-item">
                            <TextField
                                label="Ilość moszczu w litrach"
                                name="juice-amount"
                                type="number"
                                variant="outlined"
                                helperText='czystego soku'
                                onChange={handleAmountChange}
                                inputProps={{
                                    step: '.01'
                                }}
                                fullWidth
                            />
                        </span>
                        <span className="calculator-form-row-item">
                            <TextField
                                label="Ilość wody w litrach"
                                name="water-amount"
                                type="number"
                                variant="outlined"
                                helperText='użytej do rozpuszczenia'
                                onChange={handleAmountChange}
                                inputProps={{
                                    step: '.01'
                                }}
                                fullWidth
                            />
                        </span>
                    </div>
                }
            </div>
            <div className="calculator-form-submit">
                <Button variant="contained" color="primary" type="submit">Przelicz</Button>
            </div>
        </div>
    );
}
