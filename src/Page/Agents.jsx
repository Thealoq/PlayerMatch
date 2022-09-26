import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
export default function Agents() {
    const navigateTo = useNavigate()
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
        const link = "/Agents" + "/" + e
        navigateTo(link, { replace: true })
    }
    

    return (
        <div className="center">
            <div className="agent-cards-bodys">
                {
                    Content.map(( item, index ) => {
                        return(
                            <div key={index} style={{
                                backgroundImage: "url(" + item.background + ")",
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat'
                            }}  onClick={event => AgentsPage(item.uuid)} className="agent-card-witdh">
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