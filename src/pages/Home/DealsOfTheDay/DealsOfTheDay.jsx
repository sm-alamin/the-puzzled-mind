import React, { useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";

const DealsOfTheDay = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchDeals = async () => {
      try {
        const response = await axios.get(
          "https://the-puzzled-mind-server.vercel.app/all-toys"
        );
        setDeals(response.data);
      } catch (error) {
        console.log("Error fetching deals data:", error);
      }
    };
    fetchDeals();
  }, []);

  return (
    <div className="mt-20">
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
          Deals Of The Day
        </h3>
      </div>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper mt-20">
        <style>
          {`
            .mySwiper {
              overflow: hidden !important;
            }
          `}
        </style>
        {deals.length > 0 ? (
          deals.map((deal) => (
            <SwiperSlide key={deal._id}>
              <div className="bg-white rounded-lg shadow-lg p-6 w-1/2 mx-auto">
                <img
                  src={deal.photoUrl}
                  alt={deal.toyName}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">
                  {deal.toyName}
                </h3>
                <p className="text-gray-600 mt-2 line-through">
                  Old Price: ${deal.price * 1.5}
                </p>
                <p className="text-indigo-500 font-bold">
                  Current Price: ${deal.price}
                </p>
                <div className="flex items-center mt-2">
                  <Rating style={{ maxWidth: 80 }} value={deal.rating} readOnly />
                </div>
                <p className="text-gray-600 mt-2">{deal.description}</p>
                <div className="flex items-center mt-4">
                  <FaClock className="text-gray-500 mr-1" />
                  <span className="text-gray-500">Time Remaining: 2 hours</span>
                </div>
                <button className="bg-indigo-200 hover:bg-white hover:text-indigo-400 text-indigo-500 font-bold py-2 px-4 mt-4 rounded-full">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Swiper>
    </div>
  );
};

export default DealsOfTheDay;
