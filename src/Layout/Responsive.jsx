export default function Responsive() {
    return(
        <div className="md:hidden flex h-[80px] justify-between items-center bg-[#1c1a1f] px-6">
            <div className="cursor-pointer hover:border-b p-2">
                Content
            </div>
            <div className="cursor-pointer hover:border-b p-2">
                Home 
            </div>
            <div className="cursor-pointer hover:border-b p-2 ">
                Account
            </div>
        </div>
    )
}