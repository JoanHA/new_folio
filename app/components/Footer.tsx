import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";

export default function Footer({ lang }: { readonly lang: string }) {
  const size = 24;
  return (
    <div>
      <div className="flex flex-col gap-1">
        <div className="px-1">
          <h3>Joan Sebastian Hurtado A </h3>
        </div>
        <div className="flex flex-wrap max-sm:gap-2 ">
          <div>
            <button className="bg-[#46a758] font-medium text-sm rounded-2xl px-4 me-2 py-1 flex flex-row items-center gap-2">
              <MdOutlineMailOutline size={size} />
              joanhurtado@outlook.es
            </button>
          </div>
          <div className="flex flex-row gap-3">
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
