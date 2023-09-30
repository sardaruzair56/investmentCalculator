import React, { useState } from "react";
import formClasses from './input.module.css';

const initialInput ={
  'current-savings' : 1000,
  'yearly-contribution' : 100,
  'expected-return': 7,
   duration : 1
}


const Input = (props) => {

  const [userInput, setUserInput] = useState(initialInput);
 
 
  const calculateHandler = (event) => {
    event.preventDefault();

   props.onCalculate(userInput);
  };

 
  const resetHandler = () => {
    setUserInput({initialInput})
  };

 
  const changeHandler = (input, value) => {
      setUserInput((prevInput)=>{
       return{
        ...prevInput,
        
        [input]: +value,
      };
    }
      );
  };


  return (
    <div>
      <form onSubmit={calculateHandler} className={formClasses.form}>
        <div className={formClasses['input-group']}>
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              onChange={(event) => {
                changeHandler("current-savings", event.target.value);
              }}
              value={userInput['current-savings']}
              type="number"
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              onChange={(event) => {
                changeHandler("yearly-contribution", event.target.value);
              }}
              value={userInput['yearly-contribution']}
              type="number"
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className={formClasses['input-group']}>
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              onChange={(event) => {
                changeHandler("expected-return", event.target.value);
              }}
              value={userInput['expected-return']}
              type="number"
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              onChange={(event) => {
                changeHandler("duration", event.target.value);
              }}
              value={userInput['duration']}
              type="number"
              id="duration"
            />
          </p>
        </div>
        <p className={formClasses.actions}>
          <button onClick={resetHandler} type="reset" className={formClasses.buttonAlt}>
            Reset
          </button>
          <button type="submit" className={formClasses.button}>
            Calculate
          </button>
        </p>
      </form>
    </div>
  );
};

export default Input;
