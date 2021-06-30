import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    enteredValue: enteredFirstName,
    hasError: firstNameHasError,
    valueChangedHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: firstNameReset
  } = useInput(value => value.trim() !== '');

  const {
    enteredValue: enteredLastName,
    hasError: lastNameHasError,
    valueChangedHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: lastNameReset
  } = useInput(value => value.trim() !== '');

  let formIsValid = false;

  if (!firstNameHasError && !lastNameHasError){
    console.log(firstNameHasError);
    console.log(lastNameHasError);
    console.log(formIsValid);
    formIsValid = true;
    console.log(formIsValid);
  }

  console.log(formIsValid);

  const submitFormHandler = (event) =>{
    event.preventDefault();
    firstNameReset();
    lastNameReset();
  }

  const firstNameInputClass =  firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClass =  lastNameHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={submitFormHandler}>
      <div className='control-group'>

        <div className={firstNameInputClass}>
          <label htmlFor='name'>First Name</label>
          <input 
            value = {enteredFirstName}
            type='text' 
            id='name' 
            onChange={firstNameChangedHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className='error-text'>Must enter a first name</p>}
        </div>
        
        <div className={lastNameInputClass}>
          <label htmlFor='name'>Last Name</label>
          <input 
            type='text' 
            id='name' 
            value={enteredLastName}
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className='error-text'>Must enter a last name</p>}
        </div>

      </div>

      <div className='form-control'>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='text' id='name' />
      </div>

      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>

    </form>
  );
};

export default BasicForm;
