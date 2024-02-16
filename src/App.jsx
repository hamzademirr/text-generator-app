import React from "react";
import './App.css';
import Form from "./components/Form";

import { selectParas } from "./redux/paras";
import { useSelector } from "react-redux";
function App() {
  const getParas = useSelector(selectParas);
  return (
    <div id="container">
      <h1>React sample text generator app</h1>
      <hr />
      <Form />
      <div className="output-paras">
        {getParas.split("\n").map((para, index) => (
          <p key={index}>{para}</p>
        ))}
      </div>
    </div>
  )
}

export default App
