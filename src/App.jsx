import './App.css'
import About from './Commponents/About/About'
import Contact from './Commponents/Contact/Contact'
import Features from './Commponents/Featuers/Features'
import Footer from './Commponents/Footer/Footer'
import Header from './Commponents/Header/Header'
import Protofilo from './Commponents/Protofilo/Protofilo'
import Quilities from './Commponents/Quilities/Quilities'
import Services from './Commponents/Servises/Services'
import Testimonails from './Commponents/Testimonials/Testimonails'

function App() {
  
  return (
    <div className='App'>
      <Header/>
      <Services/>
      <About/>
      <Quilities/>
      <Features/>
      <Protofilo/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
