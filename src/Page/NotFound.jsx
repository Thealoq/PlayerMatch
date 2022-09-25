import Camp from "../assets/camp.png"
export default function NotFound() {
    return (
        <div className="center">
            <div style={{ backgroundColor:"#9061F9" }} className="agent-cards-body">
                <div className="agent-home-title">
                    <div>
                        <h3>Error 404</h3>
                    </div>
                </div>
                <div className="center">
                    <div><img src={Camp} alt="Camp" /></div>
                </div>
            </div>
        </div>
    )
}