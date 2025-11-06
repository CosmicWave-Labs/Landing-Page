import { FC } from "react";
import {OurTeam, Mision} from "./index";

export const AboutUs:FC = () => {
    return(
        <section className="w-full bg-[#192D54] relative overflow-hidden mb-12">
            <div className="grid grid-cols-[55%_45%] justify-center content-center max-[1114px]:flex max-[1114px]:flex-col-reverse">
                <div className="flex gap-6 items-start justify-end m-8 max-[1114px]:justify-center">
                    <div className="bg-white w-60 mt-32 h-96 z-10 max-[1114px]:mt-0">FOTON</div>
                    <div className="bg-white w-60 h-96 max-[1114px]:">FOTON</div>
                </div>
                <div className="flex flex-col justify-start m-8 gap-7 max-[1114px]:items-center max-[1114px]:text-center">
                    <h1 className=" text-3xl font-Poppins-Bold text-[#68BFED]">¿Que es CWL?</h1>
                    <div className="flex gap-2">
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                        <div className="bg-white w-4 h-7"></div>
                    </div>
                    <p className="w-[80%] text-white font-Poppins-Extra-Light">Somos un equipo apasionado por la tecnología, dedicado a crear soluciones de software innovadoras que transforman la manera en que las empresas operan. Queremos convertirnos en un referente en el desarrollo de software personalizado, ayudando a nuestros clientes a superar desafíos complejos con soluciones de alto rendimiento.</p>
                    <a className="cursor-pointer font-Poppins-Bold text-[#192D54] bg-[#68BFED] w-[60%] max-[1114px]:w-72 text-center h-12 flex items-center justify-center rounded-lg text-xl">¡Empecemos a trabajar!</a>
                </div>
            </div>
            <OurTeam/>
            <Mision/>
        </section>
    )
}
