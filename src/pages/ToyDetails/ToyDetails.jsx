import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ToyDetails = () => {
  const { id } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    const fetchToyDetails = async () => {
      try {
        const response = await axios.get(
          `https://the-puzzled-mind-server.vercel.app/all-toys/${id}`
        );
        const data = response.data;
        setToy(data);
      } catch (error) {
        console.log("Error fetching toy details:", error);
      }
    };

    fetchToyDetails();
  }, [id]);

  if (!toy) {
    return <div>Loading...</div>;
  }

  const {
    photoUrl,
    toyName,
    sellerName,
    sellerEmail,
    price,
    rating,
    availableQuantity,
    description,
  } = toy;

  return (
    <>
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
         Toy Details
        </h3>
      </div>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
        className="border shadow-custom"
      >
        <div
          className="container px-5 py-24 mx-auto"
          style={{ cursor: "auto" }}
        >
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="toy"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded-lg"
              src={photoUrl}
              style={{ cursor: "auto" }}
            />
            <div
              className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
              style={{ cursor: "auto" }}
            >
              <h2
                className="text-sm title-font text-gray-500 tracking-widest"
                style={{ cursor: "auto" }}
              >
                ON SALE
              </h2>
              <h1
                className="text-gray-900 text-3xl title-font font-medium mb-1"
                style={{ cursor: "auto" }}
              >
                {toyName}
              </h1>
              <div className="flex mb-4">
                <Rating style={{ maxWidth: 180 }} value={rating} readOnly />
                <span className="ms-5 mt-2">{rating}</span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-between gap-5">
                <span className="title-font font-medium text-2xl text-gray-900">
                  $ {price}
                </span>
                <span className=" font-xs text-xl pt-1 text-gray-900">
                  Only {availableQuantity} Available
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Buy
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
              </div>
              <div className="mt-5">
                <p className="text-gray-600">Seller: {sellerName}</p>
                <p className="text-gray-600">Contact: {sellerEmail}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
