import Home from "./Page/Home"
import Navbar from "./layout/Navbar"
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
        </Routes>
      </div>
    </Router>
  )
}

