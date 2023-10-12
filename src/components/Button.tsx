import { FC } from "react";
import { Action } from "../interfaces";

interface Props {
  sign: string | number;
  dispatch: (action: Action) => void;
  large?: boolean;
  action: Action;
}

const Button: FC<Props> = ({ sign, dispatch, large, action }) => {
  return (
    <button
      onClick={() => dispatch(action)}
      className={`btn ${large ? "btn--span-two" : ""}`}
    >
      {sign}
    </button>
  );
};

export default Button;
