"use client";
import { trace } from "console";
import React,{useState,useRef, use, useEffect} from "react";

export default function Page() {

  const [peerConnection,SetpeerConnection] = useState<RTCPeerConnection | null>(null);
  const [mediaStream,SetmediaStream] = useState<MediaStream | null>(null);
  const videoref = useRef<HTMLVideoElement>(null);
  

  useEffect(()=>{
    console.log("Creating Peer Connection");
    const pc = new RTCPeerConnection();
    SetpeerConnection(pc);

    return ()=>{
      console.log("Cleanup: Component unmounting or mediaStream changing");
      if(pc) pc.close();
      if(mediaStream)
      {
        mediaStream.getTracks().forEach(track => track.stop());
      }
    }
  },[mediaStream]);

  const handleGetMedia = ()=>{
    const constraints ={
      video:true,
      audio:true
    }
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) =>{
      console.log("Got Media Stream");
      SetmediaStream(stream);

      stream.getTracks().forEach(track =>{
        if(peerConnection) peerConnection.addTrack(track,stream);
      })

      if(videoref.current){
        videoref.current.srcObject = stream;
      }
    })
    .catch((error) =>{
      console.error("Error accessing media devices",error);
    })
  }



  return (
    <div className="bg-[#F4F6FF] text-black w-full h-[100vh] flex flex-col justify-center items-center gap-8">

        <button
        className="auth-button bg-indigo-300"
        aria-label="Get Media"
        onClick={handleGetMedia}
        >
        Get Media
        </button>

        <div className="w-[45vw] h-[70vh] bg-white text-black overflow-hidden p-3 flex justify-center items-center">
            {mediaStream && (
                <video
                autoPlay
                ref={videoref}
                />
            )} 
        </div>
    </div>
    

  )
}