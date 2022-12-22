import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';               
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
        <div>
            {
                Content?.map(t => {
                    return (
                        <div className="flex justify-center items-center" onClick={e => AgentsPage(t.uuid)}>
                            <div>
                                <img width={400} height={400} src={t.fullPortrait} alt={t.displayName} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}