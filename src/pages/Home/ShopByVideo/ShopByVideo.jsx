import React, { useEffect, useState } from "react";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ShopByVideo = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axios.get("https://the-puzzled-mind-server.vercel.app/all-toys?limit=3");
        setToys(response.data);
      } catch (error) {
        console.log("Error fetching toys data:", error);
      }
    };

    fetchToys();
  }, []);

  return (
    <div>
      <div className="text-center py-20">
        <h3 className="text-3xl text-gray-700 font-bold capitalize">
          Shop By Videos
        </h3>
        <p className="text-gray-400">Video Tutorials</p>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row gap-10">
        <div className="w-full lg:w-1/2">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/a3EVqOPJ0UM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full lg:w-1/2">
          {toys.length > 0 ? (
            toys.map((toy) => (
              <section
                className="m-2 font-sans leading-normal flex justify-between h-48 shadow-custom"
                key={toy._id}
              >
                {/* card container */}
                <div className="max-w-lg rounded overflow-hidden m-4 sm:flex">
                  <div
                    className="h-48 sm:h-auto sm:w-48 md:w-64 flex-none bg-cover bg-center rounded rounded-t sm:rounded sm:rounded-l text-center overflow-hidden"
                    style={{ backgroundImage: `url(${toy.photoUrl})` }}
                  ></div>
                  {/* card-content */}
                  <div className="px-6 py-4">
                    <h2 className="mb-2 font-black">{toy.toyName}</h2>
                    <p className="mb-4 text-grey-dark text-sm">
                      Price: ${toy.price}
                    </p>
                    {/* Rating */}
                    <div className="flex gap-3">
                      <Rating
                        style={{ maxWidth: 80 }}
                        value={toy.rating}
                        readOnly
                      />
                    </div>
                    {/* button */}
                    <div className="flex gap-5 justify-between">
                      <button className="py-3 px-3 bg-purple-900 hover:bg-purple-400 text-white font-bold rounded-full mt-1 mb-2">
                        Details
                      </button>
                      <button className="py-3 px-3 bg-green-900 hover:bg-purple-400 text-white font-bold rounded-full mt-1 mb-2">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            ))
          ) : (
            <div>Loading...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShopByVideo;
