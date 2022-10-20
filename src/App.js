import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard.jsx";
import Training from "./pages/Training.jsx";
import Header from "./components/Header";
import Dataentry from "./pages/Dataentry";
import Validation from "./pages/Validation.jsx";
import View from "./pages/View.jsx";


const App = () => {
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Training" element={<Training />} />
            <Route path="/Dataentry" element={<Dataentry />} />
            <Route path="/Validation" element={<Validation />} />
            <Route path="/View" element={<View />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>








  );
};


export default App;
