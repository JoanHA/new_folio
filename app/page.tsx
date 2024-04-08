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
      <div className="mx-auto px-[32px] py-[64px] flex flex-col">
      <Info/>
        <About/>
        <div className="w-full h-[1px] bg-slate-500 my-3"></div>
        <Tools/>
        <Experience/>
          <Projects/>
          <Education/>
          <Footer/>
      </div>
        
    </main>
  );
}
