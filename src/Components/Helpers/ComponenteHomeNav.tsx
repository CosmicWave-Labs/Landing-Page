import {FC} from 'react'
import { GrLanguage } from "react-icons/gr";

const NavBar:FC=()=>{
    return(
        <header className=' bg-[#302444] w-full h-[10vh] grid grid-cols-[10%_60%_30%] gap-4 fixed'>
            <div className='flex items-center justify-center'>
                <div className=' bg-[#231931] w-14 h-14 rounded-lg'></div>
            </div>
            <div className='flex items-center justify-center gap-10'>
                <a href="" className=' text-white'>¿Que es CWL?</a>
                <a href="" className=' text-white'>Mision</a>
                <a href="" className=' text-white'>Servicios</a>
                <a href="" className=' text-white'>Proyectos</a>
            </div>
            <div className='flex gap-10 items-center justify-evenly'>
                <a href="" className=' text-[#31E098] bg-[#231931] p-2 font-bold rounded-md border border-[#453755]'>
                    Contactanos
                </a>
                <div className='w-10 h-10 rounded-xl bg-[#31E098] flex flex-col items-center justify-center text-[#005033] cursor-pointer'>
                    <GrLanguage/>
                    <p className=' text-xs font-semibold'>ESP</p>
                </div>
            </div>
        </header>
    )
}

export default NavBar