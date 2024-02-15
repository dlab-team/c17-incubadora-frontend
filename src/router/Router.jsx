import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/home";
import Profile from "../views/Profile";
import Error from "../views/Error";
import Register from "../components/register/Register";
import ContactUs from "../components/contactUs/ContactUs";
import Login from "../components/login/Login";
import Formulario from "../views/Formulario";
import Profiles from "../components/profiles/Profiles";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrate" element={<Register />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/contactanos" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </>
  );
};

export default Router;
