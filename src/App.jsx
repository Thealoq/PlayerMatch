import './index.css'
import AgentsContent from './views/AgentsContent';
import Navbar from './Layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
console.log("hello");
import Home from './views/Home';
import Responsive from './Layout/Responsive';
import Agents from './views/Agents';
export default function App() {
  return (
    <div>
     <Router>
      <Responsive />
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/Agents" element={<Agents />} />
          <Route path="/Agents/:uuid" element={<AgentsContent />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

