import React from "react";
import { GiDiploma } from "react-icons/gi";
import { FaLanguage } from "react-icons/fa6";

export default function Education() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Educación</h2>
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
              Tecnólogo en analisis y desarrollo de sistemas de información
            </p>
          </div>
          <div>
            <p className="capitalize">
              SENA (Servicio Nacional de Aprendizaje)
            </p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
              Tecnólogo con una duracion de 2 años donde aprendi Django,
              Laravel, Java, JavaScript, PHP, Flutter, desarrollo movil con
              java, Python. Ademas de metodologias agiles como SCRUM entre otras
              cosas.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span
              className="font-bold d-flex flex-row "
              style={{ fontSize: "10px" }}
            >
              Terminado
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
              Técnico Proficiencia del ingles comunicativo{" "}
            </p>
          </div>
          <div>
            <p className="capitalize">Academia de Ingles New Generation</p>
          </div>
          <div>
            <p className="text-sm text-[#F6FEF4B0]">
              Obtuve el nivel B2 segun el marco comun europeo en el Michigan
              English Test (MET)
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex flex-row text-sm s gap-1  rounded-3xl  px-2 text-[#89ff9fcd] bg-[#57ff802c]">
            <span className="font-bold" style={{ fontSize: "10px" }}>
              Terminado
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
