import React, { useState } from "react";

export default function TextForm(props) {
  const ConvertToUpper = () => {
    //    console.log("Buttn Clicked");
    setText(text.toUpperCase());
  };

  const handleChange = (event) => {
    // console.log("change event");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          id="myText"
          onChange={handleChange}
          rows="8"
        />
      </div>
      <button className="btn btn-primary" onClick={ConvertToUpper}>
        Convert To UpperCase
      </button>
    </div>
    <div className="container my-3">
      <h1>Details</h1>
      <p>words:{text.split(" ").length} and characters:{text.length} </p>
      <p>Time it will take to read the text: {0.008 * text.split(" ").length}</p>
      <p>Preview</p>
      <p>{text}</p>
    </div>
    </>
  );
}
