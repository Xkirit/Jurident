import Slide1 from "../assets/Slide1.png"
import Slide2 from "../assets/Slide2.png"
import Slide3 from "../assets/Slide3.png"
import Slide4 from "../assets/Slide4.png"

function Carousel() {
  return (
    <div className="carousel w-full h-[calc(100vh-64px)]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={Slide1}
          className="w-full h-full object-cover"
          alt="Slide 1"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❮</a>
          <a href="#slide2" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={Slide2}
          className="w-full h-full object-cover"
          alt="Slide 2"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❮</a>
          <a href="#slide3" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❯</a>
        </div>
      </div>

      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={Slide3}
          className="w-full h-full object-cover"
          alt="Slide 3"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❮</a>
          <a href="#slide4" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❯</a>
        </div>
      </div>

      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={Slide4}
          className="w-full h-full object-cover"
          alt="Slide 4"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❮</a>
          <a href="#slide1" className="btn btn-circle bg-black/50 border-none hover:bg-black/70">❯</a>
        </div>
      </div>
    </div>
  )
}

export default Carousel;