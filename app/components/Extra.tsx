import React from "react";
import fightGame from "@/app/assets/IMG/fightGame.png";
import budget from "@/app/assets/IMG/budget.png";
import Image from "next/image";
import shortener from "@/app/assets/IMG/DjangoShortener.png";
import { Lang } from "../types/LangTypes";
import { getDictionary } from "../dictionaries";
async function  Extra({ lang }: { readonly lang: string }) {
  const dict :Lang= await getDictionary(lang);
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Extra</h2>
        <div className="flex gap-3  max-[462px]:flex-col">
          <a
            href="https://fight-game-martials.netlify.app/"
            target="_blank"
            className="flex flex-col rounded-[rgba(255, 255, 255, 0.16)] bg-[#1b1c1ab3] flex-1  max-[462px]:h-[230px] text-black rounded-lg min-h-[230px] extra-link"
          >
            <div className="flex-1">
              <Image
                src={fightGame}
                className="w-full h-full object-cover rounded-t-md "
                alt="Image for fight game"
              />
            </div>
            <div className="px-4">
              <h2 className="text-[#89FF9FCD] font-bold  ">{dict.extra.projects[0].title}</h2>
              <p className="text-[#F6FEF4B0] text-sm  pb-1">
              {dict.extra.projects[0].description}
              </p>
            </div>
          </a>
          <a
            href="https://joanhabudgetapp.netlify.app/"
            target="_blank"
            className="flex flex-col rounded-[rgba(255, 255, 255, 0.16)] bg-[#1b1c1ab3] flex-1  max-[462px]:h-[230px] text-black rounded-lg min-h-[230px] extra-link"
          >
            <div className="flex-1">
              <Image
                src={budget}
                className="w-full h-full object-cover rounded-t-md"
                alt="Image for budget app"
              />
            </div>
            <div className="px-4">
              <h2 className="text-[#89FF9FCD] font-bold">{dict.extra.projects[1].title}</h2>
              <p className="text-[#F6FEF4B0] text-sm pb-1">
              {dict.extra.projects[1].description}
              </p>
            </div>
          </a>
          <a
            href="https://github.com/JoanHA/Shortener"
            target="_blank"
            className="flex flex-col rounded-[rgba(255, 255, 255, 0.16)] bg-[#1b1c1ab3] flex-1  max-[462px]:h-[230px] text-black rounded-lg min-h-[230px] extra-link"
          >
            <div className="flex-1">
              <Image
                src={shortener}
                className="w-full h-full object-cover rounded-t-md"
                alt="Imagen del extra"
              />
            </div>

            <div className="px-4">
              <h2 className="text-[#89FF9FCD] font-bold">{dict.extra.projects[2].title}</h2>
              <p className="text-[#F6FEF4B0] text-sm pb-1">
              {dict.extra.projects[2].description}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Extra;
