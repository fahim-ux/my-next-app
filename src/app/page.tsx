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
    <div className="bg-[#F4F6FF] text-black w-full ">
      <div className="p-4 bg-slate-800 flex  relative">
        <div className="absolute top-[18rem] left-20">
          <Link href="https://github.com/fahim-ux" target="_blank" rel="noopener noreferer">
          <FaGithub className="text-4xl text-white border-spacing- size-[5rem]  rounded-md hover:shadow-lg hover:-translate-y-3 transition transform duration-200 cursor-pointer"/>
          </Link>
        </div>
        <div className="absolute top-[26rem] left-20">
        <Link href="https://www.linkedin.com/in/md-fahim-uddin-choudhary-25ab44271/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl text-white size-[5rem] rounded-md hover:shadow-lg hover:-translate-y-3 transition transform duration-200 cursor-pointer"/>
        </Link>
        </div>
        <div className="absolute top-[34rem] left-20">
          <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-4xl text-white size-[5rem]  rounded-md hover:shadow-lg hover:-translate-y-3 transition transform duration-200 cursor-pointer"/>
          </Link>
        </div>
        <Image  src="/images/3.png" alt="hero" width={1748} height={1240} />
        <div className=" bg-white absolute right-[10rem] top-[29.6rem] w-[10rem] h-[2.3rem] flex justify-center items-center text-black font-robotoMono rounded-[2rem] font-semibold text-[1.4em] hover:shadow-lg hover:-translate-y-2 transition transform duration-200 cursor-pointer" >
        <Link href="https://github.com/fahim-ux" target="_blank" rel="noopener noreferer">@fahim-ux</Link>
        </div>
      </div>
      {/* <div className="p-4 bg-[#FFF4B7] flex  relative" >
        
        <Image  src="/images/1.png" alt="hero" width={1748} height={1240} />
      </div>
      <div>
        <Image  src="/images/2.png" alt="hero" width={1748} height={1240} />
      </div>
      <div>
        <Image  src="/images/4.png" alt="hero" width={1748} height={1240} />
      </div> */}
    </div>                     
    </>
  )
}