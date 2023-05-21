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
          Shop By Video
        </h3>
      </div>

      <div className="flex flex-col justify-center items-center lg:flex-row gap-10 mt-20">
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
                    <p className="mb-4 text-indigo-500 text-sm">
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
                      <button className="py-3 px-3 bg-slate-200 hover:bg-purple-400 text-indigo-400 font-bold rounded-full mt-1 mb-2">
                        Details
                      </button>
                      <button className="py-3 px-3 bg-indigo-400 hover:bg-purple-400 text-white font-bold rounded-full mt-1 mb-2">
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
