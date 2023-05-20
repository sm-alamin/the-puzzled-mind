import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
const Gallery = () => {
  const [slidesToShow, setSlidesToShow] = useState(4); // Default value for desktop view

  useEffect(() => {
    const handleResize = () => {
      // Update slidesToShow based on window width
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Mobile view: Show 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet view: Show 2 slides
      } else {
        setSlidesToShow(4); // Desktop view: Show 4 slides
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
      
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="text-center py-20">
        <h3 className="text-3xl text-gray-700 font-bold capitalize">Best From Gallery</h3>
        <p className="text-gray-400">Our Top Picks For Toys</p>
      </div>
      <Slider {...settings}>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/free-vector/counting-number-game-template-circus-theme_1308-87357.jpg?w=740&t=st=1684430945~exp=1684431545~hmac=5c6496c2c4cd252a2a7aff4b8fc18a501e7af52c03729c17c2c9f1e7fd062b68" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/free-vector/ludo-board-game-different-perspectives_23-2148698418.jpg?w=740&t=st=1684430986~exp=1684431586~hmac=c5825af592c5b8882bb027d993fe7c6b4e809173ece606c3c2d401951996446e" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/free-vector/happy-kids-playing-boardgame-white-background_1308-99607.jpg?w=826&t=st=1684431027~exp=1684431627~hmac=62c108cddf7a78a12b340cad7dee4cdae9935658ebb2fdd292004de729a92c98" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/premium-photo/child-playing-building-with-colorful-toy-bricks-plastic-blocks-table_494619-329.jpg?w=740" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/free-vector/summer-game-design_1308-584.jpg?w=740&t=st=1684431096~exp=1684431696~hmac=8755d7a85de9a4ea0ad803f4fa635672f8a8e267db6b36ba43bb0a2cc2fc4184" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/free-vector/counting-number-game-template-circus-theme_1308-87357.jpg?w=740&t=st=1684430945~exp=1684431545~hmac=5c6496c2c4cd252a2a7aff4b8fc18a501e7af52c03729c17c2c9f1e7fd062b68" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://img.freepik.com/free-vector/ludo-board-game-different-perspectives_23-2148698418.jpg?w=740&t=st=1684430986~exp=1684431586~hmac=c5825af592c5b8882bb027d993fe7c6b4e809173ece606c3c2d401951996446e" alt="" />
      </div>
      
      
    </Slider>
    </div>
  );
};

export default Gallery;
