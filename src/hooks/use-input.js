import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue)//call prop method from component ;
    const hasError = !valueIsValid && isTouched;

    const valueChangedHandler = (event) =>{
        setEnteredValue(event.target.value);
    }
    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }
    
    const reset = () =>{
        setEnteredValue('');
        setIsTouched(false);
    }

    return { 
        enteredValue,
        hasError,
        valueChangedHandler,
        inputBlurHandler,
        reset
    }
}

export default useInput;