import { Action, CalculatorState } from "../interfaces";
import {
  ADD_DIGIT,
  ADD_OPERAND,
  ADD_POINT,
  ALL_CLEAR,
  DELETE,
  EQUAL,
} from "./calculation.action";

export const calculatorReducuer = (
  state: CalculatorState,
  action: Action
): CalculatorState => {
  switch (action.type) {
    case ADD_DIGIT:
      return {
        ...state,
        current: `${state.current === "0" ? "" : state.current}${
          action.payload!.digit
        }`,
      };
    case ADD_POINT:
      return {
        ...state,
        current: state.current.includes(".")
          ? state.current
          : `${state.current}${action.payload!.digit}`,
      };
    case ADD_OPERAND:
      return {
        ...state,
        previous: state.current,
        current: "0",
        operand: action.payload!.operand!,
      };
    case EQUAL:
      let output: number = 0;

      if (state.operand === "*") {
        output = Number(state.previous) * Number(state.current);
      }
      if (state.operand === "+") {
        output = Number(state.previous) + Number(state.current);
      }
      if (state.operand === "-") {
        output = Number(state.previous) - Number(state.current);
      }
      if (state.operand === "÷") {
        output = Number(state.previous) / Number(state.current);
      }

      return {
        current: String(output),
        previous: "",
        operand: "",
      };
    case DELETE:
      return {
        ...state,
        current: state.current.slice(0, state.current.length - 1),
      };
    case ALL_CLEAR:
      return { current: "0", previous: "", operand: "" };

    default:
      return state;
  }
};
