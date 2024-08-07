import {FC} from 'react';
import { IoBulb, IoShieldCheckmark, IoCube } from "react-icons/io5";
import { FaHandshakeSimple, FaGear } from "react-icons/fa6";
import { IconType } from "react-icons";
import Objectives from "./ComponenteIconsHero";


interface ObjectivesData {
    Icon: IconType,
    Span: string,
    Color: string
}

const Hero:FC = () => {
    const HeroObjectivestData:ObjectivesData[] = [
        {Icon:IoBulb, Span:"Innovación continúa", Color:"text-[#FFEE07]"},
        {Icon:IoShieldCheckmark, Span:"Calidad y rendimiento", Color:"text-[#606AFF]"},
        {Icon:FaHandshakeSimple, Span:"Diversificación de productos", Color:"text-[#46F95B]"},
        {Icon:IoCube, Span:"Satisfacción del cliente", Color:"text-[#E71010]"},
        {Icon:FaGear, Span:"Automatización", Color:"text-[#8E8E8E]"},
    ]
    return(
        <div className=' w-full h-full flex flex-col justify-end items-center gap-8'>
            <div className=' w-[70%] h-2/4 grid grid-cols-[50%_50%]'>
                <div className=''>
                    <h1 className=' text-6xl text-white font-semibold leading-snug'>Transforma tu mundo digital con <span className='text-[#31E098]'> Cosmic Wave Labs</span></h1>
                    <br />
                    <p className=' text-[#a3a3a3] font-thin text-2xl'>Ofrecemos soluciones de software innovadoras que optimizan tu flujo de trabajo y potencian tu negocio.</p>
                </div>
                <div className='flex items-center justify-end'>
                    <div className=' w-80 h-80 bg-white rounded-full'>

                    </div>
                </div>
            </div>
            <div className='w-3/4 h-44 rounded-xl bg-[#231931] mb-12 flex items-center justify-around'>
                {HeroObjectivestData.map((data, index) => (
                    <Objectives
                        key={index}
                        Icon={data.Icon}
                        Span={data.Span}
                        Color={data.Color}
                    />
                ))}
            </div>
        </div>
    )
}

export default Hero