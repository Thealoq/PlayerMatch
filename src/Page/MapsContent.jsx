import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
export default function MapsContent() {
    const navigateTo = useNavigate()
    const { name } = useParams()

    const [Content, SetContent] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/maps/" + name)
            .then(response => response.json())
            .then(json => {
                SetContent(json.data)
            });
    }, []);

    return (
        <div className="center">
            <div><h1>{Content?.displayName}</h1></div>
            <div style={{
                backgroundImage: "url(" + Content.splash + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="center Content-splash"></div>
           <div style={{
                backgroundImage: "url(" + Content.displayIcon + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }} className="center Content-icon"></div>
        </div>
    )
}