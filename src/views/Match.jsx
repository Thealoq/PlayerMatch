import { useState } from "react"
import banner from "../Assets/match.jpg"
import MatchPic from "../Assets/match/macth.jpeg"
import MatchPicTwo from "../Assets/match/match2.jpg"
import soru from "../Assets/av.jpg"

export default function Match() {
    const [count, setCount] = useState(1);
    const [Text, setText] = useState(false);
    function TextWrite() {
        Text ? setText(false) : setText(true)
    }
    let array = [
        { "url": MatchPic, "text": "Mahzun" },
        { "url": banner, "text": "Alican" },
        { url: MatchPicTwo, "text": "Muteber" },
        { "url": MatchPic, "text": "Tevfik" },
        { "url": banner, "text": "Münir" },
        { url: MatchPicTwo, "text": "Saim" },
        { "url": MatchPic, "text": "Süheyl" },
        { "url": banner, "text": "Bahri" },
        { url: MatchPicTwo, "text": "Hüccet" },
        { "url": MatchPic, "text": "Fazıl" },
        { "url": banner, "text": "Üzeyir" },
        { url: MatchPicTwo, "text": "Mete" }
    ]
    return (
        <div>
            <div className="relative w-full px-4 py-16 lg:py-32 bg-primary-400 text-center selection:text-primary-400" style={{
                backgroundPosition: "center 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
            }}>
                <h1 className="text-3xl md:text-4xl  font-bold uppercase text-white">Match Player</h1>
                <h2 className="text-white mb-8 mt-4 font-medium lg:text-lg ">Let's match the most suitable player for you together</h2>
            </div>
            <div className="flex justify-center items-center flex-wrap mt-10">
                <div className="rotate-12 z-10 mr-[-4rem] opacity-50 rounded-md ">
                    <div className=" flex justify-center items-center w-[200px]  h-[270px] rounded-lg z-10 " style={{
                        backgroundPosition: "center 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${array[count - 1] ? array[count - 1].url : soru})`,
                        backgroundSize: "cover",
                    }}> </div>
                    <div className="w-[200px] h-[150px] bg-[#1C1A1F] z-20 mt-[-4rem] flex justify-center items-center rounded-t-lg">
                        {array[count - 1] ? array[count - 1].text : "Kullancı Bulamadim"}
                    </div>
                </div>
                <div className="z-20">
                    <div className=" flex justify-center items-center w-[200px] rounded-md h-[300px] z-10 " style={{
                        backgroundPosition: "center 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${array[count] ? array[count].url : soru})`,
                        backgroundSize: "cover",
                    }}> </div>
                    <div className="w-[200px] h-[150px] bg-[#1C1A1F] z-20 mt-[-4rem] flex justify-center items-center rounded-t-lg">
                        {array[count] ? array[count].text : "Kullancı Bulamadim"}
                    </div>
                </div>
                <div className="-rotate-12 z-10 ml-[-4rem] opacity-50" >
                    <div className=" flex justify-center items-center w-[200px] rounded-md h-[270px] z-10 " style={{
                        backgroundPosition: "center 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${array[count + 1] ? array[count + 1].url : soru})`,
                        backgroundSize: "cover",
                    }}> </div>
                    <div className="w-[200px] h-[150px] bg-[#1C1A1F] z-20 mt-[-4rem] flex justify-center items-center rounded-t-lg">
                        {array[count + 1] ? array[count + 1].text : "Kullancı Bulamadim"}
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center m-2">
                <button className="m-2 bg-[#1C1A1F] p-2 w-[90px] rounded-sm" onClick={e => { setCount(count - 1), setText(false) }} >önceki</button>
                <button className="m-2 bg-[#1C1A1F] p-2 w-[140px] text-sm rounded-sm" onClick={e => TextWrite()} >{Text ? "Takiptesin" : "Takip Et"}</button>
                <button className="m-2 bg-[#1C1A1F] p-2 w-[90px] rounded-sm" onClick={e => { setCount(count + 1), setText(false) }} >sonraki</button>
            </div>
        </div>
    )
}