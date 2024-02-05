import React from "react";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";
import SinJrsNoHaySeniors from "../components/SinJrsNoHaySeniors/SinJrsNoHaySeniors";
import { ComoFuncionamos } from "../components/ComoFuncionamos/ComoFuncionamos";

function Home() {
  return (
    <>
      <BannerPrincipal />
      <ComoFuncionamos />
      <SinJrsNoHaySeniors />
    </>
  );
}

export default Home;
