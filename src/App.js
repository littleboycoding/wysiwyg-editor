import "./App.css";
import React, { useState } from "react";
import ContentEditable from "react-contenteditable";

function App() {
  const [text, setText] = useState("");

  const handle = (event) => {
    setText(event.target.value);
  };

  const bold = (event) => {
    document.execCommand("bold");
    event.preventDefault();
  };
  const italic = (event) => {
    document.execCommand("italic");
    event.preventDefault();
  };
  const underline = (event) => {
    document.execCommand("underline");
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="toolbar">
        <button id="bold" onClick={bold}>
          B
        </button>
        <button id="italic" onClick={italic}>
          I
        </button>
        <button id="underline" onClick={underline}>
          U
        </button>
      </div>
      <ContentEditable className="editor" html={text} onChange={handle} />
    </div>
  );
}

export default App;
