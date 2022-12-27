import React, { useState, createRef } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import av from "../Assets/av.jpg";
export default function Responsive() {
    const [Content, SetContent] = useState(false);
    const [Drop, SetDropDown] = useState(false);
    const [DropTwos, SetDropDownTwo] = useState(false);
    const dropdown = createRef();
    const dropTwo = createRef();
    const dropTree = createRef();
    function Open(e) {
        if (Drop) {
            SetDropDown(false)
            dropTwo.current.style.display = "none"
        }
        Content ? SetContent(false) : SetContent(true)
        Content ? dropdown.current.style.display = "none" : dropdown.current.style.display = "flex"
    }

    function OpenTwo(e) {
        if (Content) {
            SetContent(false)
            dropdown.current.style.display = "none"
        }
        Drop ? SetDropDown(false) : SetDropDown(true)
        Drop ? dropTwo.current.style.display = "none" : dropTwo.current.style.display = "flex"
    }

    function OpenTree(e) {
        DropTwos ? SetDropDownTwo(false) : SetDropDownTwo(true)
        DropTwos ? dropTree.current.style.display = "none" : dropTree.current.style.display = "flex"
    }
    return (
        <div>
            <div className="flex md:hidden bg-[#1C1A1F]">
                <div className="flex items-center m-2 ">
                    <a href="/" className="text-[#e00b87] text-bold text-lg">ValorantWiki</a>
                </div>
                <div className=" md:cursor-pointer select-none p-2  " onClick={e => OpenTree(e)}>
                    <div className="flex items-center">
                        All {DropTwos ? <RiArrowDropDownLine size={32} /> : <RiArrowDropUpLine size={32} />}
                    </div>
                    <div ref={dropTree} className="hidden absolute z-20 w-[200px] mt-2  bg-[#201d22] h-[120px] flex-col justify-center items-start px-2 text-sm rounded-lg">
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

            <div className="hidden md:flex h-[80px] justify-between items-center px-8 bg-[#1C1A1F]">
                <div className="flex justify-center items-center">
                    <div className="flex items-center m-2 ">
                        <a href="/" className="text-[#e00b87] text-bold text-lg">ValorantWiki</a>
                    </div>
                    <div className="cursor-pointer select-none m-2" onClick={e => Open(e)}>
                        <div className="flex items-center">
                            Valorant {Content ? <RiArrowDropDownLine size={32} /> : <RiArrowDropUpLine size={32} />}
                        </div>
                        <div ref={dropdown} className="hidden absolute z-20 w-[200px] bg-[#201d22] h-[120px] flex-col justify-center items-start px-2 text-sm rounded-lg">
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
                    <div className="cursor-pointer select-none m-2" onClick={e => OpenTwo(e)}>
                        <div className="flex items-center">
                            Valorant {Drop ? <RiArrowDropDownLine size={32} /> : <RiArrowDropUpLine size={32} />}
                        </div>
                        <div ref={dropTwo} className="hidden absolute z-20 w-[200px] bg-[#201d22] h-[120px] flex-col justify-center items-start px-2 text-sm rounded-lg">
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
                <div className="w-[105px] flex justify-between items-center">
                    <div className="flex justify-center items-center">
                        Login
                    </div>
                    <div className="flex justify-center items-center">
                        <img className="rounded-full" width={50} height={50} src={av} />
                    </div>
                </div>
            </div>
        </div>
    )
}