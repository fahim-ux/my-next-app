"use client"
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
// import { useRouter } from "next/router";



export default function Navbar() {

  const {data:session , status} = useSession();
  // const router = useRouter();

  return (
    <>
    <nav className="navbar bg-white text-black flex flex-row justify-between items-center px-4 h-20">
        <div className="navbar-data flex justify-between max-w-fit items-center p-2">
          <div className="navbar-data-image  ">
            <Image src="/images/gg-icon.png" alt="logo" width={100} height={80} className="" />
          </div>
        </div>
        <div className="navbar-links flex justify-between  text-xl ">
        <button
            onClick={() => signIn("google")}
            className="text-lg font-medium hover:text-gray-600 mx-5 "
            aria-label="Sign In"
          >
            Sign In
          </button>
          <button
              onClick={() => signOut()}
              className="text-lg font-medium hover:text-gray-600 mx-5"
              aria-label="Sign Out"
            >
              Sign Out
          </button>
          <div className="navbar-links-signOut p-2 flex justify-center items-center mx-5">
            <Link href="api/auth/signOut">Schedule</Link>
          </div>
          <div className="navbar-links-signOut p-2 flex justify-center items-center mx-5">
            <Link href="api/auth/signOut">Join</Link>
          </div>
        </div>
    </nav>
    </>
  );
}
