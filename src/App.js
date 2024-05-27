import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React,{ useState } from "react";
// import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("dark");

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor="gray"
    } else {
      setMode("light");
      document.body.style.backgroundColor="white"
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode = {mode}
        toggleMode={ToggleMode}
      />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyize" mode={mode}/>
      </div>

      {/* <AboutUs/> */}
    </>
  );
}

export default App;
