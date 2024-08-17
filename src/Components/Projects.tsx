import { FC } from "react";
import { FaCaretRight } from "react-icons/fa";

export const Projects: FC = () => {
  return (  
    <section className="bg-[#30244C] w-full h-full relative">
      <div className="flex h-full">
        <div className="absolute top-12 bottom-12 left-12 bg-greenProj h-auto w-56 md:w-56 z-10 flex items-center justify-center">
          <h1 className="font-Poppins-Bold font-extrabold text-[110px] text-[#017B54] rotate-180 [writing-mode:vertical-lr]">PROYECTOS</h1>
        </div>

        <div className="flex-grow flex items-center relative">
          <button className="h-3/4 w-10/12 rounded-[42px] bg-white mx-12"></button>
          <button className="w-24 h-24 bg-[#00FFAF] rounded-full absolute right-56 flex items-center justify-center">
            <FaCaretRight className="text-[#017B54] text-[58px] ml-2"/>
          </button>
        </div>
      </div>
    </section>
  );
};
