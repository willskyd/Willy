import './App.css'
import Header from './Header'
import { Routes, Route } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Footer from './Footer'
import Bolt from './Services/Bolt'
import Cold from './Services/Cold'
import Habitat from './Services/Habitat'
import Habitatserv from './Services/Habitatserv'
import Fire from './Services/Fire'
import Bolttorquing from './Services/Bolttorquing'
import Head from './Services/Head.tsx'





function App() {
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
           <Route path="/Services" element={<Services />} />
            <Route path="/Bolt_Tensioning" element={<Bolt />} />
            <Route path="/Cold_Cutting" element={<Cold />} />
            <Route path="/Habitat_Preparation" element={<Habitat />} />
            <Route path="/Habitat_Service" element={<Habitatserv />} />
            <Route path="/Fire_&_Gas_Alarm_System" element={<Fire />} />
            <Route path="/Bolt_Torquing_&_Tentioning" element={<Bolttorquing />} />
            <Route path="/Well-Head_Surveillance" element={<Head />} />

             
           

             
        </Routes>
        <Footer />
      </div>
  )
}

export default App
