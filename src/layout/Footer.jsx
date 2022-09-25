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
                <div className="center">
                    <span>© Copyright ValorantWiki </span>
                </div>
                <div className="footer-content"><p>ValorantWiki no site is official and legal, Riot Games is forma allguma. Riot Games, Valorant, and Riot Games Inc.</p></div>
            </div>
            <div>
                <span>Developer by <a style={{ color: "#9061f9" }} href="https://github.com/Thealoq">Thealoq</a></span>
            </div>
        </div>
        </div>
    )
}