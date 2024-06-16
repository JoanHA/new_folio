import React from "react";
import ProjectBlock from "@/app/components/Additional/ProjectBlock";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuGithub } from "react-icons/lu";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { MdOutlineInventory2 } from "react-icons/md";
import { CgBrowser } from "react-icons/cg";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import innovaweb from "@/app/components/IMG/innovaWeb.png";
import {
  SiExpress,
  SiLaravel,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
} from "react-icons/si";
import {
  DiMysql,
  DiJava,
  DiReact,
  DiNodejsSmall,
  DiAngularSimple,
  DiJavascript1,
} from "react-icons/di";
import { BsClipboard2Check } from "react-icons/bs";
import bioartImage from "@/app/assets/IMG/BioartImage.jpg";
import innovaImage from "@/app/assets/IMG/innovatech.jpg";
export default function Projects() {
  const size = 20;
  return (
    <div>
      <div>
        <h2 className="my-2 text-2xl font-bold">Proyectos</h2>
      </div>
      <div className="flex flex-col gap-1">
        {/* Inventory */}
        <ProjectBlock
          imageSrc={bioartImage}
          data={{
            title: "INVENTORY MANAGEMENT BIOART",
            subtitle: "Web application for the company Bioart S.A",
            description:
              "This web application was a software solution for a company called Bioart. They needed a place where they could storage their inventory such as Computers, Printers, cellphones, etc. Therefore I created this web app where they have authentication, authorization, storage, roles, the CRUD operations for the inventory besides some others features very useful for them.",
          }}
          icon={<MdOutlineInventory2 size={30} />}
        >
          <div className="flex flex-wrap gap-2">
            <span className="tools-used">
              <DiHtml5 /> HTML
            </span>
            <span className="tools-used">
              <DiCss3 /> CSS
            </span>
            <span className="tools-used">
              <SiBootstrap /> Bootstrap
            </span>
            <span className="tools-used">
              <DiReact /> React.js
            </span>
            <span className="tools-used">
              <DiNodejsSmall /> Node.js
            </span>
            <span className="tools-used">
              <SiExpress /> Express
            </span>
            <span className="tools-used">
              <DiMysql /> MySql
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
                <IoIosLink size={size} />
              </button>
            </a>
          </div>
        </ProjectBlock>

        {/* Quality */}
        <ProjectBlock
          imageSrc={bioartImage}
          data={{
            title: "QUALITY MANAGEMENT BIOART",
            subtitle: " Web application for the company Bioart S.A",
            description:
              "This web application is divided into two modules, the first one is the document version control, where they company is able to track the version of their quality documents creating new changes,versions, see where they storage those documents, etc. And the second is the audits module where they can program they audits, audit plans, check list, finding list and the processes they have in the quality area.",
          }}
          icon={<BsClipboard2Check size={30} />}
        >
          <div className="flex flex-wrap gap-2">
            <span className="tools-used">
              <DiHtml5 /> HTML
            </span>
            <span className="tools-used">
              <DiCss3 /> CSS
            </span>
            <span className="tools-used">
              <SiBootstrap /> Bootstrap
            </span>
            <span className="tools-used">
              <DiReact /> React.js
            </span>
            <span className="tools-used">
              <DiNodejsSmall /> Node.js
            </span>
            <span className="tools-used">
              <SiExpress /> Express
            </span>
            <span className="tools-used">
              <DiMysql /> MySql
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
                <IoIosLink size={size} />
              </button>
            </a>
          </div>
        </ProjectBlock>

        {/* Innovatech web */}
        <ProjectBlock
          imageSrc={innovaweb}
          data={{
            title: "INNOVATECH E-COMMERCE",
            subtitle: " Software for the company innovatech Occidente",
            description:
              "Innova Tech is an e-commerce created to a tech company. This e-commerce was created with a group using SCRUM which I was the leader and product owner. I created fullstack modules like the Cart, Comments, Contact, About us, Categories, Etc.",
          }}
          icon={<CgBrowser size={30} />}
        >
          <div className="flex flex-wrap gap-2">
            <span className="tools-used">
              <DiHtml5 /> HTML
            </span>
            <span className="tools-used">
              <DiCss3 /> CSS
            </span>
            <span className="tools-used">
              <SiBootstrap /> Bootstrap
            </span>
            <span className="tools-used">
              <DiMysql /> MySql
            </span>
            <span className="tools-used">
              <SiPhp /> PHP
            </span>
            <span className="tools-used">
              <SiLaravel /> Laravel
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
                <IoIosLink size={size} />
              </button>
            </a>
          </div>
        </ProjectBlock>

        {/* Innovatech Desktop */}
        <ProjectBlock
          imageSrc={innovaImage}
          data={{
            title: "INNOVATECH DESKTOP APP",
            subtitle: "Software for the company Innovatech Occidente ",
            description:
              "This is part of the e-commerce created for the company innovatech, here is where the admin will create, edit, delete and update the products those are shown in the web page. Also the admin is able to ask for new products to their providers and some others features they wanted.",
          }}
          icon={<TbDeviceDesktopAnalytics size={30} />}
        >
          <div className="flex flex-wrap gap-2">
            <span className="tools-used">
              <DiCss3 /> CSS
            </span>
            <span className="tools-used">
              <DiJava /> JAVA/JAVAFX
            </span>
            <span className="tools-used">
              <DiMysql /> MYSQL
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <a className="social-links">
              <button>
                <LuGithub size={size} />
              </button>
            </a>
          </div>
        </ProjectBlock>
      </div>
    </div>
  );
}
