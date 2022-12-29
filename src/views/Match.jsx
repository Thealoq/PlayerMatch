import banner from "../Assets/match.jpg"
import img from "../Assets/av.jpg"
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
            <div className="flex justify-center items-center mt-[4rem]">
                <div className="w-[120px] h-[360px] bg-[#1C1A1F] m-2 mr-[22rem] mt-4 absolute -rotate-12 z-0 flex justify-center items-center">
                    <span>Önceki</span>
                </div>
                <div className="w-[300px] h-[400px] bg-[#3b3741] m-2 z-10 flex justify-center items-center flex-col">
                    <div className="m-2">
                        <img className="rounded-full" src={img} />
                    </div>
                    <div className="m-2">
                        <span>Thealoq</span>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-[150px] h-[360px] bg-[#1C1A1F] m-2 mt-4 ml-[22rem] absolute rotate-12 z-0 flex justify-center items-center">
                    <span>Sıradaki</span>
                </div>
            </div>
        </div>
    )
}