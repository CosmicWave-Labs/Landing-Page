import { FC } from "react"
import {ButtonComponentType, typeButton} from '../../Types/ComponentTypes'


const ButtonComponent:FC<ButtonComponentType> = ({Type, Color, Text ='', className}) =>{

    return(
        <button className={`${typeButton[Type]} bg-${Color} ${className}`}>
        {Text !== undefined ? Text : ''}
        </button>
    )
}

export default ButtonComponent