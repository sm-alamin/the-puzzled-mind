import { Link } from 'react-router-dom';
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from 'react';
import ToySearch from '../Search/ToySearch';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {
  const {user} = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [filteredToys, setFilteredToys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-toys")
      .then((response) => response.json())
      .then((data) => {
        const filtered = data.filter(toy => toy.sellerEmail == user?.email);
        setMyToys(filtered);
      setFilteredToys(filtered);
      });
  }, []);

  const manageDelete = (id)=> {
    const confirmation = confirm("Are you sure to delete")
    if(confirmation) {
      fetch(`http://localhost:5000/all-toys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(toy => toy._id !== id);
                        setFilteredToys(remaining);
                    }
                })
    }
  }
  

  return (
    <div className="flex flex-col min-h-[200px] my-20">
      <div className="my-2  sm:-max-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <h3 className="text-center py-2 px-2 rounded bg-indigo-50 text-indigo-500 text-xl font-medium tracking-widest mx-auto">My Added Toys</h3>
            <ToySearch toys={myToys} setFilteredToys={setFilteredToys} />
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr className="text-center shadow-custom">
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Toy Photo
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Toy Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seller Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Seller Email
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sub Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Rating
                  </th>
                  <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Available Quantity
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                    Detail Description
                  </th>
                  <th scope="col" className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider text-center">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 table-field">
                {filteredToys.map((toy) => (
                  <tr key={toy._id}>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-105 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">
                        <img src={toy.photoUrl} alt={toy.toyName} className="w-24 h-24" />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">{toy.toyName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">{toy.sellerName}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">{toy.sellerEmail}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">{toy.subCategory}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">$ {toy.price}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">{toy.rating}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500">{toy.availableQuantity}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm font-xs text-center hover:scale-105 hover:-skew-x-12 hover:text-gray-600">
                      <div className="text-sm text-gray-500 text-center detail-description">
                        {toy.description}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-normal text-sm font-medium text-center hover:text-gray-600">
                      <div className="text-sm text-blue-400 text-center flex gap-5">
                        <button >
                          <FaRegEdit className="font-bold text-3xl cursor-pointer" />{" "}
                        </button>
                        <button onClick={() => manageDelete(toy._id)}>
                          <FaRegTrashAlt className="font-bold text-red-400 text-3xl cursor-pointer" />{" "}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToys;
