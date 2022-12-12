import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
export default function Ranks() {
    const navigateTo = useNavigate()
    const [Ranks, SetRanks] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1"+ "?language=tr-TR")
            .then(response => response.json())
            .then(json => {
                SetRanks(json.data.tiers)
            });
    }, []);
    return (
        <div className="allranks-body">
            {
                Ranks.map((item, index) => {
                    if(!item.smallIcon) return
                    return (
                        <div key={index} className="ranks-body center">
                            <div><img src={item.smallIcon} alt={item.tierName} /></div>
                           <div><span>{item.tierName}</span></div>
                        </div>
                    )
                })
            }
        </div>
    )
}