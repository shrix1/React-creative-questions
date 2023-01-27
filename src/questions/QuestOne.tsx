import React, { FC, useState, MouseEvent } from "react";

interface Points {
  x: number;
  y: number;
}

const QuestOne: FC = () => {
  const [points, setPoints] = useState<Points[]>([]);
  const [remove, setRemove] = useState<Points[]>([]);

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPoints([...points, { x: clientX, y: clientY }]);
  };

  const handleUndo = () => {
    const removePts = [...points];
    const removed = removePts.pop();
    if (!removed) return;
    setPoints(removePts);
    setRemove([...remove, removed]);
  };

  const handleRedo = () => {
    const removePts = [...remove];
    const removed = removePts.pop();
    if (!removed) return;
    setRemove(removePts);
    setPoints([...points, removed]);
  };

  return (
    <main className="w-full h-screen text-white bg-slate-900 ">
      <div className=" flex justify-center align-center gap-10 pt-4">
        <button
          className=" border-white border p-2 rounded-md disabled:opacity-20"
          onClick={handleUndo}
          disabled={points.length === 0}
        >
          UNDO
        </button>
        <button
          className=" border-white border p-2 rounded-md disabled:opacity-20"
          onClick={handleRedo}
          disabled={remove.length === 0}
        >
          REDO
        </button>
      </div>

      <div
        className="w-full h-[90%] bg-slate-900 cursor-move"
        onClick={handleMouse}
      >
        {points.map((pts, idx) => (
          <div
            key={idx}
            className="border-2 border-cyan-400  w-[40px] h-[40px] rounded-full absolute"
            style={{ top: pts.y - 20 + "px", left: pts.x - 20 + "px" }}
          ></div>
        ))}
      </div>
    </main>
  );
};

export default QuestOne;
