import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import About from './pages/about/About'
import Giris from './pages/giris/Giris'
import Iletisim from './pages/iletisim/Iletisim'
import Urunler from './pages/urunler/Urunler'

function App() {

  return (
    <div>
      <Navbar/>
      <Giris/>
      <About/>
      <Urunler/>
      <Iletisim/>
      <Footer/>
    </div>
  )
}

export default App
