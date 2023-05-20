import React, { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [toys, setToys] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/toys-by-subcategory/${subcategories[activeTab]}`);
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
    <>
      <div className="text-center py-20">
        <h3 className="text-3xl text-gray-700 font-bold capitalize">Most Popular</h3>
        <p className="text-gray-400">Shop Great Toys For Your Kids</p>
      </div>
      <Tabs selectedIndex={activeTab} onSelect={handleTabSelect}>
        <TabList>
          <div className="flex justify-center items text-slate-400 field-input">
            <Tab>Strategy</Tab>
            <Tab>Brain Teasers</Tab>
            <Tab>Puzzle</Tab>
          </div>
        </TabList>

        {toys.length > 0 ? (
          subcategories.map((subcategory, index) => (
            <TabPanel key={index}>
              {toys
                .filter((toy) => toy.subCategory === subcategory)
                .map((toy) => (
                  <div className="grid lg:grid-cols-3 mb-36" key={toy._id}>
                    <div className="w-full shadow-custom">
                      <div className="bg-white hover:bg-slate-300 rounded-lg h-72 p-2  hover:shadow-xl transition duration-300">
                        <figure className="mb-2">
                          <img src={toy.photoUrl} alt="" className="h-64 ml-auto mr-auto" />
                        </figure>
                        <div className="rounded-lg p-4 bg-slate-400 flex flex-col">
                          <div>
                            <h5 className="text-white text-2xl font-bold leading-none">{toy.toyName}</h5>
                          </div>
                          <div className="flex items-center">
                            <div className="text-lg text-white font-light">{toy.price}</div>
                            <div className="text-lg text-white font-light">rating: {toy.rating}</div>
                            <div className="rounded-full bg-purple-900 text-white hover:bg-slate-300 hover:text-purple-900 hover:shadow-xl focus:outline-none w-16 h-16 flex justify-center ml-auto items-center transition duration-300 cursor-pointer">
                              <button>Details</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </TabPanel>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </Tabs>
    </>
  );
};

export default ShopByCategory;
