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
    <>
      <div className="text-center py-10">
        <h2 className="text-3xl text-gray-700 font-bold capitalize">
          Deals of the Day
        </h2>
        <p className="text-gray-400">Special Deals Offer</p>
      </div>
      <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]} className="mySwiper">
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
                <p className="text-green-500 font-bold">
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
                <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 mt-4 rounded-full">
                  Buy Now
                </button>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Swiper>
    </>
  );
};

export default DealsOfTheDay;
