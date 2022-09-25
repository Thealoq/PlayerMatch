import { useState,useEffect } from "react";
import Camp from "../assets/Camp.png"


import "../app.css"
export default function Home() {
    return (
        <div className="center">
            <div className="agent-cards-body">
                <div className="agent-home-title">
                 <div>
                 <h3>Valorant: The 5v5 Competitive Game</h3>
                 <p>A 5v5 tactical FPS with outstanding characters, precise shooting mechanics and unique skills!</p></div> 
                </div>
                <div className="center">
                    <div><img src={Camp} alt="Camp" /></div>
                </div>
              
            </div>
        </div>
    )
}