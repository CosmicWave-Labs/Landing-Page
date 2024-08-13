import { FC } from "react";
import {ComponenteFooterTypes} from '../../Types/ComponentTypes'



const ComponenteFooter:FC<ComponenteFooterTypes> = ({Icon, Font, Span, classNameIcon, classNameSpan}) => {
    return(
        <div >
                <div className="flex items-center mb-2">
                    <Icon className={`text-NormalWhite ${classNameIcon}`}/>
                    <span className={`font-${Font} text-NormalWhite ml-2 ${classNameSpan}` }>{Span}</span>
                </div>
        </div>
    )   
}


export default ComponenteFooter