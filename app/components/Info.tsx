import React from "react";
import Image from "next/image";
import mypicture from "@/public/mypicture.jpg";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

export default function Info() {
  const size = 24;
  return (
    <div className="flex gap-3 justify-start ">
      <div
        id="image-container"
        className="bg-black w-[135px] min-w-[128px] h-[120px] min-h-[128px] rounded-full "
      >
        <Image
          src={mypicture}
          alt="Profile picture"
          className="h-[145px]"
          style={{ borderRadius: "inherit" }}
        ></Image>
      </div>

      <div className="flex flex-col gap-2 ">
        <h1 className="text-4xl font-bold">Joan Sebastian Hurtado A. </h1>
        <div>
          <h2 className="text-2xl font-bold">Fullstack web developer</h2>
        </div>
        <div className="flex flex-row items-center gap-1">
          <span className="font-bold">
            <CiLocationOn size={size} />
          </span>
          <p>Cali, Colombia and Remote</p>
        </div>
        <div className="flex flex-row gap-2 text-wrap flex-wrap">
          <div>
            <a
              href="mailto:joanhurtado134@outlook.es"
              target="_blank"
              className="bg-[#46a758] font-medium text-sm rounded-2xl px-4 me-2 py-1 flex flex-row items-center gap-2"
            >
              <MdOutlineMailOutline size={size} />
              joanhurtado@outlook.es
            </a>
          </div>
          <div className="flex flex-row gap-3 hover:brightness-[87%]">
            <a
              className="social-links py-1"
              href="Updated Resume Joan Hurtado.pdf"
              target="_blank"
            >
              <button>
                <IoDocumentTextOutline size={size} />
              </button>
            </a>
            <a
              className="social-links"
              href="https://github.com/JoanHA"
              target="_blank"
            >
              <button>
                <LuGithub size={size} />
              </button>
            </a>
            <a
              className="social-links"
              href="https://www.linkedin.com/in/joan-hurtado-a04ab1255/"
              target="_blank"
            >
              <button>
                <FiLinkedin size={size} />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
