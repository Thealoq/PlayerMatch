import { useState, useEffect } from "react";
import Camp from "../assets/camp.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export default function Home() {

    const [Maps, SetMaps] = useState([]);
    const [Content, SetArray] = useState([]);
    const [GameMode, SetGameMode] = useState([]);
    const RankArray = [
        {
            name: "PLATINUM",

            largeIcon
                :
                "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/17/largeicon.png"
        },
        {
            name: "DIAMOND",

            largeIcon
                :
                "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/20/largeicon.png"
        },
        {
            name: "IMMORTAL",
            largeIcon
                :
                "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/23/largeicon.png"
        },
        {
            name: "RADIANT",
            largeIcon: "https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/24/largeicon.png"
        }
    ]
    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents")
            .then(response => response.json())
            .then(json => {
                SetArray(json.data.filter(item => item.background))
            });
    }, []);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/gamemodes")
            .then(response => response.json())
            .then(json => {
                SetGameMode(json.data.filter(item => item.displayIcon))
            });
    }, []);

    useEffect(() => {
        fetch("https://valorant-api.com/v1/maps")
            .then(response => response.json())
            .then(json => {
                SetMaps(json.data.filter(item => item.displayIcon))
            });
    }, []);

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
            <div className="center">
                <Splide id="test" options={{ rewind: true, width: "160vh", perPage: 2, autoplay: true, type: 'loop', }} aria-label="React Splide Example">
                    {Content && Content.length > 0 ? Content.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="slider-card-css">
                                <img width={800} src={item.fullPortrait} alt="" />
                            </div>
                        </SplideSlide>
                    )) : <h3 style={{ color: "white" }}>Resimler bulunamadı.</h3>}
                </Splide>
            </div>
            <div className="home-gamemodes center">
                <div style={{ marginTop: "1rem" }}>
                </div>
                <div className="allgamemode">
                    {
                        GameMode.map((item, index) => {
                            return (
                                <div key={index} className="home-gamemode center">
                                    <div>
                                        <img src={item.displayIcon} alt="" />
                                    </div>
                                    <div style={{ marginTop: "1rem" }}>
                                        <span>{item.displayName}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="home-maps">
                {
                    Maps.map((item, index) => {
                        return (
                            <div className="hop center" style={{
                                backgroundImage: "url(" + item.splash + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}></div>
                        )
                    })
                }
            </div>
            <div className="home-gamemodes center">
                <div className="allranks">
                    {
                        RankArray.map((item, index) => {
                            return (
                                <div key={index} className="home-ranks center">
                                    <div>
                                        <img src={item.largeIcon} alt="" />
                                    </div>
                                    <div style={{ marginTop: "1rem" }}>
                                        <span>{item.name}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}