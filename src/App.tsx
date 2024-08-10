import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./component/Header"
import Contact from "./pages/Contact"
import Home from "./pages/HomePage"
import Profile from "./pages/Profile"
import Project from "./pages/Projects"
import Services from "./pages/Services"
import Skills from "./pages/Skills"

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/projects" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
