import Carousel from '../pages/Carousel'
import Header from './Header'
import Footer from './Footer'


function Hero() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B26]">
      <Header/>
      <div className="flex-1">
        <Carousel/>
      </div>
      <Footer/>
    </div>
  )
}

export default Hero