import valorant from "../Assets/valorant.jpg"
import lol from "../Assets/lol.jpg"
import tft from "../Assets/tft.jpg"
import jett from "../Assets/banner.png"
export default function Home() {
    const arrayim = new Array
    arrayim.push(
        {
        name: "Valorant",
        src: valorant
        },
        {
            name: "League of Legends",
            coming: true,
            src: lol
        },
        {
            name: "Teamfight Tactics",
            coming: true,
            src: tft
        },
        )
    return (
        <div>
            <div className="relative w-full px-4 py-16 lg:py-32 bg-primary-400 text-center text-black selection:text-primary-400" style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${jett})`,
                backgroundSize: "cover",
            }}>
                <h1 className="text-3xl md:text-4xl  font-bold uppercase text-white">see your<br />Game Stats</h1>
                <h2 className="text-white mb-8 mt-4 font-medium lg:text-lg ">we collect and combine information for you in games</h2>
            </div>
            <div className="max-w-7xl mx-auto space-y-4  px-4 sm:px-6 lg:px-8 py-4">
                <h3 className="text-xl sm:text-2xl font-bold uppercase m-2">Games 🕹️</h3>
                <div className="flex flex-wrap">
                    {
                        arrayim.map((x, i) => {
                            return (
                                <div key={i}>
                                    <a className="block m-2" href="/">
                                        <div className={`relative overflow-hidden rounded w-[200px] ${x.coming ? "opacity-50" : " "}`}>
                                            <img className="w-[280px] h-[300px] object-cover transition duration-200 hover:scale-105" src={x.src} />
                                        </div>
                                        <h2 className="mt-3 text-sm font-bold truncate hover:underline">{x.name}</h2>
                                        {x.coming ? <p className="mt-0.5 text-xs font-medium text-gray-300">Coming soon</p> : " "}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}