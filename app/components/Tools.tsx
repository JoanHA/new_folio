import React from "react";
import {
  DiMysql,
  DiMongodb,
  DiJava,
  DiReact,
  DiNodejsSmall,
  DiCss3Full,
  DiHtml5,
  DiPython,
  DiAngularSimple,
  DiJavascript1,
  DiPostgresql,
} from "react-icons/di";
import {
  SiOracle,
  SiExpress,
  SiJavascript,
  SiLaravel,
  SiJquery,
  SiPhp,
  SiBootstrap,
  SiTailwindcss,
  SiDjango,
  SiNestjs,
  SiCsharp,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { getDictionary } from "../dictionaries";
import { Lang } from "../types/LangTypes";

export default  async function Tools({ lang }: { readonly lang: string }) {
  const size = 22;
  const dict:Lang = await getDictionary(lang)
  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold">{dict.technologies.title}</h2>
        <div className="flex flex-row gap-4 flex-wrap py-3">
          <span className="tools">
            <div>
              <DiReact size={size} />
            </div>
            <p>REACT.JS</p>
          </span>
          <span className="tools">
            <div>
              <DiNodejsSmall size={size} />
            </div>
            <p>NODE JS</p>
          </span>
          <span className="tools">
            <div>
              <SiExpress size={20} />
            </div>
            <p>EXPRESS JS</p>
          </span>
          <span className="tools">
            <div>
              <DiJavascript1 size={size} />
            </div>
            <p>JAVASCRIPT</p>
          </span>
          <span className="tools">
            <div>
              <SiLaravel size={size}></SiLaravel>
            </div>
            <p>LARAVEL</p>
          </span>
          <span className="tools">
            <div>
              <DiMysql size={size} />
            </div>
            <p>MYSQL</p>
          </span>
          <span className="tools">
            <div>
              <SiOracle size={size} />
            </div>
            <p>ORACLE DB </p>
          </span>
          <span className="tools">
            <div>
              <DiMongodb size={size} />
            </div>
            <p>MONGO DB</p>
          </span>
          <span className="tools">
            <div>
              <DiJava size={size} />
            </div>
            <p>JAVA</p>
          </span>

          <span className="tools">
            <div>
              <DiCss3Full size={size} />
            </div>
            <p>CSS</p>
          </span>
          <span className="tools">
            <div>
              <DiHtml5 size={size} />
            </div>
            <p>HTML</p>
          </span>

          <span className="tools">
            <div>
              <SiJquery size={size}></SiJquery>
            </div>
            <p>JQUERY</p>
          </span>
          <span className="tools">
            <div>
              <SiPhp size={size}></SiPhp>
            </div>
            <p>PHP</p>
          </span>
          <span className="tools">
            <div>
              {" "}
              <DiPython size={size}></DiPython>
            </div>
            <p>PYTHON</p>
          </span>
          <span className="tools">
            <div>
              <SiBootstrap size={size}></SiBootstrap>
            </div>
            <p>BOOTStRAP</p>
          </span>
          <span className="tools">
            <div>
              <SiTailwindcss size={size}></SiTailwindcss>
            </div>
            <p>TAILWIND CSS</p>
          </span>
          <span className="tools">
            <div>
              <SiDjango size={size} />
            </div>
            <p>DJANGO</p>
          </span>
          <span className="tools">
            <div>
              <TbBrandNextjs size={size} />
            </div>
            <p>NEXT.JS</p>
          </span>
          <span className="tools">
            <div>
              <SiNestjs size={size} />
            </div>
            <p>NEST.JS</p>
          </span>
          <span className="tools">
            <div>
              <DiAngularSimple size={size} />
            </div>
            <p>ANGULAR</p>
          </span>
          <span className="tools">
            <div>
              <SiCsharp size={size} />
            </div>
            <p>C#</p>
          </span>
          <span className="tools">
            <div>
              <DiPostgresql size={size} />
            </div>
            <p>Postgresql</p>
          </span>
        </div>
      </div>
    </div>
  );
}
