import { Action } from "../interfaces";
import {
  ADD_DIGIT,
  ADD_OPERAND,
  ADD_POINT,
  ALL_CLEAR,
  DELETE,
  EQUAL,
} from "../reducers/calculation.action";

interface Button {
  key: string;
  sign: string | number;
  large?: boolean;
  action: Action;
}

export const buttons: Button[] = [
  {
    key: "ac",
    sign: "AC",
    large: true,
    action: {
      type: ALL_CLEAR,
    },
  },
  {
    key: "del",
    sign: "DEL",
    action: {
      type: DELETE,
    },
  },
  {
    key: "divide",
    sign: "÷",
    action: {
      type: ADD_OPERAND,
      payload: { operand: "÷" },
    },
  },
  {
    key: "1",
    sign: 1,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "1" },
    },
  },
  {
    key: "2",
    sign: 2,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "2" },
    },
  },
  {
    key: "3",
    sign: 3,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "3" },
    },
  },
  {
    key: "*",
    sign: "*",
    action: {
      type: ADD_OPERAND,
      payload: { operand: "*" },
    },
  },
  {
    key: "4",
    sign: 4,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "4" },
    },
  },
  {
    key: "5",
    sign: 5,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "5" },
    },
  },
  {
    key: "6",
    sign: 6,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "6" },
    },
  },
  {
    key: "+",
    sign: "+",
    action: {
      type: ADD_OPERAND,
      payload: { operand: "+" },
    },
  },
  {
    key: "7",
    sign: 7,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "7" },
    },
  },
  {
    key: "8",
    sign: 8,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "8" },
    },
  },
  {
    key: "9",
    sign: 9,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "9" },
    },
  },
  {
    key: "-",
    sign: "-",
    action: {
      type: ADD_OPERAND,
      payload: { operand: "-" },
    },
  },
  {
    key: ".",
    sign: ".",

    action: {
      type: ADD_POINT,
      payload: { digit: "." },
    },
  },
  {
    key: "0",
    sign: 0,
    action: {
      type: ADD_DIGIT,
      payload: { digit: "0" },
    },
  },
  {
    key: "=",
    sign: "=",
    large: true,
    action: {
      type: EQUAL,
    },
  },
];
