
import './App.css';
import React from 'react';
import LabelComp from './Component/LabelComp';

function App() {
  const name="Latha";
  const date= new Date(2021,6,29);
  const tdy = date.toISOString();

  return (
    <div className="App">
      {/* <h1 className='name'>My Name is: {name}</h1>
      <h1 className='date'>Today's Date: {tdy}</h1>
    <hr  />
   
    <hr /> */}
    <LabelComp data={name} today={tdy}/>
    </div>    
  );
}

export default App;

