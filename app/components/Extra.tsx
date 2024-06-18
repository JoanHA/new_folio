import React from "react";

function Extra() {
  return (
    <div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold">Extra</h2>
        <div className="flex gap-3  max-[462px]:flex-col">
          <div className="flex flex-col rounded-[rgba(255, 255, 255, 0.16)] bg-[#1b1c1ab3] flex-1  max-[462px]:h-[230px] text-black rounded-lg min-h-[230px]">
            <div className="flex-1">
              <img
                src="https://portafolio-template.vercel.app/extra_1.jpg"
                className="w-full h-full object-cover rounded-t-md "
                alt="Imagen del extra"
              />
            </div>
            <div className="px-4">
              <a href="" className="">
                <h2 className="text-[#89FF9FCD] font-bold">Titulo</h2>
                <p className="text-[#F6FEF4B0]">Text</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-[rgba(255, 255, 255, 0.16)] bg-[#1b1c1ab3] flex-1  max-[462px]:h-[230px] text-black rounded-lg min-h-[230px]">
            <div className="flex-1">
              <img
                src="https://portafolio-template.vercel.app/extra_1.jpg"
                className="w-full h-full object-cover rounded-t-md"
                alt="Imagen del extra"
              />
            </div>
            <div className="px-4">
              <a href="">
                <h2 className="text-[#89FF9FCD] font-bold">Titulo</h2>
                <p className="text-[#F6FEF4B0]">Text</p>
              </a>
            </div>
          </div>
          <div className="flex flex-col rounded-[rgba(255, 255, 255, 0.16)] bg-[#1b1c1ab3] flex-1  max-[462px]:h-[230px] text-black rounded-lg min-h-[230px]">
            <div className="flex-1">
              <img
                src="https://portafolio-template.vercel.app/extra_1.jpg"
                className="w-full h-full object-cover rounded-t-md"
                alt="Imagen del extra"
              />
            </div>

            <div className="px-4">
              <a href="">
                <h2 className="text-[#89FF9FCD] font-bold">Titulo</h2>
                <p className="text-[#F6FEF4B0]">Text</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Extra;
