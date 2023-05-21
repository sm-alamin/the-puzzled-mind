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
    <div style={{ overflow: "hidden" }} className="mt-20">
      <div className="flex flex-col justify-center items-center text-center">
        <svg width="381px" height="75px" viewBox="0 0 381 75" className="ml-72">
          <path
            className="t1"
            d="M2.96134624,65.979 C1.30734624,68.168 -0.0246537556,70.238 0.000346244358,70.579 C0.0373462444,71.074 0.0833462444,71.061 0.226346244,70.517 C0.325346244,70.142 2.32934624,68.809 4.68034624,67.557 C21.7323462,58.472 29,49.5 30.5243462,43.37 C32.7648571,34.3600186 24.6903462,10.361 17.7673462,0.945 L17.0733462,0 L17.3113462,1.4 C21.7833462,27.758 17.5933462,46.612 2.96134624,65.979 Z"
            id="path4-path"
            fill="#88CAE4"
          />
          <path
            className="t2"
            d="M0.5,70 C19,69.5 41.5782056,59.6126527 40.3698601,59.9188561 C39.8667833,60.0464299 43.1233331,57.934635 44.5,55.5 C49.5084857,46.6385272 48.5156445,24.083968 45.228048,12.4592968 L44.8989061,11.2929738 L44.5913856,12.6833436 C38.7927365,38.8562499 19,60.5 0.5,70 Z"
            id="path4-path-copy"
            fill="#42ADD7"
          />
          <path
            className="t3"
            d="M2.276,69.382 C5.358,72.464 6.7,72.765 20.2,73.404 C34.559,74.084 45.182,73.011 49.577,70.435 C58.224,65.367 62.311,57.704 62.878,45.5 C63.161,39.379 63.051,39.253 60.602,42.913 C56.842,48.534 50.617,53.972 44.31,57.146 C29,68 -0.197,66.909 2.276,69.382 Z"
            id="path3"
            fill="#1A94C8"
          />
        </svg>
        <h3 className="text text-center py-2 px-2 bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest mx-auto w-96 relative top-5 rounded-full">
          Best From Gallery
        </h3>
      </div>
      <Slider {...settings} className="mt-20">
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
