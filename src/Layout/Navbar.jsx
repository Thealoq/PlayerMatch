import { AiFillHome } from "react-icons/ai"
export default function Navbar() {
    return (
        <div className="hidden bg-[#1c1a1f] w-[100px] h-[100vh] flex-col md:flex justify-between items-center py-10">
            <div>
                <div className="flex justify-center items-center m-4">
                    <AiFillHome size={32} />
                </div>
                <div className="flex justify-center items-center m-4">
                    <AiFillHome size={32} />
                </div>
                <div className="flex justify-center items-center m-4">
                    <AiFillHome size={32} />
                </div>
            </div>
            <div className="flex justify-center items-center m-4">
                <AiFillHome size={32} />
            </div>
            <div>
                <div className="flex justify-center items-center m-4">
                    <AiFillHome size={32} />
                </div>
                <div className="flex justify-center items-center m-4">
                    <AiFillHome size={32} />
                </div>
                <div className="flex justify-center items-center m-4">
                    <AiFillHome size={32} />
                </div>
            </div>
        </div>
    )
}