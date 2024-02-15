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
import LoginMail from "../components/login/LoginMail";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/navbar/NavigationBar";

const Router = () => {
  return (
    <div className="contenedor-completo">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrate" element={<Register />} />
        <Route path="/profiles" element={<Profiles />} />
        <Route path="/contactanos" element={<ContactUs />} />
        <Route path="*" element={<Error />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/mail" element={<LoginMail />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
