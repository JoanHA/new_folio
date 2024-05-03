import Image from "next/image";
import Info from "./components/Info";
import "@/app/globals.css"
import About from "./components/About";
import Tools from "./components/Tools";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className="mx-auto px-[32px] py-[64px] flex flex-col max-w-[900px]">
      <Info/>
        <About/>
        <div className="w-full h-[1px] bg-[#f2fced3b] my-6"></div>
        <Tools/>
        <Experience/>
          <Projects/>
          <Education/>
         
        <div className="w-full h-[1px] bg-[#f2fced3b] my-6"></div>

          <Footer/>
      </div>
        
    </main>
  );
}
