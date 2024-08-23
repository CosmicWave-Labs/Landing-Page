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
        {Icon:FaHandshakeSimple, Span:"Satisfacción del cliente", Color:"text-[#46F95B]"},
        {Icon:IoCube, Span:"Diversificación de productos", Color:"text-[#E71010]"},
        {Icon:FaGear, Span:"Automatización", Color:"text-[#8E8E8E]"},
    ]
    return(
        <div className=' w-full h-screen flex flex-col justify-end items-center gap-8'>
            <div className=' max-2xl:w-[70%] max-2xl:h-2/4 max-2xl:grid max-2xl:grid-cols-[50%_50%] max-[888px]:flex max-[888px]:flex-col max-[888px]:justify-center max-[888px]:items-center'>
                <div className=' flex flex-col items-center justify-center'>
                    <h1 className='text-4xl text-white font-Poppins-Bold leading-snug max-[888px]:hidden'>Transforma tu mundo digital con <span className='text-GreenText'> Cosmic Wave Labs</span></h1>
                    <br />
                    <h1 className='text-4xl text-GreenText font-Poppins-Bold leading-snug max-[888px]:block min-[889px]:hidden max-[516px]:text-2xl'>Cosmic Wave Labs</h1>
                    <h1 className='text-sm text-white font-Poppins-Extra-Light mb-3 leading-snug max-[888px]:block min-[889px]:hidden max-[516px]:text-xs'>Transforma tu mundo digital</h1>
                    <p className=' text-[#a3a3a3] font-thin font-Poppins-Extra-Light text-lg max-[888px]:hidden'>Ofrecemos soluciones de software innovadoras que optimizan tu flujo de trabajo y potencian tu negocio.</p>
                </div>
                <div className='flex items-center justify-end'>
                    <div className=' w-[280px] h-[280px] bg-white rounded-full max-[888px]:w-[250px] max-[888px]:h-[250px]'>

                    </div>
                </div>
            </div>
            <div className='w-[85%] h-44 rounded-xl bg-[#231931] mb-12 flex items-center justify-around font-Poppins-Extra-Light max-[888px]:h-36 max-[645px]:h-28 max-[404px]:h-24'>
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