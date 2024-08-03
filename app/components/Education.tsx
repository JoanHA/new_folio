import React from "react";
import { GiDiploma } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";
import { getDictionary } from "../dictionaries";
import { Lang } from "../types/LangTypes";

export default async function Education({ lang }: { readonly lang: string }) {
  const dict:Lang = await getDictionary(lang);
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">{dict.education.title}</h2>
      </div>
      {/* Technologist */}
      <div className="flex gap-3 flex-row my-3 py-2">
        <div className="  flex ">
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            <GiDiploma size={40} />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow flex-shrink-1 justify-center">
          <div>
            <p className="m-0 font-bold">
             {dict.education.items[0].name}
            </p>
          </div>
          <div>
            <p className="capitalize">
             {dict.education.items[0].subtitle}
              
            </p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
            {dict.education.items[0].description}
       
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span
              className="font-bold d-flex flex-row "
              style={{ fontSize: "10px" }}
            >
             {dict.education.items[0].duration}
             </span>
          </div>
        </div>
      </div>
      {/* ENglish */}
      <div className="flex gap-3 flex-row my-3 py-2">
        <div className="  flex ">
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            <FaLanguage size={40} />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow flex-shrink-1 justify-center">
          <div>
            <p className="m-0 font-bold">
            {dict.education.items[1].name}
            </p>
          </div>
          <div>
            <p className="capitalize">    {dict.education.items[1].subtitle}</p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
            {dict.education.items[1].description}
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span className="font-bold" style={{ fontSize: "10px" }}>
            {dict.education.items[1].duration}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
