import { FC } from "react";
import { ServiceComponent } from "./Helpers/ServiceComponent";
import { BsAppIndicator, BsTools } from "react-icons/bs";
import { ServiceComponentType } from "../Types/ComponentTypes";

const Services: FC = () => {
    const ServicesArr: ServiceComponentType[] = [
        { Icon: BsAppIndicator, Title: 'Diseño', Span: 'Hola mundooooooooooooooo' },
        { Icon: '{ }', Title: 'Desarrollo Web', Span: 'Hola mundooooooooooooooo' },
        { Icon: BsTools, Title: 'Mantenimiento', Span: 'Hola mundooooooooooooooo' },
    ];

    return (
        <section className="bg-NormalWhite py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row md:items-center gap-6"> 
                    <div className="flex flex-col items-center md:items-start ">
                        <ServiceComponent
                            key={ServicesArr[0].Title}
                            Icon={ServicesArr[0].Icon}
                            Span={ServicesArr[0].Span}
                            Title={ServicesArr[0].Title}
                        />
                    </div>
                    <div className="flex flex-col md:w-2/3 space-y-6"> 
                        {ServicesArr.slice(1).map((data) => (
                            <ServiceComponent
                                key={data.Title}
                                Icon={data.Icon}
                                Span={data.Span}
                                Title={data.Title}
                            />
                        ))}
                    </div>
                </div>
                <div className="flex md:flex-row flex-col md:items-center justify-between mt-10">
                    <div className="flex flex-col items-start md:items-end">
                        <h1 className="text-Icon font-Poppins-Bold text-[40px]">Nuestros servicios</h1>
                        <h1 className="text-black font-Poppins text-[40px] font-medium">incluyen</h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
