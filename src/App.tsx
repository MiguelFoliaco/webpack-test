import { useState } from 'react';
import './styles.css';
export const App = () => {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState('');

    const handleClick = () => {
        setCounter(counter + 1);
        setValue(value.concat(`-${counter}`))
    }

    return (
        <div className='div'>
            <h2>
                counter {counter}
            </h2>
            <h3>Values: {value}</h3>

            <button onClick={handleClick}>Add</button>
        </div>
    )
}
