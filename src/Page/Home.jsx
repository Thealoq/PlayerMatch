import { useState, useEffect } from "react";
import Camp from "../assets/camp.png"
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
export default function Home() {

    let splide = null;

    const [Content, SetArray] = useState([]);
    const [GameMode, SetGameMode] = useState([]);
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
    console.log(GameMode);

    useEffect(() => {
        splide.props.options.perPage = 1;
   
    }, [splide])

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
                <h1>Agents</h1>
                <Splide  ref={(ref) => splide = ref} id="test" options={{ rewind: true, width: "160vh", perPage: 4, autoplay: true, type: 'loop', }} aria-label="React Splide Example">
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
             <h1>GameMods</h1>
             </div>
              <div className="allgamemode">
                {
                    GameMode.map((item,index) => {
                        return(
                            <div className="home-gamemode center">
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
            <div className="">

            </div>
        </div>
    )
}