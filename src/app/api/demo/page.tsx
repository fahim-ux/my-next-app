import React from "react";
import Back from "../../components/Back";

export default function Page() {
    return (
        <>
        <div className="h-[100vh] bg-new-back flex justify-center items-center p-9 bg-opacity-10 ">
            <div className="text-white text-4xl font-iceland w-full h-full rounded-lg  gap-0  overflow-hidden relative ">
               <Back/>
            </div>
                {/* <div className=" w-[50vh]  bg-white bg-opacity-20 z-40 rounded-sm text-xl">
                    <div className="">Folkie</div>
                    <div className="">hii</div>
                </div> */}
        </div>
        </>
    );

}