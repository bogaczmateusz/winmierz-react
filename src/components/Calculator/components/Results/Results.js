import React from 'react';

export default function Results(props) {
    const { result } = props;
    return (
        <div className="calculator-results">
            <p>
                Gram / Litr: {result.gramPerLiter} g/l<br/>
                W moszczu znajduje się łącznie: {result.sugarTotal}g cukru<br/>
                Po przefermentowaniu: {result.alcoholTotal}%
            </p>
        </div>
    );
}
