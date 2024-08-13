import { FC } from "react";
import Divider from "./Helpers/dividerComponent";

const OurTeam:FC = () => {
    return(
        <section className="grid grid-rows-[1fr_3.5fr_1fr]">
            <Divider Rot={'rotate-[8.82deg]'}/>
            <div className="bg-[#30244C] w-full grid grid-cols-[0.4fr_0.2fr_0.2fr] gap-5">
                <h1 className="text-5xl font-Poppins-Bold text-white flex items-center justify-center">Nuestro equipo</h1>
                <p className=" text-xl font-Poppins-Extra-Light text-[#a3a3a3] flex items-center justify-center">La composicion de trabajo está compuesta por expertos en desarrollo de software, diseño UX/UI, análisis de datos, y gestión de proyectos.</p>
                <p className=" text-xl font-Poppins-Extra-Light text-[#a3a3a3] flex items-center justify-center">Compartimos una pasión por la tecnología y un compromiso con la excelencia, trabajando juntos para entregar resultados excepcionales.</p>
            </div>
            <Divider Rot={'rotate-[-8.82deg]'}/>
        </section>
    )
}

export default OurTeam;