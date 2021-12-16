import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/test" element={<h1>this is the test page</h1>} />
            <Route path="*" element={<h1>Error, page not found</h1>} />
          </Routes>
        </>
      </Router>
    </div>
  );
}

export default App;
