import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState,useRef } from "react";

import Alert from "./components/Alert";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState("Hellooo");

  const ShowAlert = (type, msg) => {
    setAlert({
      type: type,
      msg: msg,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const ToggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      ShowAlert("success", "Darkmode enabled");
      // document.title = "Text Anaylizer - Darkmode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      ShowAlert("success", "Light mode enabled");
      // document.title = "Text Anaylizer - Lightmode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About"
          mode={mode}
          toggleMode={ToggleMode}
        />
        <Alert alert={alert} />

        <div className="container my-3">
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
          <Route
             exact path="/"
              element={
                <TextForm
                  showAlert={ShowAlert}
                  heading="Enter the text to analyize"
                  mode={mode}
                />
              }
            />
            <Route exact path="/aboutus" element={<AboutUs mode={mode}/>} />
           
          </Routes>
        </div>
      </Router>
      {/* <AboutUs/> */}
    </>
  );
}

export default App;
