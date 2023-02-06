import React, { useState } from "react";

type arrProps = {
  id: number;
  name: String;
  checking: boolean;
};

const arrays = [
  {
    id: 0,
    name: "one",
    checking: false,
  },
  {
    id: 1,
    name: "two",
    checking: false,
  },
  {
    id: 2,
    name: "three",
    checking: false,
  },
];

const CheckBtn: React.FC = () => {
  const [arr, setArr] = useState<arrProps[]>(arrays);

  const handleDelete = (ids: number, idx: number) => {
    //with ID
    // setArr(arr.filter((item) => item.id !== ids));

    //with INDEX
    const newArr = [...arr];
    newArr.splice(idx, 1);
    setArr(newArr);
  };

  const handleCheck = (idx: number) => {
    //doing with id is notPossible bcz of array shifts when ele deleted
    const newArr = [...arr];
    newArr[idx] = { ...newArr[idx], checking: !newArr[idx].checking };
    setArr(newArr);
  };

  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center text-2xl flex-col">
      <h1 className="text-3xl font-bold text-center">
        Check the box to enable delete Btn <br />
        to delete the item
      </h1>

      <ul className="mt-5">
        {arr.map((value, index) => (
          <li
            className="flex justify-center items-center w-[250px] h-[70px] gap-[20px] border-2 rounded-md mb-2
            border-black"
            key={index}
          >
            <input
              type="checkbox"
              className="w-8 h-8"
              onChange={() => handleCheck(index)}
            />

            <h1 className="font-bold">{value.name}</h1>

            {value.checking && (
              <button
                className="px-2 py-1 border-2 border-black bg-sky-600 rounded-md text-xl font-bold"
                onClick={() => handleDelete(value.id, index)}
              >
                delete
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CheckBtn;
