import { useReducer } from "react";
import { CalculatorState } from "./interfaces";
import "./styles.scss";
import { calculatorReducuer } from "./reducers/calculation.reducer";
import { buttons } from "./components/button.constants";
import Button from "./components/Button";

const initialState: CalculatorState = {
  current: "",
  previous: "",
  operand: "",
};

function App() {
  const [{ current, previous, operand }, dispatch] = useReducer(
    calculatorReducuer,
    initialState
  );

  return (
    <div className="calculator">
      <div className="result">
        <div className="result__previous">
          {previous}
          {operand}
        </div>
        <div className="result__current">{current}</div>
      </div>
      {buttons.map(({ key, sign, large, action }) => (
        <Button
          key={key}
          sign={sign}
          large={large}
          action={action}
          dispatch={dispatch}
        />
      ))}
    </div>
  );
}

export default App;
