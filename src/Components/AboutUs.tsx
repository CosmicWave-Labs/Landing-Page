import { FC } from "react";
import OurTeam from "./OurTeam";
import Mision from "./Mision";
const AboutUs:FC = () => {
    return(
        <section className="w-full h-[250vh] bg-[#30244C] relative overflow-hidden">
            <div className="grid grid-cols-[50%_50%]">
                <div className="flex gap-6 items-start justify-end m-8">
                    <div className="bg-white w-60 mt-32 h-96 z-10">FOTON</div>
                    <div className="bg-white w-60 h-96">FOTON</div>
                </div>
                <div className="flex flex-col justify-start m-8 gap-7">
                    <h1 className=" text-3xl font-Poppins-Bold text-GreenText">¿Que es CWL?</h1>
                    <div className="flex gap-2">
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                    </div>
                    <p className="w-[60%] text-white font-Poppins-Extra-Light">Somos un equipo apasionado por la tecnología, dedicado a crear soluciones de software innovadoras que transforman la manera en que las empresas operan. Queremos convertirnos en un referente en el desarrollo de software personalizado, ayudando a nuestros clientes a superar desafíos complejos con soluciones de alto rendimiento.</p>
                    <a className="cursor-pointer font-Poppins-Bold text-[#005033] bg-GreenText w-[60%] text-center h-12 flex items-center justify-center rounded-lg text-xl">¡Empecemos a trabajar!</a>
                </div>
            </div>
            <OurTeam/>
            <Mision/>
        </section>
    )
}

export default AboutUs