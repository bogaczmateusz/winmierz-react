import { Form } from './components/Form';
import './scss/calculator.scss';

export default function Calculator() {
    return (
        <div className="calculator">
            <h1 className="calculator-headline">Kalkulator <small>zawartości alkoholu w winie</small></h1>
            <div className="calculator-viewport">
                <Form />
            </div>
        </div>
    );
}
