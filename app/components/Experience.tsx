import React from "react";
import { FaBiohazard, FaLaptopCode } from "react-icons/fa6";
import { FaStoreAlt } from "react-icons/fa";

export default function Experience() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Experiencia</h2>
      </div>
      {/* Bioart */}
      <div className="flex gap-3 flex-row my-3">
        <div className="  flex ">
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            <FaBiohazard size={40} />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow flex-shrink-1 justify-center">
          <div>
            <p className="m-0 font-bold">Bioart S.A</p>
          </div>
          <div>
            <p className="capitalize">Desarrollador Fullstack y Soporte IT</p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
              Trabaje como soporte informático y desarrollador web fullstack. En
              mi estancia aquí pude desarrollar dos proyectos fullstack usando
              React.js , Node.js y MYSQL.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span className="font-bold" style={{ fontSize: "10px" }}>
              Oct/2023
            </span>
            <span className="font-bold" style={{ fontSize: "10px" }}>
              -
            </span>
            <span className="font-bold" style={{ fontSize: "10px" }}>
              Abril/2024
            </span>
          </div>
        </div>
      </div>
      {/* Innovatech */}
      <div className="flex gap-3 flex-row my-3">
        <div className="  flex ">
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            <FaStoreAlt size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow flex-shrink-1 justify-center">
          <div>
            <p className="m-0 font-bold"> Innovatech Occidente</p>
          </div>
          <div>
            <p className="capitalize">Product owner y desarrollador </p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
              Trabaje como soporte informático y desarrollador web fullstack. En
              mi estancia aquí pude desarrollar dos proyectos fullstack usando
              React.js , Node.js y MYSQL.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span className="font-bold" style={{ fontSize: "10px" }}>
              Oct/2023
            </span>
            <span className="font-bold" style={{ fontSize: "10px" }}>
              -
            </span>
            <span className="font-bold" style={{ fontSize: "10px" }}>
              Abril/2024
            </span>
          </div>
        </div>
      </div>

      {/* Infodec */}
      <div className="flex gap-3 flex-row my-3">
        <div className="  flex ">
          <div className="bg-[#57ff802c] w-[50px] flex items-center justify-center  h-[50px] rounded-3xl  text-[#89ff9fcd]">
            <FaLaptopCode size={30} />
          </div>
        </div>
        <div className="flex flex-col gap-2 flex-grow flex-shrink-1 justify-center">
          <div>
            <p className="m-0 font-bold"> Infodec S.A</p>
          </div>
          <div>
            <p className="capitalize">Fullstack developer </p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
              Trabajo como desarrollador fullstack realizando y manteniendo
              mayormente gateways de pagos usando Laravel, creación de
              formularios de pago y registro de tarjetas con Angular y tareas de
              segundo plano usando C#.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span className="font-bold" style={{ fontSize: "10px" }}>
              May/2024
            </span>
            <span className="font-bold" style={{ fontSize: "10px" }}>
              -
            </span>
            <span className="font-bold" style={{ fontSize: "10px" }}>
              Currently
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
