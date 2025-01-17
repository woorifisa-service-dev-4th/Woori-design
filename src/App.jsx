import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { WooriFloatButton } from "./lib/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <WooriFloatButton
          type="primary"
          tooltip="Primary Button"
          position={{ bottom: "40px", left: "30px" }}
        />
        <WooriFloatButton
          type="error"
          shape="circle"
          tooltip="Primary Button"
          badge={{ count: 5 }}
          position={{ top: "20px", right: "20px" }}
        />

        <WooriFloatButton
          type="warn"
          shape="rounded-square"
          tooltip="Warning Button"
          badge={{ count: 2 }}
          position={{ bottom: "80px", right: "20px" }}
        />
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
    </>
  );
}

export default App;
