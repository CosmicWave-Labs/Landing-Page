import { FC, useEffect, useRef } from 'react'
import {CiMail, CiPhone, CiLocationOn} from 'react-icons/ci'
import ComponenteFooter from './Helpers/ComponenteFooter'
import ButtonComponent from './Helpers/ButtonComponent'
import {ContactData,ButtonComponentType} from '../Types/ComponentTypes'

const Footer:FC = () => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
 
    useEffect(() => {
        const handleInput = () => {
          if (textareaRef.current) {
            const textarea = textareaRef.current;
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`; 
          }
        };
    
        const textarea = textareaRef.current;
        if (textarea) {
          textarea.addEventListener('input', handleInput);
        }
    
        return () => {
          if (textarea) {
            textarea.removeEventListener('input', handleInput);
          }
        };
      }, []);

    const Font = 'Poppins-light'
    const FooterContactData:ContactData[] = [
        {Icon:CiMail, Span:'luis.cabral@cosmicwavelabs.dev',Font, classNameIcon:"text-4xl"},
        {Icon:CiPhone, Span:'618-XXX-XXXX',Font, classNameIcon:"text-4xl"},
        {Icon:CiLocationOn, Span:'Durango, Dgo, Mexico.',Font, classNameIcon:"text-4xl"}
    ]
    const Color:string = 'NormalWhite'
    const circleClass = 'w-20 h-20 mt-2'
    const FooterExtra:ButtonComponentType[] = [
        {Type:'Circle',Color,className:circleClass},
        {Type:'Circle',Color,className:'w-20 h-20 mr-24'},
        {Type:'Circle',Color,className:circleClass},
    ]



    return (
      <section className="bg-NormalWhite w-full h-full flex items-center justify-center">
      <div className="bg-NormalWhite shadow-2xl p-6 w-full max-w-7xl flex flex-col md:flex-row relative mt-24 mb-24">
        <div className="flex-1">
          <h1 className="text-black font-Poppins-Bold text-6xl drop-shadow-2xl">Contactanos</h1>
    
          <form className="space-y-4 mt-6 mr-12">
            <label className="font-Poppins-Light">Nombre</label>
            <input type="text" className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite"/>
            <label>Apellido</label>
            <input type="text" className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite"/>
            <label>Correo Electronico</label>
            <input type="email" className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite"/>
            <label>Mensaje</label>
            <textarea ref={textareaRef} className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite"></textarea>
          </form>
          <button className="mt-4 px-4 py-2 bg-[#000000] text-white rounded-md">
            Enviar
          </button>
        </div>
        
        <div className="bg-PurpleFooter flex-1 p-6 relative z-10 flex">
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="space-y-4">
              {FooterContactData.map((data, index) => (
                <ComponenteFooter
                  key={index}
                  Icon={data.Icon}
                  Font={data.Font}
                  Span={data.Span}
                  classNameIcon={data.classNameIcon}
                />
              ))}
            </div>
          </div>
    
          <div className="flex-1 flex flex-col justify-center items-start">
            <div className="space-y-4">
              {FooterExtra.map((data, index) => (
                <ButtonComponent
                  key={index}
                  Type={data.Type}
                  Color={data.Color}
                  className={data.className}
                  Text={data.Text}
                />
              ))}
            </div>
          </div>
        </div>
    
        <div className="absolute -top-4 -bottom-4 right-0 bg-[#6A5DAD] h-auto w-64 md:w-64 z-0"></div>
      </div>
    </section>
    
      

    )

}

export default Footer