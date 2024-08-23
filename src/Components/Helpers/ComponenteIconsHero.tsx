import { FC, useState, useEffect } from 'react';
import { IconType } from "react-icons";
interface ComponenteHeroTypes{
    Icon:IconType,
    Span: string,
    Color: string

}

const Objectives:FC<ComponenteHeroTypes> = ({Icon, Span, Color}) =>{
    const [iconSize, setIconSize] = useState<number>(60);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 645 && window.innerWidth > 562) {
                setIconSize(40); 
            }
            else if(window.innerWidth <= 562){
                setIconSize(30); 
            }
            else if(window.innerWidth > 645){
                setIconSize(60); 
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    

    return(
        <div className={`grid grid-rows-[60%_40%] items-center justify-center text-center ${Color} gap-2 p-1`}>
            <div className='flex justify-center items-center'>
                <Icon size={iconSize}/>
            </div>
            <span className='text-white text-lg max-xl:text-sm max-lg:text-xs max-lg:max-w-[100px] max-[562px]:text-[9px] max-[404px]:text-[7px]'>{Span}</span>
        </div>
    )
}

export default Objectives