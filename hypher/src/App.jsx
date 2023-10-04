import { useState } from "react";
import Lorem from "./components/lorem";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <div className="header">
        <div className="logo-container">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </div>
        <nav>
          <a href="">test</a>
          <a href="">test</a>
          <a href="">test</a>
        </nav>
      </div>
      <div className="body">
        <div className="card">
          <h2>Body Header</h2>
          <div className="card-body">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <Lorem />
          </div>
        </div>
      </div>
      <div className="footer">footer</div>
    </div>
  );
}

export default App;
