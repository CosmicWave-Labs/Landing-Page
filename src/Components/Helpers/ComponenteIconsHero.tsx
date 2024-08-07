import {FC} from 'react';
import { IconType } from "react-icons";

interface ComponenteHeroTypes{
    Icon:IconType,
    Span: string,
    Color: string

}

const Objectives:FC<ComponenteHeroTypes> = ({Icon, Span, Color}) =>{

    return(
        <div className={`flex flex-col items-center justify-center ${Color} gap-4`}>
            <Icon size={60}/>
            <span className='text-white text-lg'>{Span}</span>
        </div>
    )
}

export default Objectives