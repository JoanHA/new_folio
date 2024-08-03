// components/Dropdown.js
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MdTranslate } from "react-icons/md";
const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {" "}
      <button
        className="flex flex-row items-center"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <MdTranslate size={30} />
      </button>
      <div className="relative inline-block text-left  shrink-0 w-[30px]">
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-center px-4 py-2 text-white font-medium  focus:outline-none"
        >
          <svg
            className="-mr-1 h-5 w-5 text-gray-400 absolute top-2 mb-2"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {isOpen && (
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <button
                onClick={() => {
                  router.push("/en");
                }}
                className="block px-4 py-2 font-bold text-sm w-full text-gray-700 hover:bg-gray-100"
              >
                English
              </button>
              <button
                onClick={() => {
                  router.push("/es");
                }}
                className="block px-4 py-2 font-bold text-sm w-full text-gray-700 hover:bg-gray-100"
              >
                Español
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
