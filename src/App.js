import logo from './logo.svg';
import './App.css';

function App() {
  const name="Latha";
  const date= new Date(2021,6,29);
  const tdy = date.toISOString();

  return (
    <div className="App">
      <h1 className='name'>My Name is: {name}</h1>
      <h1 className='date'>Today's Date: {tdy}</h1>
    
    </div>
    
  );
}

export default App;
