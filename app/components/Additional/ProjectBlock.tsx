import React from "react";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { FaStoreAlt } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";

function ProjectBlock() {
  const size = 20;
  return (
    <div>
      <div className="flex flex-row gap-3">
        {/* icono */}
        <div>
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            <FaStoreAlt size={30} />
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col flex-shrink-1 gap-2">
          <h3 className="font-bold text-[16px] text-[#ECEEEC]">
            Software random
          </h3>
          <p className="text-[14px] text-[#ECEEEC]">
            Software propiedad de Metacortex
          </p>
          <p className="text-xs text-[#F6FEF4B0]">
            Herramienta para hacer rico a otras personas
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="tools-used">
              <DiHtml5 /> HTML
            </span>
            <span className="tools-used">
              <DiCss3 /> CSS
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="social-links">
              <button>
                <LuGithub size={size} />
              </button>
            </a>
            <a className="social-links py-1">
              <button>
                <IoDocumentTextOutline size={size} />
              </button>
            </a>
          </div>
        </div>
        {/* image */}
        <div></div>
      </div>
    </div>
  );
}

export default ProjectBlock;
