import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import UserInput from './components/UserInput';
import Results from './components/Results';

function App() {
  const [ userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment:1200,
    expectedReturn: 6,
    duration: 10,
});

const inputIsValid = userInput.duration >= 1;

function handleChange(inputIdentifer, newValue){
  setUserInput(prevUserInput => {
      return{
          ...prevUserInput,
          [inputIdentifer]: +newValue
      };
  });
}
  return (
    <div>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange}/>
      { !inputIsValid && <p className='center
      '>Error: Please enter valid data !! </p>}
      { inputIsValid && <Results input={userInput} />}
      {/* <Results input={userInput}/> */}
    </div>
  
  );
}

export default App;
