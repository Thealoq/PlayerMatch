import { RxAvatar } from "react-icons/rx"
import img from "../Assets/v.png"
export default function Responsive() {
    return (
        <div className="flex h-[80px] justify-between items-center bg-[#1c1a1f] md:px-[6.5rem] px-2">
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center m-4">
                   <a href="/"> <img width={60} height={60} src={img}/></a>
                </div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Agents" className="text-bold text-lg hover:opacity-75">Agents</a>
                </div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Maps" className="text-bold text-lg hover:opacity-75">Maps</a>
                </div>
                <div className="flex justify-center items-center m-4">
                    <a href="/Mods">Mods</a>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center m-4">
                    <a href="/Login" ><div className="flex justify-between items-center w-[75px]">
                        <div>
                            User
                        </div>
                        <div><RxAvatar size={32} /></div>
                    </div></a>
                </div>
            </div>
        </div>
    )
}