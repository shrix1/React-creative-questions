import React, { FC } from "react";
import "./App.css";
import UndoRedo from "./questions/UndoRedo";
import Table from "./questions/Table";
import CheckBtn from "./questions/CheckBtn";
import SliderCircle from "./questions/SliderCircle";
import ReduxLearning from "./questions/ReduxLearning";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";

const App: FC = () => {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<ReduxLearning />} />
            <Route path="one" element={<UndoRedo />} />
            <Route path="two" element={<Table />} />
            <Route path="three" element={<CheckBtn />} />
            <Route path="four" element={<SliderCircle />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
};

export default App;
