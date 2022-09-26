import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function Agents() {
    const navigateTo = useNavigate();
      const [Content, SetArray] = useState([]);
      function Fetch() {
        fetch("https://valorant-api.com/v1/agents")
            .then(response => response.json())
            .then(json => {
                SetArray(json.data.filter(item => item.background))
            });
    }
    useEffect(() => {
        Fetch()
    }, []);

    function AgentsPage(e) {
        const link = window.location.origin + "/Agents" + "/" + e
        navigateTo(link, { replace: true })
    }
    

    return (
        <div className="center">
            <div className="agent-cards-bodys">
                {
                    Content.map(( item, index ) => {
                        return(
                            <div onClick={event => AgentsPage(item.uuid)} key={index} className="agent-card-witdh">
                               <div>
                                    <h1>{item.displayName}</h1>
                                </div>
                                <div>
                                    <img src={item.fullPortrait} alt={item.displayName} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}