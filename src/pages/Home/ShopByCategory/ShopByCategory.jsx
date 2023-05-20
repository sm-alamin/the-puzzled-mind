import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-tabs/style/react-tabs.css";

const ShopByCategory = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabSelect = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="text-center py-20">
        <h3 className="text-3xl text-gray-700 font-bold capitalize">
          Most Popular
        </h3>
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

        <TabPanel>
          <div className="grid grid-cols-3 mb-36">
            <div className="w-full shadow-custom">
              <div className="bg-white hover: hover:bg-slate-300 rounded-lg h-72 p-2  hover:shadow-xl transition duration-300">
                <figure className="mb-2">
                  <img
                    src="https://img.freepik.com/free-vector/realistic-chess-game-pieces-3d-icons-set-with-reflection_1284-13710.jpg?w=740&t=st=1684563723~exp=1684564323~hmac=d3718f5d82666b4e90312e0985fc8e053396574046680877494d5221802583e7"
                    alt=""
                    className="h-64 ml-auto mr-auto"
                  />
                </figure>
                <div className="rounded-lg p-4 bg-slate-400 flex flex-col">
                  <div>
                    <h5 className="text-white text-2xl font-bold leading-none">
                      iPhone 11 Pro Max
                    </h5>
                  </div>
                  <div className="flex items-center">
                    <div className="text-lg text-white font-light">
                      $1099.00
                    </div>
                    <div className="text-lg text-white font-light flex ms-2">
                      <Rating
                        style={{ maxWidth: 120 }}
                        value={5}
                        readOnly
                      />
                      <span className="ms-2 mt-2">{5}</span>
                    </div>
                    <div className="rounded-full bg-white text-black hover:bg-slate-300 hover:text-purple-900 hover:shadow-xl focus:outline-none w-16 h-16 flex justify-center ml-auto items-center transition duration-300 cursor-pointer">
                      <button>Details</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Content for Tab 3</h2>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ShopByCategory;
