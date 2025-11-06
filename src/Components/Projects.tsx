import { FC } from "react";
import { FaCaretRight } from "react-icons/fa";

export const Projects: FC = () => {
  return (  
    <section className="bg-[#192D54] w-full h-full relative flex items-center justify-center">
      <div className="h-3/4 w-10/12 rounded-[42px] bg-white mx-12 relative">
          <button className="w-24 h-24 bg-[#68BFED] rounded-full absolute right-[-50px] top-1/2 transform -translate-y-1/2 flex items-center justify-center">
            <FaCaretRight className="text-[#192D54] text-[58px] ml-2"/>
          </button>
          <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2  bg-[#68BFED] h-[120%] w-56 max-[580px]:w-32 max-[400px]:w-24 z-10 flex items-center justify-center">
            <h1 className="font-Poppins-Bold font-extrabold text-[90px] max-[580px]:text-[70px] max-[400px]:text-[50px] text-[#192D54] rotate-180 [writing-mode:vertical-lr]">PROYECTOS</h1>
          </div>
      </div>
    </section>
  );
};
