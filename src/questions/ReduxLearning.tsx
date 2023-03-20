import React from "react";
import { increase } from "../features/counter";
import { useAppSelector, useAppDispatch } from "../store";

const ReduxLearning: React.FC = () => {
  const counter = useAppSelector((state) => state.count.value);
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center bg-slate-900 w-screen h-screen flex-col space-y-2">
      <button
        className="p-7 border-2 border-sky-600 bg-black text-center rounded-lg text-xl text-white"
        onClick={() => dispatch(increase(null))}
      >
        Redux-toolKit
      </button>

      <h1 className="text-2xl text-white">counter : {counter}</h1>
    </div>
  );
};

export default ReduxLearning;
