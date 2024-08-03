import React from "react";
import ProjectBlock from "@/app/components/Additional/ProjectBlock";

import { LuGithub } from "react-icons/lu";
import { DiCss3, DiHtml5 } from "react-icons/di";
import { MdOutlineInventory2 } from "react-icons/md";
import { CgBrowser } from "react-icons/cg";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { IoIosLink } from "react-icons/io";
import { SiExpress, SiLaravel, SiPhp, SiBootstrap } from "react-icons/si";
import { DiMysql, DiJava, DiReact, DiNodejsSmall } from "react-icons/di";
import { BsClipboard2Check } from "react-icons/bs";
import innovaweb from "@/app/assets/IMG/innovaWeb.png";
import bioartImage from "@/app/assets/IMG/BioartImage.jpg";
import innovaImage from "@/app/assets/IMG/innovatech.jpg";
import { getDictionary } from "../dictionaries";
import { projectItem } from "../types/LangTypes";
export default async function Projects({ lang }: { readonly lang: string }) {
  const size = 20;
  const dict = await getDictionary(lang);
  return (
    <div>
      <div>
        <h2 className="my-2 text-2xl font-bold capitalize">
          {dict.projects.title}
        </h2>
      </div>
      <div className="flex flex-col gap-1">
        {dict.projects.items.map((item: projectItem) => (
          <ProjectBlock
          key={item.id}
            imageSrc={
              item.id == 1 || item.id == 2
                ? bioartImage
                : item.id == 3
                ? innovaweb
                : innovaImage
            }
            data={{
              title: item.name,
              subtitle: item.subtitle,
              description: item.description,
            }}
            icon={
              item.id == 1 ? (
                <MdOutlineInventory2 size={30} />
              ) : item.id == 2 ? (
                <BsClipboard2Check size={30} />
              ) : item.id == 3 ? (
                <CgBrowser size={30} />
              ) : (
                <TbDeviceDesktopAnalytics size={30} />
              )
            }
          >
            <div className="flex flex-wrap gap-2">
              {item.id != 4 ? (
                <span className="tools-used">
                  <DiHtml5 /> HTML
                </span>
              ) : (
                ""
              )}
              <span className="tools-used">
                <DiCss3 /> CSS
              </span>
              <span className="tools-used">
                <DiMysql /> MySql
              </span>
              <span className="tools-used">
                <SiBootstrap /> Bootstrap
              </span>
              {item.id == 1 || item.id == 2 ? (
                <>
                  <span className="tools-used">
                    <DiReact /> React.js
                  </span>
                  <span className="tools-used">
                    <DiNodejsSmall /> Node.js
                  </span>
                  <span className="tools-used">
                    <SiExpress /> Express
                  </span>
                </>
              ) : item.id == 3 ? (
                <>
                  <span className="tools-used">
                    <SiPhp /> PHP
                  </span>
                  <span className="tools-used">
                    <SiLaravel /> Laravel
                  </span>
                </>
              ) : (
                <span className="tools-used">
                  <DiJava /> JAVA/JAVAFX
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              <a className="social-links" href={item.github}>
                <button>
                  <LuGithub size={size} />
                </button>
              </a>
              {item.link ? (
                <a className="social-links py-1" href={item.link}>
                  <button>
                    <IoIosLink size={size} />
                  </button>
                </a>
              ) : (
                ""
              )}
            </div>
          </ProjectBlock>
        ))}
      </div>
    </div>
  );
}
