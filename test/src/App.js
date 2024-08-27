import logo from './logo.svg';
import './App.css';
import Input from './components/Input';
import { useState } from 'react';

function App() {

const [tasklist, setTasklist]=useState([]);
console.log(tasklist);
  return (
    <div className="App">
      <h1>To Do Board</h1>
      <Input tasklist={tasklist} setTasklist={setTasklist}/>

      <div>
        {tasklist.map((item,index)=>
        <li key={index}>{item}</li>
        )}
      </div>
    </div>
  );
}

export default App;
