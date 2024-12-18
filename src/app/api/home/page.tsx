"use client";
import { trace } from "console";
import React,{useState,useRef, use, useEffect} from "react";
import Image from "next/image";
import { FaLinkedin,FaInstagram,FaGithub,FaReact,FaDocker,FaRust,FaPython} from "react-icons/fa";
import Link from "next/link";
import { SiCodeforces,SiLeetcode,SiPytorch,SiExpo } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaGolang } from "react-icons/fa6";

export default function Page() {
  return (
    <>
    <div className="bg-navbar-gradient h-[500vh] w-full relative p-10">
        <div className=" absolute bg-[#205295] w-[0.5vh] h-[470vh] rounded-sm   left-[50%] "></div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[5%] flex justify-center items-center font-robotoMono text-black z-10">1</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[15%] flex justify-center items-center font-robotoMono text-black z-10">2</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[25%] flex justify-center items-center font-robotoMono text-black z-10">3</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[35%] flex justify-center items-center font-robotoMono text-black z-10">4</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[45%] flex justify-center items-center font-robotoMono text-black z-10">5</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[55%] flex justify-center items-center font-robotoMono text-black z-10">6</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[65%] flex justify-center items-center font-robotoMono text-black z-10">7</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[75%] flex justify-center items-center font-robotoMono text-black z-10">8</div>
        <div className=" absolute w-[5vh] h-[5vh] bg-[#5B8FB9] rounded-[50%] left-[48.8%] top-[85%] flex justify-center items-center font-robotoMono text-black z-10">9</div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[13vh] left-[13vh]"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[5.45%] left-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[15.45%] right-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[25.45%] left-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[35.45%] right-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[45.45%] left-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[55.45%] right-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[65.45%] left-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[75.45%] right-[53vh] z-0"></div>
        <div className=" absolute bg-[#46C2CB] w-[38vh] h-[0.8vh] top-[85.45%] left-[53vh] z-0"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[63vh] right-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[113vh] left-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[163vh] right-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[213vh] left-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[263vh] right-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[313vh] left-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[363vh] right-[13vh]"></div>
        <div className=" absolute bg-[#205295] w-[40vh] h-[25vh] rounded-sm top-[413vh] left-[13vh]"></div>
    </div>                     
    </>
  )
}