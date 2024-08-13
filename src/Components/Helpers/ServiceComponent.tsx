import { FC } from "react";
import { ServiceComponentType } from "../../Types/ComponentTypes";



export const ServiceComponent:FC<ServiceComponentType> = ({Icon,Title,Span}) => {

    return(
        <div className="w-72 h-72 rounded-[37px] bg-white drop-shadow-[0_0px_6px_rgba(0,0,0,0.25)]">
            <div className="p-12">
                { typeof(Icon) === 'string' ? <h1 className="text-Icon text-5xl ">{ Icon }</h1> : <Icon className="text-Icon w-16 h-16"/>}
                    <h1 className=" mt-4 text-black font-Poppins-Bold text-2xl">{Title}</h1>
                    <span className=" mt-4 text-black font-Poppins-Extra-Light block text-sm max-w-full whitespace-normal break-words">{Span}</span>
                    </div>
        </div>
    )
}