"use client"
import { signIn} from "next-auth/react";
import { FaGoogle,FaGithub} from "react-icons/fa";



export default function Choose() {

  return (
    <>
        <div className="w-full h-[90vh] bg-[#17153B] flex justify-center items-center ">
          <div className="w-[55vh]  flex flex-col justify-between items-center rounded-sm p-3 bg-[#003161] gap-6">
            <div className="w-full h-[10vh] bg-[#006A67]  p-2 rounded-sm">
              <div className="font-iceland text-[2rem] font-semibold bg-[#FFF4B7] w-full h-full flex justify-center items-center text-black rounded-sm">SignIn</div>
            </div>
            <div className="w-full  bg-[#006A67] flex flex-col p-2 rounded-sm gap-3">
            <button
            onClick={() => signIn("google")} className=" w-full h-[10vh] bg-[#FFF4B7] flex justify-evenly items-center font-iceland text-[1.6rem] text-black rounded-sm"aria-label="Sign In">
              <FaGoogle className="text-[2.5rem]"/>
              SignIn with Google</button>
            <button
            onClick={() => signIn("github")} className=" w-full h-[10vh] bg-[#FFF4B7] flex justify-evenly items-center font-iceland text-[1.6rem] text-black rounded-sm"aria-label="Sign In">
              <FaGithub className="text-[2.5rem]"/>
               SignIn with Github</button>
            </div>
          </div>
        </div>
    </>
  );
}
