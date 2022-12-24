import { AiFillHome,AiOutlineLogin,AiOutlineUser } from "react-icons/ai"
import { SiMagento } from "react-icons/si"
import { BsFillMapFill } from "react-icons/bs"
import { FaModx } from "react-icons/fa"
import { GiSpy } from "react-icons/gi"



export default function Navbar() {
    return (
        <div className="relative hidden bg-[#1c1a1f] w-[100px] h-[100vh] flex-col justify-between items-center py-10">
            <div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Maps"><BsFillMapFill size={32} /></a>
                </div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Agents"><GiSpy size={32} /></a>
                </div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Mods"><FaModx size={32} /></a>
                </div>
            </div>
            <div className="flex justify-center items-center m-4">
                <a href="/"><AiFillHome size={32} /></a>
            </div>
            <div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Profile"><AiOutlineUser size={32} /></a>
                </div>
                <div className="flex justify-center items-center m-4">
                   <a href="/Login"> <AiOutlineLogin size={32} /></a>
                </div>
            </div>
        </div>
    )
}