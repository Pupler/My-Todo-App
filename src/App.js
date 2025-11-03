import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');


  // Load from LocalStorage
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');

    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch {
        localStorage.removeItem('todos');
      }
    }
    
    console.log('LocalStorage got Todos!')
  }, []); // When the site reloads - load LocalStorage(todos)


  // Save to LocalStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('Todos updated!')
  }, [todos]); // When Todos changes - update LocalStorage


  // Add-Task Function
  const addToDo = () => {
    if (inputValue.trim() !== '') {
      const newToDo = {
        id: Date.now(),
        text: inputValue,
        completed: false // Must be later implemented
      };
      setTodos([...todos, newToDo]);
      setInputValue('');
    }
  };

  // Delete-Task Function
  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  // Confirmation Delete All
  const clearAll = () => {
    if (window.confirm("Are you sure you want to delete ALL tasks?")) {
      setTodos([]);
    }
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>To-Do List</h1>
        <div className='TaskLeft-Block'>
          <p>Tasks left: {todos.length}</p>
          <button className='Clear-All-Btn' onClick={clearAll}>Clear All</button>
        </div>
      </header>

      <div className="Add-ToDo">
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
          <div key={todo.id} className={`ToDo-Item ${todo.completed ? 'completed' : ''}`}>
            <span className='ToDo-Text'>{todo.text}</span>
            <div className='ToDo-Actions'>
              <button
              onClick={() => deleteToDo(todo.id)}
              className='Delete-Btn'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;