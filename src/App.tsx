import React, { useState } from "react";
import "./App.css";
import CalModel from "./components/Model/CalModel";
import * as CalView from "./components/View/CalView";
import CalController from "./components/Controller/CalController";

function App() {
  const [ValueOne, setValueOne] = useState("0");
  const [ValueTwo, setValueTwo] = useState("0");
  const [currentView, setCurrentView] = useState(() => {
    return <div> Try me</div>;
  });
  const Example = new CalModel();
  const ExampleController = new CalController(Example, CalView);

  const InputHandler = (
    event: React.FormEvent<HTMLInputElement>,
    flag: number
  ) => {
    event.preventDefault();
    if (flag) {
      setValueOne(event.currentTarget.value);
    } else {
      setValueTwo(event.currentTarget.value);
    }
  };
  const handleMath = () => {
    setCurrentView(
      ExampleController.DoMath(Number(ValueOne), Number(ValueTwo))
    );
  };
  return (
    <div className="App">
      <header className="App-header">
        MVC my Cal
        <input
          value={ValueOne}
          onChange={(e) => {
            InputHandler(e, 1);
          }}
        />
        <input
          value={ValueTwo}
          onChange={(e) => {
            InputHandler(e, 0);
          }}
        />
        <button
          onClick={() => {
            handleMath();
          }}
        >
          Do Math
        </button>
        {currentView}
      </header>
    </div>
  );
}

export default App;
