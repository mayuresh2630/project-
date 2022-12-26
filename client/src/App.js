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
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Induction from "./pages/Induction";
import Powerc from "./pages/Powerc";
import Storec from "./pages/Storec";
import FOc from "./pages/FOc";
import Matrix from "./pages/Matrix";

const App = () => {
  return (
    <div>
      <Header />
      
       
      

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Induction" element={<Induction/>} />
          <Route path="/Powerc" element={<Powerc/>} />
          <Route path="/Storec" element={<Storec/>} />
          <Route path="/FOc" element={<FOc/>} />
          <Route path="/Matrix" element={<Matrix/>} />
          

          
          <Route path="/Dashboard" >
            <Route
              path=""
              element={<Layout>
                <div className="bgimg">
                <div className="text" >
                  <h1>
              
                  WELCOME
                  <br />
                  TO <br />
                  ROSENBERGER'S DASHBOARD
                  </h1>
                 
                </div>
                </div>
                
                </Layout>
              }
            />
            {/* <Route path="Training" element={<Layout><Training /></Layout>} /> */}
            <Route path="Training"> 
            <Route path="" element={<Layout><Training /></Layout>} />

              <Route path=":dept" element={<Layout><Induction/></Layout>}/>
            </Route>
            <Route path="Dataentry" element={<Layout><Dataentry /> </Layout>} />
            <Route path="Validation" element={<Layout><Validation /></Layout>} />
            <Route path="View" element={<Layout><View /></Layout>} />
          </Route>
        </Routes>
        {/* <Route path="/" element={<Dashboard />} /> */}
        {/* <Route path="/Dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/Training" element={<Training />} />
            <Route path="/Dataentry" element={<Dataentry />} />
            <Route path="/Validation" element={<Validation />} />
            <Route path="/View" element={<View />} /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
