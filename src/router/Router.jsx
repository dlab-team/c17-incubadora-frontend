import React from 'react';
import { Routes, Route } from "react-router-dom";
import  Home  from '../views/home';
import  Profile  from '../views/Profile';
import  Error  from '../views/Error';


const Router = () => {




  return (
    <>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/profile" element={ <Profile /> } />
            <Route path="*" element={ <Error /> } />
        </Routes>
    </>
  )
}

export default Router