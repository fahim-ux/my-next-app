"use client"
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import { useRouter } from "next/router";



export default function Navbar() {

  // const {data:session , status} = useSession();
  // const router = useRouter();

  const [isOpen,setisOpen] = useState(false);
  const toggleSidebar = () =>{
    setisOpen(!isOpen)
  }

  return (
    <>
    <nav className="navbar bg-white text-black flex flex-row justify-between items-center px-4 h-20 border-b-[0.1rem] border-black">
        <div className=" flex justify-between max-w-fit items-center p-2">
          <div className="cursor-pointer">
            <Image src="/images/gg-icon.png" alt="logo" width={100} height={80} className="" onClick={toggleSidebar}/>
          </div>
        </div>
        <div className="flex justify-between  text-xl ">
        <button
            onClick={() => signIn("google")}
            className=" auth-button"
            aria-label="Sign In"
          >
            Sign In
          </button>
          <button
              onClick={() => signOut()}
              className="auth-button"
              aria-label="Sign Out"
            >
              Sign Out
          </button>
          <div className="set-link">
            <Link href="api/Schedule">Schedule</Link>
          </div>
          <div className="set-link">
            <Link href="api/Join">Join</Link>
          </div>
        </div>
    </nav>
    <Sidebar isOpen={isOpen}/>
    </>
  );
}
