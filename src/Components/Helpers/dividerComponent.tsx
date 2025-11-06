import {FC} from 'react'

interface DividerRot{
    Rot: string,
}

const Divider:FC<DividerRot>=({Rot})=>{
    return(
        <div className={`w-[110vw] h-36 transform ${Rot} ml-[-22px] bg-[#68BFED]`}> 

        </div>
    )
}

export default Divider