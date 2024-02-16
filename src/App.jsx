import React from "react";
import './App.css';
import Form from "./components/Form";
import Footer from "./components/Footer";

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
      <Footer />
    </div>
  )
}

export default App
