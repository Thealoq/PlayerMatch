import Home from "./Page/Home"
import Agents from "./Page/Agents"
import AgentContent from "./Page/AgentContent"
import NotFound from "./Page/NotFound"
import Maps from "./Page/Maps"
import Mods from "./Page/Mods"
import Ranks from "./Page/Ranks"
import MapsContent from "./Page/MapsContent"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
export default function App() {

  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Agents/:name" element={<AgentContent />} />
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Maps" element={<Maps />} />
          <Route path="/Maps/:name" element={<MapsContent />} />
          <Route path="/Mods" element={<Mods />} />
          <Route path="/Ranks" element={<Ranks />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

