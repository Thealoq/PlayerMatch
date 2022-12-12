import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
export default function Maps() {
    const navigateTo = useNavigate()
    const [Maps, SetMaps] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/maps"+ "?language=tr-TR")
            .then(response => response.json())
            .then(json => {
                SetMaps(json.data.filter(item => item.displayIcon))
            });
    }, []);

    function MapPage(e) {
        const link = "/Maps" + "/" + e
        navigateTo(link, { replace: true })
    }

    return (
        <div className="allmaps-body">
            {
                Maps.map((item, index) => {
                    return (
                        <div key={index} className="map-body">
                            <div onClick={event => MapPage(item.uuid)} className="map-bg" style={{
                                backgroundImage: "url(" + item.listViewIcon + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}>
                                <div className="map-bodytrans center">
                                    <h3>{item.displayName}</h3>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}