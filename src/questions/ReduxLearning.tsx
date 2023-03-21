import React, { useState } from "react";
import { increase, changeInfo } from "../features/counter";
import { useAppSelector, useAppDispatch } from "../store";

const ReduxLearning: React.FC = () => {
  const [value, setValue] = useState<string>();
  const [num, setNum] = useState<number>(0);

  const counter = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center bg-slate-900 w-screen h-screen space-x-10">
      <div className="flex flex-col space-y-4">
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          placeholder="text"
          className="p-2 outline-none rounded-md bg-gray-400 font-bold caret-white placeholder:text-black"
        />

        <input
          type="number"
          onChange={(e) => setNum(+e.target.value)}
          value={num}
          placeholder="number to add"
          className="p-2 outline-none rounded-md bg-gray-400 font-bold caret-white placeholder:text-black"
        />

        <button
          className="p-2 border-2 border-sky-600 bg-black text-center rounded-lg text-white"
          onClick={() => {
            dispatch(increase(num));
            dispatch(changeInfo(value));
          }}
        >
          Enter
        </button>
      </div>

      <div>
        <h1 className="text-2xl text-white">counter : {counter.num}</h1>
        <h1 className="text-2xl text-white">name : {counter.name || "shri"}</h1>
      </div>
    </div>
  );
};

export default ReduxLearning;
