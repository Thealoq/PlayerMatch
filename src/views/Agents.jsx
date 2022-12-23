import { useState, useEffect } from "react";
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
        //👋
        const link = "/Agents" + "/" + e
        navigateTo(link, { replace: true })
    }

    return (
        <div>
            <div className="p-20">
                <div className="flex justify-center items-center text-left text-2xl text-bold m-2 ">
                    <span>POPULAR AGENTS</span>
                </div>
                <div className="flex flex-wrap w-full justify-center items-center">
                    {
                        Content?.map((t, i) => {
                            return (
                                <div key={i} style={{
                                    backgroundPosition: "center 40%",
                                    backgroundRepeat: "no-repeat",
                                    backgroundImage: `url(https://media.valorant-api.com/agents/${t.uuid}/background.png)`,
                                }} className="flex justify-center w-[320px] m-2 items-center flex-col rounded-md" onClick={e => AgentsPage(t.uuid)}>
                                    <div className="w-full h-[150px] object-cover rounded-t-md" style={{
                                        backgroundPosition: "center 20%",
                                        backgroundRepeat: "no-repeat",
                                        backgroundImage: `url(https://media.valorant-api.com/agents/${t.uuid}/fullportrait.png)`,
                                    }}></div>
                                    <div className="border-4 mt-[-1rem]  bg-[#1c1a1f] absolute border-[#1c1a1f] rounded-full flex justify-start items-center">
                                        <img className="rounded-full" width={60} height={60} src={`https://media.valorant-api.com/agents/${t.uuid}/displayicon.png`} />
                                    </div>
                                    <div className="flex-col flex justify-center w-full bg-[#1c1a1f] h-[160px]">
                                        <div className="mb-4 ml-[2.3rem]">
                                            <div className="mt-[1rem] ml-2 flex justify-start items-center text-bold">
                                                {t.displayName}
                                            </div>
                                            <div className="mt-[0.2rem] ml-2 flex justify-start items-center text-xs">
                                                <div className="w-[92%]">
                                                    {t.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}