import banner from "../Assets/match.jpg"
import MatchPic from "../Assets/match/macth.jpeg"
import MatchPicTwo from "../Assets/match/match2.jpg"
export default function Match() {
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
            <div className="flex justify-center items-center flex-wrap mt-10 ">
                <div className="rotate-12 z-10 mr-[-4rem] opacity-50">
                    <div className=" flex justify-center items-center w-[200px]  h-[270px] rounded-lg z-10 " style={{
                        backgroundPosition: "center 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${MatchPic})`,
                        backgroundSize: "cover",
                    }}> </div>
                    <div className="w-[200px] h-[150px] bg-[#1C1A1F] z-20 mt-[-4rem] flex justify-center items-center rounded-t-lg">
                        Thealoq
                    </div>
                </div>
                <div className="z-20">
                    <div className=" flex justify-center items-center w-[200px]  h-[300px] rounded-lg z-10 " style={{
                        backgroundPosition: "center 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${banner})`,
                        backgroundSize: "cover",
                    }}> </div>
                    <div className="w-[200px] h-[150px] bg-[#1C1A1F] z-20 mt-[-4rem] flex justify-center items-center rounded-t-lg">
                        Thealoq
                    </div>
                </div>
                <div className="-rotate-12 z-10 ml-[-4rem] opacity-50" >
                    <div className=" flex justify-center items-center w-[200px]  h-[270px] rounded-lg z-10 " style={{
                        backgroundPosition: "center 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${MatchPicTwo })`,
                        backgroundSize: "cover",
                    }}> </div>
                    <div className="w-[200px] h-[150px] bg-[#1C1A1F] z-20 mt-[-4rem] flex justify-center items-center rounded-t-lg">
                        Thealoq
                    </div>
                </div>
            </div>
        </div>
    )
}