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

     console.log(Mods);
    function ModPage(e) {
        const link = "/Mods" + "/" + e
        navigateTo(link, { replace: true })
    }

    return (
            <div className="allmods-body">
                {
                    Mods.map((item, index) => {
                        return (
                            <div key={index} className="map-body">
                                <div onClick={event => ModPage(item.uuid)} className="map-bg center">
                                    <h2>{item.displayName}</h2>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
    )
}