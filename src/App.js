import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import AboutUs from "./components/AboutUs";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert,setAlert]=useState(null);

  const ShowAlert=(type,msg)=>{
    setAlert({
        type:type,
        msg:msg      
      });
     
  }

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      ShowAlert("success","Darkmode enabled")
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("success","Light mode enabled")
      
    }
  };

  return (
    <>
      <Navbar
        title="TextUtils"
        aboutText="About"
        mode={mode}
        toggleMode={ToggleMode}
      />
    <Alert alert={alert} />

      <div className="container my-3">
        <TextForm heading="Enter the text to analyize" mode={mode} />
      </div>
      {/* <AboutUs/> */}
      
    </>
  );
}

export default App;
