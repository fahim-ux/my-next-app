// "use strict";
import React from "react";
import Link from "next/link";

export default function Page() {
    return (
        <>
            <div className="text-white text-4xl font-iceland w-full h-full bg-white   rounded-lg  gap-0  overflow-hidden relative ">
                <div className="bg-[#F05454] w-[65%] absolute  h-full z-20" style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }} >
                </div>
                <div className="bg-[#30475e] w-[50%] absolute h-full left-[50%] z-10" >
                </div>
                
            </div>
        </>
    );

}