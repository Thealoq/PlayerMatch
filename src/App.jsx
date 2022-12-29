import './index.css'
import AgentsContent from './views/AgentsContent';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home';
import Navbar from './Layout/Navbar';
import Match from './views/Match';
import Agents from './views/Agents';
import Footer from './Layout/Footer';
import NotFound from './views/NotFound.jsx';
export default function App() {
  return (
    <div>
     <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Game/Match' element={<Match />}></Route>
          <Route path="/Valorant/Agents" element={<Agents />} />
          <Route path="/Valorant/Agents/:uuid" element={<AgentsContent />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </div>
  )
}

