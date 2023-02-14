import React, { useState } from "react";

const SliderCircle: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  const circeStyle = {
    background: `conic-gradient(black ${value}% 5%, white 5%)`,
  };

  return (
    <main className="w-screen h-screen bg-slate-800 flex justify-center items-center flex-col gap-7">
      <h1 className="text-3xl text-white">
        Use Slider to fill the black color in the circle
      </h1>
      <input
        type="range"
        max="100"
        value={value}
        onChange={handleChange}
        className="w-[300px] h-[100px]"
      />

      <div
        style={circeStyle}
        className="w-[400px] h-[400px] rounded-full border-2 border-white"
      >
        <h1 className="text-center text-white mt-[185px]">Hello u r awesome</h1>
      </div>
    </main>
  );
};

export default SliderCircle;
