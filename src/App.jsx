import './index.css'
import Agents from './views/Agents';
import Navbar from './Layout/Navbar';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './views/Home';
export default function App() {
  return (
    <div className="flex">
     <Router>
      <Navbar />
      <div className="w-full">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/Agents" element={<Agents />} />
        </Routes>
      </div>
    </Router>
    </div>
  )
}

