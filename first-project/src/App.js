import './App.css';
import { useState } from 'react';
import laptop from './assets/laptop.png';
import Header from './components/Header.js';
import CoreConcept from './components/CoreConcept.js';
import TabButton from './components/TabButton.js';
import { EXAMPLES } from './data.js';

function App() {
  //const [ selectTopic, setselectedTopic ] = useState('components');
  const [ selectTopic, setselectedTopic ] = useState();
  function handleSelect(selectButton){
    //selectButton => 'component','js','html','css'
    setselectedTopic(selectButton);
    //console.log(selectTopic);
  }
 let tabContent = <p>Please select the topic!</p>
  if(selectTopic){
    tabContent=(
      <div id="tab-content">
        <h3>{EXAMPLES[selectTopic].title}</h3>
        <p>{EXAMPLES[selectTopic].description}</p>
        <pre>
          <code>
          {EXAMPLES[selectTopic].code}
          </code>
        </pre>
    </div>
  
    );
  }
  return (
   
    <div className="App">
     
      <Header /> 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <main>
        <ul>
          <CoreConcept 
            title="Java" 
            description="Java Programming Language."
            image={laptop}
            />
          <CoreConcept  title="Html" 
            description="Hypertext markup language"
            image={laptop}
          />
            <CoreConcept 
            title="Java" 
            description="Java Programming Language."
            image={laptop}
            />
          <CoreConcept  title="Html" 
            description="Hypertext markup language"
            image={laptop}
          />
        </ul>
      </main>
      <menu>
        <TabButton onSelect={() => handleSelect('components')}>Component</TabButton>
        <TabButton onSelect={() => handleSelect('js')}>Js</TabButton>
        <TabButton onSelect={() => handleSelect('html')}>Html</TabButton>
        <TabButton onSelect={() => handleSelect('css')}>Css</TabButton>
      </menu>
      {tabContent}
     
    </div>
  );
}

export default App;
