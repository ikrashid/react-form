import {useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameValid && enteredNameTouched;
  const enteredEmailValid = enteredEmail.includes('@');
  const emailInputIsInvalid = !enteredEmailValid && enteredEmailTouched;

  let formIsValid = false;

  if(enteredNameValid && enteredEmailValid){
    formIsValid = true;
  }

  const nameInputChangeHandler = (event) =>{
    setEnteredName(event.target.value);
  }

  const formSubmitHandler = (event) =>{
    event.preventDefault();

    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);
    if(!enteredNameValid || !enteredEmailValid){
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
    setEnteredEmail('');
    setEnteredEmailTouched(false);
  }

  const nameInputBlurHandler = () =>{
    setEnteredNameTouched(true);
  }

  const emailInputChangeHandler = (event) =>{
    setEnteredEmail(event.target.value);
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputIsInvalid ? 'form-control invalid' : 'form-control';

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
      <div className={emailInputClasses}>
        <label  htmlFor="email">Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangeHandler} 
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputIsInvalid && <p className='error-text'>Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
