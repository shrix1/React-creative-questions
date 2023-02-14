import React, { useState } from "react";

const SliderCircle: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const circeStyle = {
    background: `conic-gradient(#000 ${value}% 5%, white 5%)`,
  };

  return (
    <main className="w-screen h-screen bg-slate-800 flex justify-center items-center flex-col gap-3 text-white">
      <h1 className="text-3xl tracking-wider">
        <b>Slide the Slider</b> and see what happens
      </h1>

      <div>
        <input
          type="range"
          max="100"
          value={value}
          onChange={handleChange}
          className="w-[300px] h-[100px]"
        />
        <h1 className="-mt-10 ml-1"> {value}</h1>
      </div>

      <div
        style={circeStyle}
        className="w-[400px] h-[400px] rounded-full border-4 border-white"
      >
        <h1 className="text-center mt-[185px]">Hello u r awesome</h1>
      </div>
    </main>
  );
};

export default SliderCircle;
