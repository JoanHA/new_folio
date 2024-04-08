import React from "react";
import Image from "next/image";
import mypicture from "@/public/mypicture.jpg";
export default function Info() {
  return (
    <div className="flex gap-3 justify-start">
      <div
        id="image-container"
        className="bg-black w-[128px] h-[128px] rounded-full"
      >
        {/* <Image src={mypicture} alt="Profile picture" className=""></Image> */}
        
      </div>

      <div className="flex flex-col gap-2 ">
        <h1 className="text-4xl font-bold">Joan Sebastian Hurtado A. </h1>
        <div>
          <h2 className="text-2xl font-bold">Fullstack web developer</h2>
        </div>
        <div>
          <p>Cali, Colombia</p>
        </div>
        <div className="flex flex-row gap-2 text-wrap flex-wrap">
          <span>
            <button className="bg-[#46a758] rounded-lg px-3 py-1">joanhurtado@outlook.es</button>
          </span>

          <span>Doc</span>
          <span>GitHub</span>
          <span>LinkedIN</span>
        </div>
      </div>
    </div>
  );
}
