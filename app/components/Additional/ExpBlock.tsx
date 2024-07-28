"use clien";
import React from "react";
import { FaStoreAlt } from "react-icons/fa";
import { FaBiohazard, FaLaptopCode } from "react-icons/fa6";

export default function ExpBlock({ dict }: { readonly dict: any }) {
  return (
    <>
      {dict.experience.items.map((item: any, index: number) => (
        <div className="flex gap-3 flex-row my-3">
          <div className="  flex ">
            <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
              {index == 0 ? (
                <FaLaptopCode size={35} />
              ) : index == 1 ? (
                <FaBiohazard size={40} />
              ) : (
                <FaStoreAlt size={30} />
              )}
            </div>
          </div>
          <div className="flex flex-col gap-2 flex-grow flex-shrink-1 justify-center">
            <div>
              <p className="m-0 font-bold">{item.company}</p>
            </div>
            <div>
              <p className="capitalize">{item.position} </p>
            </div>
            <div>
              <p className="text-sm text-[#F6FEF4B0]">{item.description}</p>
            </div>
          </div>
          <div className="">
            <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
              <span className="font-bold" style={{ fontSize: "10px" }}>
                {item.duration.split("-")[0]}
              </span>
              <span className="font-bold" style={{ fontSize: "10px" }}>
                -
              </span>
              <span className="font-bold" style={{ fontSize: "10px" }}>
                {item.duration.split("-")[1]}
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
