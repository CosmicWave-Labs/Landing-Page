import { FC } from "react";
import Divider from "./Helpers/dividerComponent";

export const OurTeam:FC = () => {
    return(
        <section className="grid grid-rows-[1fr_3.5fr_1fr]">
            <Divider Rot={'rotate-[8.82deg]'}/>
            <div className="bg-[#30244C] w-full max-2xl:grid max-2xl:grid-cols-[0.4fr_0.4fr] max-2xl:gap-5 max-[770px]:flex max-[770px]:flex-col max-[770px]:items-center max-[770px]:justify-center">
                <h1 className="max-[1115px]:text-3xl text-5xl font-Poppins-Bold text-white flex items-center justify-center">Nuestro equipo</h1>
                <div className="flex gap-5 max-[770px]:px-20 max-[770px]:">
                    <p className="max-[1115px]:text-lg max-[785px]:text-sm text-xl font-Poppins-Extra-Light text-[#a3a3a3] flex items-center justify-center">La composicion de trabajo está compuesta por expertos en desarrollo de software, diseño UX/UI, análisis de datos, y gestión de proyectos.</p>
                    <p className="max-[1115px]:text-lg max-[785px]:text-sm text-xl font-Poppins-Extra-Light text-[#a3a3a3] flex items-center justify-center">Compartimos una pasión por la tecnología y un compromiso con la excelencia, trabajando juntos para entregar resultados excepcionales.</p>
                </div>
            </div>
            <Divider Rot={'rotate-[-8.82deg]'}/>
        </section>
    )
}

