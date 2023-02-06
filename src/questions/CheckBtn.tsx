import React, { useState } from "react";
import { CLIENT_RENEG_LIMIT } from "tls";

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

  console.log(arr);

  return (
    <div className="bg-gray-500 w-screen h-screen flex justify-center items-center text-2xl">
      <ul>
        {arr.map((value, index) => (
          <li
            className="flex justify-center items-center w-[250px] h-[100px] gap-[20px]"
            key={index}
          >
            <input
              type="checkbox"
              className="w-8 h-8 rounded-full outline-none"
              onChange={() => handleCheck(index)}
            />

            <h1 className="font-bold">{value.name}</h1>

            {value.checking && (
              <button
                className="p-2 border border-white bg-sky-600 rounded-md text-xl"
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
