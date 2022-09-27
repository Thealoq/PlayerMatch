import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
export default function Mods() {
    const navigateTo = useNavigate()
    const [Mods, SetMods] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/gamemodes")
            .then(response => response.json())
            .then(json => {
                SetMods(json.data)
            });
    }, []);

    function ModPage(e) {
        const link = "/Mods" + "/" + e
        navigateTo(link, { replace: true })
    }

    return (
        <div className="allmods-body">
            {
                Mods.map((item, index) => {
                    if (!item.displayIcon) return <div onClick={event => ModPage(item.uuid)} key={index} className="map-body withmods">
                            <div className="map-bg">
                                <div><img width={128} height={128} src="https://cdn.discordapp.com/attachments/902302627767918602/1023996010629963890/pngegg_2.png" /></div>
                            </div>
                            <div className="map-bg">
                                <div><h2>{item.displayName}</h2></div>
                            </div>
                        </div>
                    return (
                        <div onClick={event => ModPage(item.uuid)} key={index} className="map-body withmods">
                            <div className="map-bg">
                                <div><img src={item.displayIcon} /></div>
                            </div>
                            <div className="map-bg">
                                <div><h2>{item.displayName}</h2></div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}