"use client";

import { useState } from "react";

const ParentOpt = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        {children}
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
          <b>
            If our state changes when we pass the Child component as a
            &lsquo;prop&lsquo;:
          </b>
          <br />

          <li>
            In <b>initial render</b> =&gt; Parent and child components{" "}
            <b>will render</b>
          </li>
          <li>
            {" "}
            After <b>state change</b> =&gt; only Parent componetn will re-render
            <br />
            in fact React will optimize the re-render for us knowing that the
            prop has to be refering to the same element before
          </li>
        </div>
      </div>
    </>
  );
};

export default ParentOpt;
