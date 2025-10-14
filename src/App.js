import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
      </header>

      <div class="Add-ToDo">
        <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder='New task...'
        />
        <button>Add task</button>
      </div>

      <div className='ToDo-List'>
        {/* Tasks here */}
      </div>
    </div>
  );
}

export default App;
