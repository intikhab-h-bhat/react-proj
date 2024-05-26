import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" />

      {/* <div className="container my-3">
        <TextForm heading="Enter the text to analyize"/>
      </div> */}

      <AboutUs/>
    </>
  );
}

export default App;
