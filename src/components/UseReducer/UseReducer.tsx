"use client";

import { useReducer } from "react";

//Notes:

// If we set the value to the 'same' value:
// After 'initial render' =>  component 'will not rerender'
// After 'rerender' =>  component will  rerender but only 'once'

enum ACTION {
  INCREMENT = "increment",
  DECREMENT = "decrement",
  RESET = "reset",
}

const UseReducer = () => {
  const initialState = 0;

  const reducer = (state: number, action: ACTION) => {
    switch (action) {
      case ACTION.INCREMENT:
        return state + 1;
      case ACTION.DECREMENT:
        return state - 1;
      case ACTION.RESET:
        return initialState;

      default:
        return state;
    }
  };

  console.log("UseReducer Render");

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-between gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => dispatch(ACTION.INCREMENT)}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => dispatch(ACTION.DECREMENT)}
          >
            Decrement
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => dispatch(ACTION.RESET)}
          >
            Reset
          </button>
        </div>
        <div>Count - {count}</div>
        <div>
          <b>If we set the value to the &lsquo;same&lsquo; value:</b>
          <br />

          <li>
            After <b>initial render</b> =&gt; component <b>will not rerender</b>
          </li>
          <li>
            {" "}
            After <b>rerender</b> =&gt; component will rerender but only{" "}
            <b>once</b>
          </li>
        </div>
      </div>
    </>
  );
};

export default UseReducer;
