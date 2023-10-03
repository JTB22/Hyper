import { useState } from "react";
import Lorem from "./components/lorem";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="header">
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <div className="body">
        <div className="card">
          <h2>Body Header</h2>
          <div className="card-body">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            {/* <Lorem /> */}
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
