import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

export default function AgentContent() {
    const { name } = useParams()
    const [Content, SetArray] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents/" + name)
            .then(response => response.json())
            .then(json => {
                SetArray(json.data)
            });
    }, []);
    return (
        <div className="center">
            <div className="agentcontent-cards-bodys">
                <div style={{
                backgroundImage: "url(" + Content.background + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}  className="agentcontent-img">
                    <img className="center" src={Content.fullPortrait} alt={Content.displayName} />
                </div>
                <div className="agentcontent-content">
                    <div><h3>{Content.displayName}</h3></div>
                    <div><p>{Content.description}</p></div>
                    <div><h3>{Content.role?.displayName}</h3></div>
                    <div><p>{Content.role?.description}</p></div>
                </div>

            </div>
        </div>
    )

}