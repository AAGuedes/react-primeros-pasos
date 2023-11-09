import { useState } from 'react'
import PropTypes from "prop-types";



export const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);

    const counterAdd = () => setCounter(counter + 1);
    const counterSubstract = () => setCounter(counter - 1);
    const counterReset = () => setCounter(value);

    return (
        <>
            <h1>CounterApp</h1>
            <h2>{counter}</h2>
            <button onClick={counterAdd}>
                +1
            </button>
            <button onClick={counterSubstract}>
                -1
            </button>
            <button aria-label="btn-reset" onClick={counterReset}>
                Reset
            </button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number,
}
