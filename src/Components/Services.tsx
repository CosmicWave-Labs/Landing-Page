import { FC } from "react";
import { ServiceComponent } from "./Helpers/ServiceComponent";
import { BsAppIndicator, BsTools } from "react-icons/bs";
import { ServiceComponentType } from "../Types/ComponentTypes";

export const Services: FC = () => {
    const ServicesArr: ServiceComponentType[] = [
        { Icon: BsAppIndicator, Title: 'Diseño', Span: 'Hola mundooooooooooooooo' },
        { Icon: '{ }', Title: 'Desarrollo Web', Span: 'Hola mundooooooooooooooo' },
        { Icon: BsTools, Title: 'Mantenimiento', Span: 'Hola mundooooooooooooooo' },
    ];

    return (
        <section className="bg-NormalWhite py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-center gap-6 max-[940px]:flex-col-reverse"> 
                    <div className="flex flex-col min-[940px]:flex-row min-[940px]:items-center gap-6">
                        <div className="flex flex-col justify-center">
                            <ServiceComponent
                                key={ServicesArr[0].Title}
                                Icon={ServicesArr[0].Icon}
                                Span={ServicesArr[0].Span}
                                Title={ServicesArr[0].Title}
                            />
                        </div>
                        <div className="flex flex-col space-y-6">
                            {ServicesArr.slice(1, 3).map((data) => (
                                <ServiceComponent
                                    key={data.Title}
                                    Icon={data.Icon}
                                    Span={data.Span}
                                    Title={data.Title}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col items-center ">
                        <h1 className="text-Icon font-Poppins-Bold text-[40px] max-[1115px]:text-[25px]">Nuestros servicios</h1>
                        <h1 className="text-black font-Poppins text-[40px] font-medium max-[1115px]:text-[25px]">incluyen</h1>
                    </div>
                </div>
            </div>
        </section>
    );
    
};