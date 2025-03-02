/*
Task 4: Parent and Child Components Using JSX (5 Points)
Modify App.js to:

Import the Greeting, UserInfo, and TaskComponent components.
Render them inside a single <div> (following JSX rules).
*/

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './Greeting.jsx'
import UserInfo from './UserInfo.jsx'
import TaskComponent from './TaskComponent.jsx'
import TaskForm from './TaskForm.jsx'

function handleAlert() {
  alert("It is time to do your task!");
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Greeting username="Nick"/>
        <UserInfo handleClick={handleAlert}/>
        <TaskComponent />
        <TaskForm />
      </div>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          <p>Click Me</p>
        </button>
        <p>(Clicking the button increases the count)</p>
      </div>
      {/*
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      */}
    </>
  )
}

export default App
