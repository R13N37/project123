import React from "react";
import { Routes, Route} from "react-router-dom";

import AboutUs from './pages/AboutUs/AboutUs'
import Contact from './pages/Contact/Contact'
import Domotica from './pages/Domotica/Domotica'
import HomePage from "./pages/Home/HomePage";
import Hotel from './pages/Hotel/Hotel'
import SuperBonus from "./pages/SuperBonus/SuperBonus";

function App() {
  return (

        <Routes>
          <Route path="/" element={<HomePage></HomePage>}></Route>
          <Route path="/domotica" element={<Domotica></Domotica>}></Route>
          <Route path="/hotel" element={<Hotel></Hotel>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="/aboutUs" element={<AboutUs></AboutUs>}></Route>
          <Route path="/superbonus" element={<SuperBonus></SuperBonus>}></Route>
        </Routes>
 
  );
}

export default App;
