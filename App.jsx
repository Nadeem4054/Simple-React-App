import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {
      setTasks([...tasks, { id: Date.now(), text: inputValue, done: false }]);
      setInputValue('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🚀 My React App</h1>
        <p>Simple app with counter and task list</p>
      </header>

      <main className="container">
        {/* Counter Section */}
        <section className="card">
          <h2>Counter: {count}</h2>
          <div className="button-group">
            <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
              ➕ Increment
            </button>
            <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
              ➖ Decrement
            </button>
            <button className="btn btn-secondary" onClick={() => setCount(0)}>
              🔄 Reset
            </button>
          </div>
        </section>

        {/* Todo Section */}
        <section className="card">
          <h2>📝 Tasks</h2>
          <div className="input-group">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              placeholder="Add a new task..."
              className="input"
            />
            <button className="btn btn-primary" onClick={addTask}>
              Add
            </button>
          </div>

          <div className="task-list">
            {tasks.length === 0 ? (
              <p className="empty">No tasks yet! Add one to get started 🎯</p>
            ) : (
              tasks.map(task => (
                <div key={task.id} className={`task ${task.done ? 'done' : ''}`}>
                  <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => toggleTask(task.id)}
                    className="checkbox"
                  />
                  <span>{task.text}</span>
                  <button
                    className="btn-delete"
                    onClick={() => deleteTask(task.id)}
                  >
                    ✕
                  </button>
                </div>
              ))
            )}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React ⚛️</p>
      </footer>
    </div>
  );
}

export default App;
