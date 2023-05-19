import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SingleToy from "./SingleToy";

const AllToy = () => {
  const [allToys, setAllToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then((response) => response.json())
      .then((data) => setAllToys(data));
  }, []);
  //     const [searchItem, setSearchItem] = useState("");
  //     const handleSearch = (event)=> {
  //         setSearchItem(event.target.value)
  //     }
  //     const filteredToys = toys.filter((toy) =>
  //     toy.name.toLowerCase().includes(searchItem.toLowerCase())
  //   );
  return (
    <div className="flex flex-col min-h-[200px] my-20">
      <div className="my-2  sm:-max-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <h3 className="text-center py-2 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest mx-auto">
              All toys
            </h3>
            {/* <div className="flex justify-end p-4">
              <input
                type="text"
                placeholder="Search by toy name"
                value=""
                onChange=""
                className="px-4 py-2 border border-gray-300 rounded-md"
              />
            </div> */}

            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="text-center shadow-custom">
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Seller's Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Toy Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Sub-category
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Available Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    View Details
                  </th>
                </tr>
              </thead>

              {allToys.map((toy) => (
                <SingleToy key={toy._id} toy={toy} />
              ))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllToy;
