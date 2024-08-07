import { FC } from "react"
import {CiMail, CiPhone, CiLocationOn} from "react-icons/ci"
import ComponenteFooter from "./Helpers/ComponenteFooter"
import { IconType } from "react-icons"

interface ContactData {
    Icon: IconType,
    Span: string,
    Font: string,
}


const Footer:FC = () => {

    const Font = "Poppins-light"
    const FooterContactData:ContactData[] = [
        {Icon:CiMail, Span:"luis.cabral@cosmicwavelabs.dev",Font},
        {Icon:CiPhone, Span:"618-XXX-XXXX",Font},
        {Icon:CiLocationOn, Span:"Durango, Dgo, Mexico.",Font}
    ]



    return (
        <section className="bg-NormalWhite">
            <div>
                <h1 className="text-black font-Poppins-Bold"> Contactanos </h1>

                <div> 
                    BOX 1 MINI
                </div> 
                <form>
                    <label className="font-Poppins-Light">Nombre</label>
                    <input type="text"/>
                    <label>Apellido</label>
                    <input type="text"/>
                    <label>Correo Electronico</label>
                    <input type="email"/>
                    <label>Mensaje</label>
                    <input type="text"/>
                </form>
                <button>
                    Enviar
                </button>

                <div>  
                    
                    {FooterContactData.map((data, index) => (
                        <ComponenteFooter
                            key={index}
                            Icon={data.Icon}
                            Font={data.Font}
                            Span={data.Span}
                        />
                    ))}
                    
                    <button>
                        Extra1
                    </button>
                    <button>
                        Extra2
                    </button>
                    <button>
                        Extra3
                    </button>
                </div>
                <div>
                    BOX2 vertical
                </div> 
            </div>
        </section>
    )

}

export default Footer