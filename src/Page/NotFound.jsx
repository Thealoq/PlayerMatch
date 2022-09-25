import Camp from "../assets/camp.png"
export default function NotFound() {
    return (
        <div className="center">
            <div className="agent-cards-body">
                <div className="agent-home-title">
                    <div>
                        <h3>Error 404</h3>
                        <p>No! Visit KillJoy.</p></div>
                </div>
                <div className="center">
                    <div><img src={Camp} alt="Camp" /></div>
                </div>
            </div>
        </div>
    )
}