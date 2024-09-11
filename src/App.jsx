import './App.css'
import Complain from './components/Complain'
import Copyright from './components/copyright'
import Footer from './components/footer'
import Header from './components/header'
import Landing from './components/Landing'
import Seasonal from './components/Seasonal-Maintenance/Seasonal'
import Services from './components/Services'
import Why from './components/Why'
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
