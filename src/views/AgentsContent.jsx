import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
export default function Agents() {
    const { uuid } = useParams()
    const [Content, SetContent] = useState([]);
    const [Value, Setvalue] = useState([]);
    useEffect(() => {
        fetch("https://valorant-api.com/v1/agents/" + uuid)
            .then(response => response.json())
            .then(json => {
                SetContent(json.data)
            });
      
    }, []);
    function ClickEvent(e) {
        Setvalue(e)
    }
    return (
        <div className="h-[100vh]">
            <div className="relative -z-0">
                <div className=" flex justify-center w-full  items-center bg-gradient-to-b to-[#141215] from-[#272329]" style={{
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(https://media.valorant-api.com/maps/fd267378-4d1d-484f-ff52-77821ed10dc2/splash.png)`,
                }}>
                    <div className="flex justify-center items-center w-full h-[300px]" style={{
                        backgroundPositionX: "center",
                        backgroundPositionY: "16%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(https://media.valorant-api.com/agents/${uuid}/fullportrait.png)`,
                    }}></div>
                </div>
                <div className="flex flex-col justify-center bg-gradient-to-t from-[#141215] h-[300px] absolute w-full top-0 items-center"></div>
            </div>



            <div className="sm:flex-row flex-col sm:pt-[2rem] pt-0 flex sm:justify-center justify-center items-center md:mt-[-6rem] mt-[-3rem] relative z-10 sm:rounded">
                <div className="md:w-[350px] w-[290px] md:h-[500px] h-[430px] bg-[#1c1a1f] flex justify-center items-center">
                    <div className="flex-col mt-0 flex justify-center items-center">
                        <div className="w-[128px] h-[128px] flex justify-center items-center bg-[#141215] rounded-full">
                            <img width={128} height={128} className="rounded-full" src={`https://media.valorant-api.com/agents/${uuid}/displayicon.png`} alt="" />
                        </div>
                        <div className="flex-col flex justify-center items-center p-2 mt-1 font-bold">
                            <div className="text-center">
                                <p>{Content?.displayName}</p>
                            </div>
                            <div className="mt-2 inline-flex items-center text-sm font-medium leading-none text-gray-100 py-2 px-3 border border-white/20 rounded-full">
                                <img src={`https://media.valorant-api.com/agents/roles/${Content?.role?.uuid}/displayicon.png`} width={15} height={15} alt="" />  <p className="ml-2">{Content?.role?.displayName}</p>
                            </div>
                            <div className="mt-2 font-light text-sm flex-col flex justify-center items-center w-full">
                                <div className="flex justify-center items-center text-center">
                                    <h1 className="font-bold">D. Name</h1>
                                </div>
                                <div className="flex mt-2 justify-center items-center text-center">
                                    <p>{Content?.developerName}</p>
                                </div>
                            </div>
                            <div className="mt-2 font-light text-sm flex-col flex justify-center items-center w-full">
                                <div className="flex justify-center items-center text-center">
                                    <h1 className="font-bold">Tags</h1>
                                </div>
                                <div className="flex-col justify-center items-center text-center">
                                    {
                                        Content?.characterTags?.characterTags?.map((t ,i)=> {
                                            return (
                                                <div key={i} className="flex justify-center items-center text-center m-2">
                                                    <p>{t}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="w-[250px] m-2 border hover:border-white font-medium border-zinc-500 h-[40px] flex justify-center items-center  ease-linear rounded-md  text-sm">
                                <p>Share Character</p>
                            </div>

                        </div>
                    </div>
                </div>



                <div className="md:ml-6 ml-0">
                    <div className="w-[300px] md:w-full overflow-auto no-scrollbar whitespace-nowrap lg:whitespace-normal lg:flex-wrap " aria-label="Tabs">
                        <a className="hidden relative md:inline-flex shrink-0 items-center cursor-pointer">
                            <div className="relative flex items-center justify-center shrink-0 px-4 py-4 text-sm font-bold uppercase tracking-wide text-gray-100">
                                <span>Skills</span>
                                <div className="absolute inset-x-0 bottom-0 h-1 rounded-[1px] bg-primary-400"></div>
                            </div>
                        </a>
                        {
                            Content.abilities?.map((t,i) => {
                                return (
                                    <a key={i} onClick={e => ClickEvent(t.slot)} className="relative inline-flex shrink-0 items-center cursor-pointer">
                                        <div className="relative flex items-center justify-center shrink-0 px-4 py-4 text-sm font-bold uppercase tracking-wide text-gray-300 transition-colors ease-linear hover:bg-white/10 rounded">
                                            <img className="w-5 h-5 mr-2" src={t.displayIcon} />
                                            <span>{t.displayName}</span>
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>
                    <div className="bg-[#1c1a1f] md:w-[800px] w-[290px] rounded md:h-[300px] h-[200px] mt-2 ml-1 flex justify-center items-center flex-col">
                        {
                            Content.abilities?.map((t, i) => {
                                if(!Value.length) {
                                    return (
                                        <div key={i}>
                                            <div>
                                                {t?.displayName}
                                            </div>
                                        </div>
                                    )
                                } 
                                if(Value.length) {
                                    if(t.slot == Value) {
                                        return(
                                            <div key={i}>
                                            <div>
                                                {t?.displayName}
                                            </div>
                                        </div>
                                        )
                                    }
                                }
                               
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}