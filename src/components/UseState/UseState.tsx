"use client";

import { useState } from "react";

//Notes:

// If we set the value to the 'same' value:
// After 'initial render' =>  component 'will not rerender'
// After 'rerender' =>  component will  rerender but only 'once'

const UseState = () => {
  const [count, setCount] = useState(0);

  console.log("UseState Render");

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <div className="flex items-center justify-between gap-5">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setCount((c) => c + 1)}
          >
            Increment
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setCount(5)}
          >
            Set 5
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={() => setCount(0)}
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

export default UseState;
