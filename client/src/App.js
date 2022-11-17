import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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

const App = () => {
  const [loggedIn] = useState(true)
  

  
  return (
    <div>
      <Header />

      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Login/>}/>
           
        
          <Route path="/Register" element={<Register/>} >
            
          
          </Route>
          <Route path="/Dashboard" >
          
          
          
            <Route
              path=""
              element={<Layout>
                <div style={{textAlign:"center",fontSize:"100px",margin:"10%",width:"100%"}}>
                  WELCOME
                  <br />
                  TO <br />
                  ROSENBERGER'S DASHBOARD
                </div>
                </Layout>
              }
            />
            <Route path="Training" element={<Layout><Training /></Layout>} />
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
