import React from "react";
import { FaBiohazard } from "react-icons/fa6";

export default function Experience() {
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">Experiencia</h2>
      </div>
      {/* bioart */}
      <div className="flex flex-wrap gap-3">
        <div>
          <FaBiohazard />
        </div>
        <div className="flex flex-col gap-3 flex-grow">
          <div>
            <p>Bioart S.A</p>
          </div>
          <div>
            <p>Desarrollador fullstack y Soporte IT</p>
          </div>
          <div><p className="text-sm text-[#F6FEF4B0]">Trabajo como soporte informático y desarrollador web fullstack. En mi estancia aquí pude desarrollar dos
proyectos fullstack usando React.js , Node.js y MYSQL.</p></div>
        </div>
        <div>
          <p>Oct/2023 - Abril/2024</p>
        </div>
      </div>
      {/* Innovatech */}
      <div></div>
    </div>
  );
}
