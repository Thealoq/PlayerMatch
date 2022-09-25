import "./Layout.css"
import { useState, useEffect } from "react";
export default function Footer() {
    const textArray = [
        {
            name: "Home",
            path: "/",
        },
        {
            name: "Agents",
            path: "/Agents",
        },
        {
            name: "Maps",
            path: "/maps",
        },
        {
            name: "Mods",
            path: "/mods",
        },
        {
            name: "Ranks",
            path: "/ranks",
        },
    ]
    return (
        <div className="center bg">
            <div className="footer">
            <div>
                <div>
                    <span>© Copyright ValorantWiki </span>
                </div>
                <div className="footer-content"><p>Valorant Media Wiki no site is official and legal, Riot Games is forma allguma. Riot Games, Valorant, and Riot Games Inc.</p></div>
            </div>
            <div className="text-footer">
                 <div className="bg-footer">
                    {
                        textArray.map((item,index) => {
                            const link = window.location + item.path
                        return(
                            <div>
                            <a key={index} href={link}>{item.name}</a>
                            </div>
                        )
                        })
                    }
                 </div>
            </div>
            <div>
                <span>Developer by <a style={{ color: "#9061f9" }} href="https://github.com/Thealoq">Thealoq</a></span>
            </div>
        </div>
        </div>
    )
}