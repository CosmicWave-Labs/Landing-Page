import { FC } from "react";

export const Mision:FC = () => {
    return(
        <section className="flex items-center justify-center">
            <div className=" w-[300px] h-[370px] bg-white z-10 items-start p-5 justify-center flex flex-col">
                <h1 className="text-2xl font-Poppins-Light font-bold">Mision</h1>
                <p className="font-Poppins-Extra-Light text-sm">Consolidarnos como líderes en innovación tecnológica y proporcionar soluciones integrales que impulsen el éxito de nuestros clientes.</p>
            </div>
            <div className=" w-[300px] h-[430px] bg-[#B3B3B3] z-10 items-start p-5 justify-center flex flex-col">
            </div>
            <div className=" w-[300px] h-[370px] bg-white z-10 items-start p-5 justify-center flex flex-col">
                <h1 className="text-2xl font-Poppins-Light font-bold">Vision</h1>
                <p className="font-Poppins-Extra-Light text-sm">Facilitar propuestas efectivas y eficientes, asegurando que cada proyecto no solo cumpla con las expectativas, sino que las supere.</p>
            </div>
        </section>
    )
}