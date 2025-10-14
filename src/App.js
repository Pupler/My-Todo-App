import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState([]);


  // Add-Task Function
  const addToDo = () => {
    if (inputValue.trim() !== '') {
      const newToDo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      setTodos([...todos, newToDo]);
      setInputValue('');
    }
  };

  // Delete-Task Function
  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }


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
        onKeyDown={(e) => e.key === 'Enter' && addToDo()}
        />
        <button onClick={addToDo}>Add task</button>
      </div>

      <div className='ToDo-List'>
        {todos.map(todo => (
          <div key={todo.id} className='ToDo-Item'>
            <span className='ToDo-Text'>{todo.text}</span>
            <button
            onClick={() => deleteToDo(todo.id)}
            className='Delete-Btn'
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
