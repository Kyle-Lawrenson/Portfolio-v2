import './App.css'

import Home from "./Pages/Home"
import About from './Pages/About'
import Experience from './Pages/Experiaence'
import Assignments from './Pages/Assignments'

const App = () => {

  return (
    <>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/assignments" element={<Assignments />}></Route>
      </Routes>

    </BrowserRouter>
    </>
  )
}

export default App
