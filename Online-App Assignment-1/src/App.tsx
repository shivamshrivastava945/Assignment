import "./App.css";
import Login from "./components/basics/Login";
import Home from "./components/shared/Home";
import Instructions from "./components/basics/Instructions";
import Questions from "./components/basics/Questions";
import SummaryData from "./components/basics/SummaryData";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/instruction" element={<Instructions />} />
        <Route path="/question" element={<Questions />} />
        <Route path="/summary" element={<SummaryData />} />
      </Routes>
    </>
  );
}

export default App;
