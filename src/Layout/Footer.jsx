export default function Footer() {
    return (
        <div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1C1A1F" fillOpacity="1" d="M0,160L360,224L720,160L1080,256L1440,192L1440,320L1080,320L720,320L360,320L0,320Z"></path></svg>
            </div>
            <div className="w-full bg-[#1C1A1F] p-12 flex justify-center items-center">
                <div className="md:w-[65%] flex-col md:flex-row flex justify-between items-center">
                    <div className="flex justify-center items-center flex-col">
                        <div className="m-2 text-start">
                            <span>Socia Media</span>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792]" href="https://www.instagram.com/thealoq">Instagram</a>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792] text-start" href="https://www.youtube.com/channel/UCdRdD1r4IB0xI9PcFoTkLBg">Youtube</a>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792]" href="https://discord.gg/AF5Dzjxr7S">Discord</a>
                        </div>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="m-2 text-start flex">
                            <span>Company</span>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792]" href="https://discord.gg/AF5Dzjxr7S">Discord</a>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792] text-start" href="https://www.youtube.com/channel/UCdRdD1r4IB0xI9PcFoTkLBg">Youtube</a>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792]" href="https://www.instagram.com/thealoq">Instagram</a>
                        </div>

                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <div className="m-2 text-start">
                            <span>Games</span>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792]" href="/">VALORANT</a>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792] text-start" href="/">League of Legends</a>
                        </div>
                        <div className="m-2 text-sm text-start">
                            <a className="text-[#8a8792]" href="/">Teamfight Tactics</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}