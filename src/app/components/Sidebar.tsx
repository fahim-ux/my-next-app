import React from 'react';
import { FcDisplay } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { FcInvite } from "react-icons/fc";
import { FcPodiumWithSpeaker } from "react-icons/fc";
import { FcNook } from "react-icons/fc";
import { FcUp } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
import { FcMultipleInputs } from "react-icons/fc";
import { FcOnlineSupport } from "react-icons/fc";

interface SidebarProps {
    isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({isOpen}) => {
    const str = isOpen ? "sidebar-open" : "sidebar-close";
    return (
        <div className={`${str} flex flex-col gap-3 justify-start z-10`}>
            <div className="p-3  flex flex-col gap-2">
                <div className="sidebar-link"> 
                    <FcDisplay className="mr-2 " size={20}/>
                    <p>Dashboard</p> 
                </div>
                <div className="sidebar-link">
                    <FcPortraitMode className="mr-2" size={20}/>
                    <p>Profile</p>
                </div>
                <div className="sidebar-link">
                    <FcInvite className="mr-2" size={20}/>
                    <p>Inbox</p>
                </div>
                <div className="sidebar-link">
                    <FcPodiumWithSpeaker className="mr-2" size={20}/>
                    <p>Users</p>    
                </div>
                <div className="sidebar-link">
                    <FcNook className="mr-2" size={20}/>
                    <p>Products</p>    
                </div>
            </div>
            <div className="p-3  border-t-[0.1rem] border-black flex flex-col gap-2">
                <div className="sidebar-link">
                    <FcUp className="mr-2" size={20}/>
                    <p>Upgrade to Pro</p>    
                </div>
                <div className="sidebar-link">
                    <FcRules className="mr-2" size={20}/>
                    <p>Documentation</p>    
                </div>
                <div className="sidebar-link">
                    <FcMultipleInputs className="mr-2" size={20}/>
                    <p>Components</p>
                </div>
                <div className="sidebar-link">
                    <FcOnlineSupport className="mr-2" size={20}/>
                    <p>Help</p>
                </div>
            </div>
        </div>
    )
}


export default Sidebar;


