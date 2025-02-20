import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import images
import hostageImage from '../assets/terrorist.png';
import amritsarImage from '../assets/amritsar.png';
import bhartiImage from '../assets/bigconcerns.png';
import democracyImage from '../assets/trump.png';
import loksabhaImage from '../assets/bigconcerns.png';
import tharoorImage from '../assets/amritsar.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function News() {
    const [slidesPerView, setSlidesPerView] = useState(5);
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 640) {
          setSlidesPerView(2);
        } else if (window.innerWidth < 1024) {
          setSlidesPerView(3);
        } else {
          setSlidesPerView(5);
        }
      };

      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const newsItems = [
      {
        id: 1,
        title: "Hamas Releases 3 Israeli Hostages In Exchange For 369 Palestinian Prisoners",
        image: hostageImage,
      },
      {
        id: 2,
        title: "'Why Amritsar?': Bhagwant Mann vs BJP as 2nd US flight carrying Indian migrants set to land today",
        image: amritsarImage
      },
      {
        id: 3,
        title: "Bharti Singh Backs Samay Raina After Ranveer Allahbadia's Controversial Comment",
        image: bhartiImage
      },
      {
        id: 4,
        title: "'Democracy doesn't put food on plate,' says US Senator Elissa Slotkin",
        image: democracyImage
      },
      {
        id: 5,
        title: "Lok Sabha selection committee constituted to examine Income Tax Bill",
        image: loksabhaImage
      },
      {
        id: 6,
        title: "'Some Big Concerns...': Shashi Tharoor On PM Modi-Donald Trump Meeting",
        image: tharoorImage
      }
    ];

    return (
      <div className="min-h-screen text-white flex flex-col relative overflow-hidden">
        {/* Background Circles */}
        <div className="background-circle circle-1 z-0"></div>
        <div className="background-circle circle-2 z-0"></div>
        
        <div className="z-50">
          <Navbar />
        </div>
        <main className="flex-1 container mx-auto px-6 py-8 max-w-6xl relative z-10 mt-5">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-8">Latest News</h1>
          </div>
          
          {/* News Carousel */}
          <div className="mb-8 max-w-5xl mx-auto">
            <Swiper
              slidesPerView={slidesPerView}
              spaceBetween={20}
              navigation={true}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
              modules={[Navigation, Pagination, Autoplay]}
              className="w-full"
            >
              {newsItems.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative cursor-pointer group">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-32 sm:h-40 object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <p className="absolute bottom-2 left-2 right-2 text-xs text-white">
                        {item.title}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Featured News Title */}
          <div className="mb-8 text-center max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold">
              {newsItems[activeSlide].title}
            </h2>
          </div>

          {/* News List */}
          <div className="space-y-6 max-w-3xl mx-auto">
            {newsItems.map(item => (
              <div key={item.id} className="flex gap-4 items-center hover:bg-white/5 p-3 rounded-lg transition-colors cursor-pointer">
                <div className="w-12 h-12 flex-shrink-0">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </main>
        <Footer />
      </div>
    );
}

export default News;