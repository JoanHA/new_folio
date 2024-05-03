import React from "react";
import { Info } from "@/app/types";
import { FaStoreAlt } from "react-icons/fa";
import { IconType } from "react-icons";

import bioart from "@/app/components/IMG/bioart.jpeg";
import Image from "next/image";
function ProjectBlock({
  children,
  data,
  icon,
  imageSrc =""
}: {
  children: React.ReactNode;
  data: Info;
  icon: any;
  imageSrc:any;
}) {
  return (
    <div className="my-2">
      <div className="flex flex-row gap-3 flex-wrap">
        {/* icono */}
        <div className="basis-5">
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            {icon}
          </div>
        </div>
        {/* content */}
        <div className="flex flex-col flex-shrink-1 gap-2  basis-1/2">
          <h3 className="font-bold text-[16px] text-[#ECEEEC]">{data.title}</h3>
          <p className="text-[14px] text-[#ECEEEC]">{data.subtitle}</p>
          <p className="text-xs text-[#F6FEF4B0]">{data.description}</p>
          {children}
        </div>
        {/* image */}
        <div className="basis-1/3  flex-shrink">
          <Image src={imageSrc} alt="Imagen del proyecto" className="w-[300px] h-[200px] rounded-lg "></Image>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
