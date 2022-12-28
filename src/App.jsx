import './index.css'
import AgentsContent from './views/AgentsContent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home';
import Navbar from './Layout/Navbar';
import Agents from './views/Agents';
import Footer from './Layout/Footer';
export default function App() {
  return (
    <div>
     <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/Valorant/Agents" element={<Agents />} />
          <Route path="/Valorant/Agents/:uuid" element={<AgentsContent />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
  )
}

