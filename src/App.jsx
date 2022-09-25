import Home from "./Page/Home"
import NotFound from "./Page/NotFound"
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
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

