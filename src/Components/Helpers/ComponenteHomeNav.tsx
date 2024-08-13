import {FC} from 'react'
import { GrLanguage } from "react-icons/gr";

const NavBar:FC=()=>{
    return(
        <header className=' bg-secondary w-full h-[10vh] grid grid-cols-[10%_60%_30%] gap-4 fixed shadow-2xl'>
            <div className='flex items-center justify-center'>
                <div className=' bg-main w-14 h-14 rounded-lg'></div>
            </div>
            <div className='flex items-center justify-center gap-10'>
                <a href="" className=' text-NormalWhite'>¿Que es CWL?</a>
                <a href="" className=' text-NormalWhite'>Mision</a>
                <a href="" className=' text-NormalWhite'>Servicios</a>
                <a href="" className=' text-NormalWhite'>Proyectos</a>
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