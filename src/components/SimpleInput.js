import {useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;
  let formIsValid = false;

  if(enteredNameValid){
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) =>{
    event.preventDefault();

    setEnteredNameTouched(true);
    if(!enteredNameValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputBlurHandler = () =>{
    setEnteredNameTouched(true);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses }>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangeHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
