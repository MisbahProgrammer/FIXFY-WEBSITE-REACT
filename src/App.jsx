import './App.css'
import Complain from './components/Complain/Complain.jsx'
import Copyright from './components/Copyright/Copyright.jsx'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'
import Landing from './components/Landing/Landing.jsx'
import Seasonal from './components/Seasonal-Maintenance/Seasonal.jsx'
import Services from './components/Service/Services.jsx'
import Why from './components/Why/Why.jsx'
function App() {
  
  return (
    <>
    
    <Header/>
    <Landing/>
    <Services/>
    <Seasonal/>
    <Why/>
    <Complain/>
    <Footer/>
    <Copyright/>
  
    </>
  )
}

export default App
