import Image from "next/image";
import Link from "next/link";
// import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  return (
    <>
    <div className="navbar bg-white text-black flex flex-row justify-between items-center px-2 h-20">
      
        <div className="navbar-data flex justify-between max-w-fit items-center p-2">
          <div className="navbar-data-image  ">
            <Image src="/images/gg-icon.png" alt="logo" width={100} height={80} className="" />
          </div>
          {/* <div className="navbar-data-title  p-4 text-2xl font-medium">
            IGet-Corp
          </div> */}
        </div>
        <div className="navbar-links flex justify-between  text-xl ">
          <div className="navbar-links-signIn p-2   mr-5">
            <Link href="api/auth/signIn">SignIn</Link>
          </div>
          <div className="navbar-links-signOut p-2   w-50">
            <Link href="api/auth/signOut">SignOut</Link>
          </div>
          
        </div>
      
    </div>
    </>
  );
}
