import { FC, useEffect, useRef } from 'react'
import { CiMail, CiPhone, CiLocationOn } from 'react-icons/ci'
import ComponenteFooter from './Helpers/ComponenteFooter'
import ButtonComponent from './Helpers/ButtonComponent'
import { ContactData, ButtonComponentType } from '../Types/ComponentTypes'

export const Footer: FC = () => {
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
    const FooterContactData: ContactData[] = [
        { Icon: CiMail, Span: 'cosmicwavelabs@gmail.com', Font, classNameIcon: "text-4xl" },
        { Icon: CiPhone, Span: '618-120-6846', Font, classNameIcon: "text-4xl" },
        { Icon: CiLocationOn, Span: 'Durango, Dgo, Mexico.', Font, classNameIcon: "text-4xl" }
    ]
    const Color: string = 'NormalWhite'
    const circleClass = 'w-20 h-20 mt-2'
    const FooterExtra: ButtonComponentType[] = [
        { Type: 'Circle', Color, className: circleClass },
        { Type: 'Circle', Color, className: 'w-20 h-20 mr-24' },
        { Type: 'Circle', Color, className: circleClass },
    ]

    return (
        <section className="bg-NormalWhite w-full h-full flex items-center justify-center">
            <div className="bg-NormalWhite shadow-2xl p-6 w-full max-w-7xl flex flex-col md:flex-row relative mt-24 mb-24">
                <div className="flex-1 ">
                    <h1 className="text-black font-Poppins-Bold text-6xl drop-shadow-2xl mb-6">Contactanos</h1>

                    <form className="mt-4 mr-12 mb-2">
                        <input type="text" className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite mb-4" placeholder='Nombre(s)'/>
                        <input type="text" className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite mb-4" placeholder='Apellido' />
                        <input type="email" className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite mb-4" placeholder='Correo Electronico'/>
                        <textarea ref={textareaRef} className="w-full p-2 border-0 border-b-2 border-black outline-none bg-NormalWhite" placeholder='Mensaje'></textarea>
                    </form>
                    <button className="mt-4 ml-2 px-48 py-2 bg-[#000000]   text-white rounded-md">
                        Enviar
                    </button>
                </div>
                
                <div className="bg-[#192D54] flex-1 flex items-center p-6 relative z-10 pr-32 pl-32">
                  <div className="flex flex-col ml-2">
                      <div className="flex flex-col items-start space-y-4">
                        <h1 className='font-Poppins-Bold text-NormalWhite text-6xl mb-2'>Info</h1>
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

                    <div className="flex flex-col items-center space-y-4 absolute right-0 mr-6">
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

                <div className="absolute -top-4 -bottom-4 right-0 bg-[#68BFED] h-auto w-64 md:w-64 z-0"></div>
            </div>
        </section>
    )
}

