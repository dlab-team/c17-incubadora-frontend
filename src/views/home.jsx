import React from "react";
import BannerPrincipal from "../components/BannerPrincipal/BannerPrincipal";

import SinJrsNoHaySeniors from "../components/SinJrsNoHaySeniors/SinJrsNoHaySeniors";
import { ComoFuncionamos } from "../components/ComoFuncionamos/ComoFuncionamos";
import Footer from "../components/footer/Footer";
import DevsafioSistema from "../components/DevsafioSistema/DevsafioSistema";

function Home() {
	return (
		<>
			<BannerPrincipal />
			<ComoFuncionamos />
			<SinJrsNoHaySeniors />
			<DevsafioSistema />
			<Footer />
		</>
	);
}

export default Home;
