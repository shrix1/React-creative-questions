import React, { FC } from "react";
import "./App.css";
import UndoRedo from "./questions/UndoRedo";
import Table from "./questions/Table";
import CheckBtn from "./questions/CheckBtn";
import SliderCircle from "./questions/SliderCircle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App: FC = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* current work Route is / (default)  */}
          <Route path="one" element={<UndoRedo />} />
          <Route path="two" element={<Table />} />
          <Route path="three" element={<CheckBtn />} />
          <Route path="/" element={<SliderCircle />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
