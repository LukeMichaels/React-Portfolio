import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      <h1>Hello World</h1>

      {/* Counter */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          count is {count}
        </button>
      </div>

      {/* Modal Toggle */}
      <button className="open-modal" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>Hello!</h2>
            <p>This is a modal component using React state.</p>
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;


// this code was included initially
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// 
// function App() {
  // const [count, setCount] = useState(0)
// 
  // return (
  //   <>
  //     <div>
  //       <a href="https://vite.dev" target="_blank">
  //         <img src={viteLogo} className="logo" alt="Vite logo" />
  //       </a>
  //       <a href="https://react.dev" target="_blank">
  //         <img src={reactLogo} className="logo react" alt="React logo" />
  //       </a>
  //     </div>
  //     <h1>Vite + React</h1>
  //     <div className="card">
  //       <button onClick={() => setCount((count) => count + 1)}>
  //         count is {count}
  //       </button>
  //       <p>
  //         Edit <code>src/App.jsx</code> and save to test HMR
  //       </p>
  //     </div>
  //     <p className="read-the-docs">
  //       Click on the Vite and React logos to learn more
  //     </p>
  //   </>
  // )
// }
// 
// export default App
