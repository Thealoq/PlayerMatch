import React, { useState, createRef } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import av from "../Assets/av.jpg";
export default function Responsive() {
    const [Content, SetContent] = useState(false);
    const dropdown = createRef();

    function Open(e) {
        Content ? SetContent(false) : SetContent(true)
        Content ? dropdown.current.style.display = "none" : dropdown.current.style.display = "flex"
    }

    return (
        <div className="flex h-[80px] justify-between items-center px-8 bg-[#1C1A1F]">
            <div className="flex justify-center items-center">
                <div className="flex items-center m-2 ">
                    <a href="/"className="text-[#e00b87] text-bold text-lg">ValorantWiki</a>
                </div>
                <div className="cursor-pointer select-none m-2" onClick={e => Open(e)}>
                    <div className="flex items-center">
                        Valorant {Content ? <RiArrowDropDownLine size={32} /> : <RiArrowDropUpLine size={32} />}
                    </div>
                    <div ref={dropdown} className="hidden absolute z-20 w-[200px] bg-[#201d22] h-[120px] flex-col justify-center items-start px-2 text-sm">
                        <div className="m-2 hover:opacity-75">
                            <a href="/Valorant/Agents">Agents</a>
                        </div>
                        <div className="m-2 hover:opacity-75">
                            <a href="/Valorant/Maps">Maps</a>
                        </div>
                        <div className="m-2 hover:opacity-75">
                            <a href="/Valorant/Mods">Mods</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center w-[110px]" >
                <div>
                    Login
                </div>
                <div>
                    <img className="rounded-full" width={60} height={60} src={av} />
                </div>
            </div>
        </div>
    )
}