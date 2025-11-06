import { FC, useState } from "react";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

interface Projectos {
  Link: string;
  Imagen: string;
  Nombre: string;
}

let projectosInfo: Projectos[] = [
  { Link: "https://sc-short-dev-htq1.vercel.app/", Imagen: "FirstProject.png", Nombre: "SCShort.dev" },
  { Link: "https://github.com/karlobgisw/TyperTraining", Imagen: "SecondProject.jpg", Nombre: "TypeTraining" },
];

export const Projects: FC = () => {
  const [index, setIndex] = useState(0);

  const nextProject = () => {
    setIndex((prev) => (prev + 1) % projectosInfo.length);
  };

  const prevProject = () => {
    setIndex((prev) => (prev - 1 + projectosInfo.length) % projectosInfo.length);
  };

  const currentProject = projectosInfo[index];

  return (
    <section className="bg-[#30244C] w-full h-full relative flex items-center justify-center">
      <div className="h-3/4 w-10/12 rounded-[42px] bg-white mx-12 relative flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center rounded-[42px] transition-all duration-700">
         <a href={currentProject.Link} target="_blank" className="w-full h-full">
          <img
            src={currentProject.Imagen}
            alt="Project"
            className="w-full h-full object-cover object-center rounded-[42px]"
          />
        </a>

          <span className="absolute bottom-6 right-4 bg-[#017B54]/80 text-white font-Poppins-Bold text-3xl px-4 py-2 rounded-lg">
            {currentProject.Nombre}
          </span>
        </div>
        <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-greenProj h-[120%] w-56 max-[580px]:w-32 max-[400px]:w-24 z-10 flex items-center justify-center">
          <h1 className="font-Poppins-Bold font-extrabold text-[90px] max-[580px]:text-[70px] max-[400px]:text-[50px] text-[#017B54] rotate-180 [writing-mode:vertical-lr]">
            PROYECTOS
          </h1>
        </div>
      </div>
      <button
        onClick={nextProject}
        className="w-20 h-20 bg-[#00FFAF] rounded-full absolute z-20 right-[60px] top-1/2 transform -translate-y-1/2 flex items-center justify-center"
      >
        <FaCaretRight className="text-[#017B54] text-[45px]" />
      </button>

    </section>
  );
};
