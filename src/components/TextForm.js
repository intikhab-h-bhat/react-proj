import React, { useState } from "react";

export default function TextForm(props) {
  const ConvertToUpper = () => {
    //    console.log("Buttn Clicked");
    setText(text.toUpperCase());
    props.showAlert("success","Converted to Upper case")
  };
  const ConvertToLower = () => {
    //    console.log("Buttn Clicked");
    setText(text.toLowerCase());
  };
  const ClearText = () => {
    setText("");
  };

  const CopyText = () => {
    let copyText = document.getElementById("myText");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  };

  const RemoveExtraSpaces = () => {
    // let newText = text.split(/[ ]+/);
    let newText = text.replace(/\s+/g, " ").trim();
    setText(newText);
  };

  const handleChange = (event) => {
    // console.log("change event");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text here");

  return (
    <>
      <div className="container" style={{
            color: props.mode === "dark" ? "white" : "black"
            }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            id="myText"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "gray",
              color: props.mode === "dark" ? "white" : "black"
            }}
            onChange={handleChange}
            rows="8"
          />
        </div>
        <button className="btn btn-primary mx-3" onClick={ConvertToUpper}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-3" onClick={ConvertToLower}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-3" onClick={ClearText}>
          Clear
        </button>
        <button className="btn btn-primary mx-3" onClick={CopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-3" onClick={RemoveExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>

      <div className="container my-3" style={{
            color: props.mode === "dark" ? "white" : "black"
            }}>
        <h1>Details</h1>
        <p>
          words:{text.split(" ").length} and characters:{text.length}{" "}
        </p>
        <p>
          Time it will take to read the text: {0.008 * text.split(" ").length}
        </p>
        <p>Preview</p>
        <p>{text.length>0?text:"Enter the text in textbox above to priview it."}</p>
      </div>
    </>
  );
}
