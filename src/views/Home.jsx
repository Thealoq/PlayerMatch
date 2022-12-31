import valorant from "../Assets/valorant.jpg"
import lol from "../Assets/lol.jpg"
import tft from "../Assets/tft.jpg"
import banner from "../Assets/banner.png"
import av from "../Assets/av.jpg"
import lolsvg from "../Assets/icon/lol.png"
export default function Home() {
    const arrayim = [
        {
            name: "Valorant",
            src: valorant,
            url: "/valorant/agents"
        },
        {
            name: "League of Legends",
            enable: true,
            src: lol
        },
        {
            name: "Teamfight Tactics",
            enable: true,
            src: tft
        }
    ]

    const users = [
        {
            name: "test",
            photo: av,
            nick: "Thealoq",
            desc: "lorem ipsum lorem ipsum",
            game: "League of Legends",
            icon: lolsvg
        },
        {
            name: "test",
            photo: av,
            nick: "Thealoq",
            desc: "lorem ipsum lorem ipsum",
            game: "League of Legends",
            icon: lolsvg
        },
        {
            name: "test",
            photo: av,
            nick: "Thealoq",
            desc: "lorem ipsum lorem ipsum",
            game: "League of Legends",
            icon: lolsvg
        },
        {
            name: "test",
            photo: av,
            nick: "Thealoq",
            desc: "lorem ipsum lorem ipsum",
            game: "League of Legends",
            icon: lolsvg
        },
    ]
    return (
        <div>
            <div className="relative w-full px-4 py-16 lg:py-32 bg-primary-400 text-center text-black selection:text-primary-400" style={{
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundImage: `url(${banner})`,
                backgroundSize: "cover",
            }}>
                <h1 className="text-3xl md:text-4xl  font-bold uppercase text-white">Player <b className="text-[#ffffff]">Match</b></h1>
                <h2 className="text-white mb-8 mt-4 font-medium lg:text-lg ">If you want to search for a new playmate, we help.</h2>
            </div>
            <div className="max-w-7xl mx-auto space-y-4  px-4 sm:px-6 lg:px-8 py-4">
                <h3 className="text-xl sm:text-2xl font-bold uppercase m-2 md:text-start text-center">Games 🕹️</h3>
                <div className="flex flex-wrap md:justify-start justify-center">
                    {
                        arrayim.map((x, i) => {
                            return (
                                <div key={i}>
                                    <a className="block m-2" href={x?.url ? x.url : " "}>
                                        <div className={`relative overflow-hidden rounded w-[200px] ${x.enable ? "opacity-50" : " "}`}>
                                            <img className="w-[280px] h-[300px] object-cover transition duration-200 hover:scale-105" src={x.src} />
                                        </div>
                                        <h2 className="mt-3 text-sm font-bold truncate hover:underline">{x.name}</h2>
                                        {x.enable ? <p className="mt-0.5 text-xs font-medium text-gray-300">Coming soon</p> : " "}
                                    </a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="mt-6 flex flex-col items-center ">
                 <h3 className="text-xl sm:text-2xl font-bold text-start font-display">Last Players</h3>
                <div className="flex flex-wrap justify-center items-center  w-[80%] p-2">
                    {
                        users.map((x, i) => {
                            return (
                                <div key={i} className="m-2 bg-[#1C1A1F] w-[300px]">
                                    <div className="flex flex-col h-full  rounded overflow-hidden transition duration-200 ease-out hover:bg-gray-700 hover:shadow-lg hover:-translate-y-px group" data-turbo="false" href="/damlos" />
                                    <div className="relative mb-6">
                                        <img className="w-full h-36 object-cover bg-center bg-cover" src={x.photo} />
                                        <img className="absolute left-4 -bottom-6 h-12 w-12 object-cover rounded-full overflow-hidden bg-gray-600 transition duration-200 ease-out ring-4 ring-gray-800 group-hover:ring-gray-700"  src={x.photo} />
                                    </div>
                                    <div className="flex flex-col flex-1 px-4 pt-2 pb-4 overflow-hidden">
                                        <div className="flex items-center">
                                            <h1 className="text-lg font-bold truncate">
                                                {x.nick}
                                            </h1>
                                        </div>
                                        <div className="h-full mt-0.5 text-sm text-gray-300 line-clamp-3">
                                            {x.desc}
                                        </div>
                                        <div className="flex items-center space-x-4 mt-4">
                                            <div className="inline-flex items-center max-w-1/2 truncate shrink-0">
                                                <img className="w-4 h-4 mr-1 object-contain shrink-0"  src={x.photo} />
                                                <span className="text-xs font-bold tracking-wide text-gray-300 uppercase truncate">@{x.nick}</span>
                                            </div>
                                            <div className="inline-flex items-center truncate">
                                                <img className="w-4 h-4 mr-1 shrink-0" src={x.icon} />
                                                <span className="text-xs font-bold tracking-wide text-gray-300 uppercase truncate">{x.game}</span>
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