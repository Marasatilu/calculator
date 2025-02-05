import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MyNewComponent } from "./MyNewComponent";
import { CalculatorButton } from "./CalculatorButton";
import "./App.css";

function App() {
  const [currentValue, setCurrentValue] = useState("0");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "C") {
      console.log("me he reseteado");
      setCurrentValue("0");
      return;
    }

    const handleButtonClick = (buttonValue) => {
      if (buttonValue === "+-") {
        console.log("me he reseteado");
        setCurrentValue((currentValue * -1).toString());
        return;
      }}

      const setCurrentValue = (buttonValue) => {
        if (buttonValue === ".") {
          console.log("me he reseteado");
          if (currentValue === "0") {
           setCurrentValue((currentValue + "."));
          }
          else (currentValue === "."); {
            return;
          }
          return;
        }}

    if (currentValue === "0") {
      setCurrentValue(buttonValue);
    } else {
      console.log(currentValue, buttonValue);
      setCurrentValue(currentValue + buttonValue);
    }
  };


  return (
    <div className="calculator">
      <div className="calculator__result">{currentValue}</div>
      <div className="calculator__actions">
        <CalculatorButton value="C" onClick={handleButtonClick} />
        <CalculatorButton value="+-" onClick={handleButtonClick} />
        <CalculatorButton value="%" onClick={handleButtonClick} />
        <CalculatorButton value="/" onClick={handleButtonClick} />
        <CalculatorButton value="7" onClick={handleButtonClick} />
        <CalculatorButton value="8" onClick={handleButtonClick} />
        <CalculatorButton value="9" onClick={handleButtonClick} />
        <CalculatorButton value="X" onClick={handleButtonClick} />
        <CalculatorButton value="4" onClick={handleButtonClick} />
        <CalculatorButton value="5" onClick={handleButtonClick} />
        <CalculatorButton value="6" onClick={handleButtonClick} />
        <CalculatorButton value="-" onClick={handleButtonClick} />
        <CalculatorButton value="1" onClick={handleButtonClick} />
        <CalculatorButton value="2" onClick={handleButtonClick} />
        <CalculatorButton value="3" onClick={handleButtonClick} />
        <CalculatorButton value="+" onClick={handleButtonClick} />
        <CalculatorButton value="0" onClick={handleButtonClick} />
        <CalculatorButton value="." onClick={handleButtonClick} />
        <CalculatorButton value="=" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;
