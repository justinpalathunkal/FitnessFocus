import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import chestIcon from '../../icons/chest_icon_181762.jpg';
import shoulderIcon from '../../icons/shoulder.jpg';
import armIcon from '../../icons/pngegg.jpg';
import backIcon from '../../icons/back_fitness_icon_181754.jpg';
import legIcon from '../../icons/leg_sport_13295.jpg';
import tricepIcon from '../../icons/triceps_fitness_icon_181746.jpg';

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#1F2937", 
        borderRadius: "20%",  
      }}
      onClick={onClick}
    />
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style, 
        background: "#1F2937", 
        borderRadius: "20%",
      }}
      onClick={onClick}
    />
  );
}

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
    arrows: true,
    nextArrow: <NextArrow />, 
    prevArrow: <PrevArrow />,  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: true, 
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: true,  
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,  
        }
      }
    ]
  };
  return (
    <div className='w-3/4 m-auto'>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div key={d.name} className="bg-white h-[450px] text-black rounded-xl border-2 border-gray-400 shadow-lg"> 
              <div className='h-56 bg-gray-800 flex justify-center items-center rounded-t-xl'>
                <img src={d.img} alt={d.name} className="h-44 w-44 rounded-full"/>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p className="text-center">{d.description}</p>
                <Link to={`/${d.route}`}>
                  <button className='bg-gray-800 text-white text-lg px-6 py-1 rounded-xl'>Explore</button>
                </Link>
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
    name: 'Chest',
    img: chestIcon,
    description: 'This guide will teach you how to target your chest muscles.',
    route: 'chest'  
  },
  {
    name: 'Tricep',
    img: tricepIcon,
    description: 'This guide will teach you how to target your tricep muscles.',
    route: 'triceps' 
  },
  {
    name: 'Back',
    img: backIcon,
    description: 'This guide will teach you how to target your back muscles.',
    route: 'back'  
  },
  {
    name: 'Shoulders',
    img: shoulderIcon,
    description: 'This guide will teach you how to target your shoulder muscles.',
    route: 'shoulders'  
  },
  {
    name: 'Legs',
    img: legIcon,
    description: 'This guide will teach you how to target your leg muscles.',
    route: 'legs'  
  },
  {
    name: 'Arms',
    img: armIcon,
    description: 'This guide will teach you how to target your arm muscles.',
    route: 'arms'  
  }
];

export default FitnessSliderTile;
