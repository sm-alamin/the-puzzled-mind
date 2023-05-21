import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";
import { Link, useParams } from "react-router-dom";

const ShopByCategory = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState(0);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://the-puzzled-mind-server.vercel.app/toys-by-subcategory/${subcategories[activeTab]}`
        );
        const data = await response.json();
        console.log(data);
        setToys(data);
      } catch (error) {
        console.log("Error fetching toys data:", error);
      }
    };

    fetchData();
  }, [activeTab]);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  const subcategories = ["strategy", "brain", "puzzle"]; // Updated subcategories

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
          Most Popular
        </h3>
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <div className="flex justify-center items text-slate-400 field-input mt-20">
            <Tab>Strategy</Tab>
            <Tab>Brain Teasers</Tab>
            <Tab>Puzzle</Tab>
          </div>
        </TabList>

        {toys.length > 0 ? (
          subcategories.map((subcategory, index) => (
            <TabPanel key={index}>
              <div className="grid lg:grid-cols-3 gap-6 mb-36">
                {toys
                  .filter((toy) => toy.subCategory === subcategory)
                  .map((toy) => (
                    <div key={toy._id}>
                      <div className="w-full shadow-custom">
                        <div className="bg-white hover:bg-slate-300 rounded-lg h-72 p-2  hover:shadow-xl transition duration-300">
                          <figure className="mb-2">
                            <img
                              src={toy.photoUrl}
                              alt=""
                              className="h-64 ml-auto mr-auto"
                            />
                          </figure>
                          <div className="rounded-lg p-4 bg-slate-400 flex flex-col">
                            <div>
                              <h5 className="text-white text-2xl font-bold leading-none">
                                {toy.toyName}
                              </h5>
                            </div>
                            <div className="flex justify-between items-center">
                              <div className="text-lg text-white font-light">
                                $ {toy.price}
                              </div>
                              <div className="flex justify-center ms-5">
                                <Rating
                                  style={{ maxWidth: 120 }}
                                  value={toy.rating}
                                  readOnly
                                />
                                <span className="ms-5 text-white">{toy.rating}</span>
                              </div>
                              <div className="rounded-full bg-purple-900 text-white hover:bg-slate-300 hover:text-purple-900 hover:shadow-xl focus:outline-none w-16 h-16 flex justify-center ml-auto items-center transition duration-300 cursor-pointer">
                                <Link to={`/toy-details/${toy._id}`}>Details</Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </TabPanel>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Tabs>
    </div>
  );
};

export default ShopByCategory;
