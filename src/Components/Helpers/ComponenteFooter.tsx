import { FC } from "react";
import { IconType } from "react-icons";

interface ComponenteFooterTypes{
    Icon:IconType,
    Font: string,
    Span: string

}

const ComponenteFooter:FC<ComponenteFooterTypes> = ({Icon, Font,Span}) => {
    return(
        <div className="flex">
                <div>
                    <Icon/>
                    <span className={`font-${Font}`}>{Span}</span>
                </div>
        </div>
    )   
}


export default ComponenteFooter