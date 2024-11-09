import Image from "next/image"

export default function Footer ()
{
    return (
        <footer>
        <div className="footer flex flex-row h-fit bg-white text-black p-3 justify-start font-robotoMono gap-4 border-t-2 border-black ">
            <div className="company-info  flex flex-col max-w-[38rem] h-fit gap-5 p-3 overflow-hidden w-fit">
                <div className="logo-name flex flex-row justify-start items-center  gap-2 w-fit">
                    <Image src="/images/gg-icon.png" alt="logo" width={100} height={80} />
                    <div className="name text-3xl font-bold ">Coderfolks</div>
                </div>
                <p className="vision text-xl">
                    Our vision is to create a global community of developers who can learn and grow together.
                </p>
                <p className="license font-consolas bg-slate-300 rounded-[6px] p-1 max-w-[22rem] pl-2">
                    Code licensed NIT, docs CC BY 3.0.
                </p>
            </div>
            <div className="connect h-fit w-full flex flex-row  p-3 gap-2">
            <div className="resources text-2xl p-2 w-[16rem] flex flex-col gap-8">
                    <p className="font-bold text-blue-400">RESOURCES</p>
                    <ul className="space-y-4">
                        <li className="footer-link ">Documentation</li>
                        <li className="footer-link">Flowbite Blocks</li>
                        <li className="footer-link">Figma Design</li>
                        <li className="footer-link">Flowbite Icons</li>
                        <li className="footer-link">Flowbite GPT</li>
                        <li className="footer-link">Pro version</li>
                    </ul>
                </div>
                <div className="follow text-2xl p-2 w-[16rem] flex flex-col gap-8">
                    <p className="font-bold text-blue-400">FOLLOW</p>
                    <ul className="space-y-4">
                        <li className="footer-link">Twitter</li>
                        <li className="footer-link">Facebook</li>
                        <li className="footer-link">Instagram</li>
                        <li className="footer-link">LinkedIn</li>
                        <li className="footer-link">YouTube</li>
                        <li className="footer-link">GitHub</li>
                    </ul>
                </div>
                <div className="about text-2xl  p-2 w-[16rem] flex flex-col gap-8">
                    <p className="font-bold text-blue-400">ABOUT US</p>
                    <ul className="space-y-4">
                        <li className="footer-link">Company</li>
                        <li className="footer-link">Team</li>
                        <li className="footer-link">Security</li>
                        <li className="footer-link">Privacy</li>
                        <li className="footer-link">Terms</li>
                        <li className="footer-link">License</li>
                    </ul>
                </div>
                <div className="help text-2xl p-2 w-[16rem] flex flex-col gap-8">
                    <p className="font-bold text-blue-400">SUPPORT</p>
                    <ul className="space-y-4">
                        <li className="footer-link">Help center</li>
                        <li className="footer-link">FAQ</li>
                        <li className="footer-link">Forum</li>
                        <li className="footer-link">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
        © Coderfolks™ 2024. All Rights Reserved.
        </div>
        </footer>
        
        
        
    )
}
