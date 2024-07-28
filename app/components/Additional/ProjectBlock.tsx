import React from "react";
import { Info } from "@/app/[lang]/types";
import { FaStoreAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import bioart from "@/app/components/IMG/bioart.jpeg";
import Image from "next/image";
function ProjectBlock({
  children,
  data,
  icon,
  imageSrc = "",
}: {
  children: React.ReactNode;
  data: Info;
  icon: any;
  imageSrc: any;
}) {
  return (
    <div className="my-2">
      <div className=" max-sm:flex-col flex gap-3  ">
        <div className="flex flex-row gap-3 w-[70%]  max-sm:w-full">
          {/* icono */}
          <div className="">
            <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
              {icon}
            </div>
          </div>
          {/* content */}
          <div className="flex flex-col  gap-2  ">
            <h3 className="font-bold text-[16px] text-[#ECEEEC]">
              {data.title}
            </h3>
            <p className="text-[14px] text-[#ECEEEC]">{data.subtitle}</p>
            <p className="text-xs text-[#F6FEF4B0]">{data.description}</p>
            {children}
          </div>
        </div>
        {/* image */}
        <div className="shrink sm:flex sm:justify-center w-[40%]  max-sm:w-full">
          <Image
            src={imageSrc}
            alt="Imagen del proyecto"
            className="w-[300px] h-[200px] rounded-lg  max-sm:mx-auto"
          ></Image>
        </div>
      </div>
    </div>
  );
}

export default ProjectBlock;
