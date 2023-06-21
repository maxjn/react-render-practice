"use client";

import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Render");

  return (
    <>
      <div className="flex flex-col items-center gap-5">
        <Child />
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
            After <b>initial render</b> =&gt; Parent and child components{" "}
            <b>will not rerender</b>
          </li>
          <li>
            {" "}
            After <b>rerender</b> =&gt; only Parent componetn will rerender but
            only <b>once</b> <br />
            in fact the child component will go through the render process but
            because it is an unneccessary render ,it will not go through the
            commit process
          </li>
        </div>
      </div>
    </>
  );
};

export default Parent;
