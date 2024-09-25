import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function FitnessSliderTile() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className='w-3/4 m-auto'>
        <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl">
              <div className='h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt="" className="h-44 w-44 rounded-full"/>
              </div>
  
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.description}</p>
                <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl'>Explore</button>
              </div>
            </div>
          ))}
        </Slider>
        </div>
        
      </div>
    );
  }
  
  const data = [
    {
      name: `Chest`,
      img: `./icons8-triceps-48.png`,
      description: `This guide will teach you how to target your chest muscles.`
    },
    {
      name: `Tricep`,
      img: `/students/Ellie_Anderson.jpg`,
      description: `This guide will teach you how to target your tricep muscles.`
    },
    {
      name: `Back`,
      img: `/students/Nia_Adebayo.jpg`,
      description: `This guide will teach you how to target your back muscles.`
    },
    {
      name: `Shoulders`,
      img: `/students/Rigo_Louie.jpg`,
      description: `This guide will teach you how to target your shoulder muscles.`
    },
    {
      name: `Legs`,
      img: `/students/Mia_Williams.jpg`,
      description: `This guide will teach you how to target your leg muscles.`
    },
    {
      name: `Arms`,
      img: `/students/Mia_Williams.jpg`,
      description: `This guide will teach you how to target your arm muscles.`
    }
  ];
  
  export default FitnessSliderTile;