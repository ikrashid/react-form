import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {enteredValue: enteredName, 
    hasError: nameInputHasError,
    valueIsValid: nameInputIsValid,
    valueChangedHandler: nameChangedHandler, 
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = useInput(value => value.trim() !== '');

  const {enteredValue: enteredEmail,
    hasError: emailInputHasError,
    valueIsValid: emailInputIsValid,
    valueChangedHandler: emailChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = useInput(value => value.trim().includes('@'));
    
  let formIsValid = false;

  if(nameInputIsValid && emailInputIsValid){
    formIsValid = true;
  }


  const formSubmitHandler = (event) =>{
    event.preventDefault();

    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';
  const emailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses }>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameChangedHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && <p className='error-text'>Name must not be empty</p>}
      </div>
      <div className={emailInputClasses}>
        <label  htmlFor="email">Your Email</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailChangedHandler} 
          onBlur={emailInputBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className='error-text'>Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
