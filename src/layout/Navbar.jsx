import "./Layout.css"
import logo from "../assets/logo.png"
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from 'react-icons/gi'
import { motion } from "framer-motion"
export default function Navbar() {
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
    const [Content, SetContent] = useState(false);
    useEffect(() => {
        textArray.map(item => {
            if (window.location.pathname == item.path) {
                document.title = "ValorantWiki | " + item.name
                window.document.getElementById(item.path).style.transform = "scale(1.2)"
                window.document.getElementById(item.path).style.backgroundColor = "#6746b1"
                window.document.getElementById(item.path).style.borderRadius = " 4px"
                window.document.getElementById(item.path).style.padding = "0.4rem"
                window.document.getElementById(item.path).style.textAlign = "center"
            }
        })
    }, []);
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, y: "-100%" },
    }
    function OpenMenu() {
        if (Content == false) {
            SetContent(true)
            document.getElementById("nav-res").style.display = "flex"
        } else {
            SetContent(false)
            document.getElementById("nav-res").style.display = "none"
        }
    }


    return (
        <div>
            <div className="navbar-bg">
                <div className="navbar-logo">
                    <a href="/">
                        <img src={logo} />
                    </a>
                </div>
                <div className="navbar-texts">
                    {
                        textArray.map((item, index) => {
                            return (
                                <a key={index} href={item.path}>
                                    <div id={item.path}>
                                        {item.name}
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
                <div className="navbar-textsim nav-resim">
                    <GiHamburgerMenu size={24} onClick={event => OpenMenu(event)} />
                </div>
            </div>
            <motion.div id="nav-res" animate={Content ? "open" : "closed"}
                variants={variants} className="navbar-responsive-texts">
                {
                    textArray.map((item, index) => {
                        return (
                            <a key={index} className="center" href={item.path}>
                                <div id={item.path}>
                                    {item.name}
                                </div>
                            </a>
                        )
                    })
                }
            </motion.div>
        </div>
    )
}