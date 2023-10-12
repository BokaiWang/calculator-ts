export interface CalculatorState {
  current: string;
  previous: string;
  operand: string;
}

export interface Action {
  type: string;
  payload?: { digit?: string; operand?: string };
}
