import Image from "next/image";
import Info from "@/app/components/Info";
import "@/app/[lang]/globals.css";
import About from "@/app/components/About";
import Tools from "@/app/components/Tools";
import Experience from "@/app/components/Experience";
import Projects from "@/app/components/Projects";
import Education from "@/app/components/Education";
import Footer from "@/app/components/Footer";
import Extra from "@/app/components/Extra";

export default function Home({ params }: { params: { lang: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  ">
      <div className="mx-auto px-[32px] py-[64px] flex flex-col max-w-[900px]">
        <Info lang={params.lang} />
        <About lang={params.lang} />
        <div className="w-full h-[1px] bg-[#f2fced3b] my-5"></div>
        <Tools lang={params.lang} />
        <Experience lang={params.lang} />
        <Projects lang={params.lang} />
        <Education lang={params.lang} />
        <Extra lang={params.lang} />
        <div className="w-full h-[1px] bg-[#f2fced3b] my-5"></div>

        <Footer lang={params.lang} />
      </div>
    </main>
  );
}
