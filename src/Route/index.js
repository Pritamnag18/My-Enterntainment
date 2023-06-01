import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeContainer from '../Container/Home';
import FontContainer from '../Container/Front';

import HeaderComponents from "../Components/Header";
import FooterComponents from "../Components/Footer";

const RouterComponent = ()=>{
    return (
       <>
        <BrowserRouter>
        <HeaderComponents/>
        <Routes>

          <Route path="/" element={<HomeContainer/>} />
          <Route path="/font" element={<FontContainer/>} />

        </Routes>
        <FooterComponents/>
        </BrowserRouter>
       </>
    )
}
export default RouterComponent;