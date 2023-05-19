import { Link } from "react-router-dom";

const SingleToy = ({ toy }) => {
  const {
    _id,
    toyName,
    sellerName,
    subCategory,
    price,
    availableQuantity,
    description,
  } = toy;
  return (
    <tbody className="bg-white divide-y divide-gray-200 table-field">
        <tr>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
            <div className="text-sm text-gray-500">{sellerName}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
            <div className="text-sm text-gray-500">{toyName}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
            <div className="text-sm text-gray-500">{subCategory}</div>
          </td>

          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
            <div className="text-sm text-gray-500">$ {price}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
            <div className="text-sm text-gray-500">{availableQuantity}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-center hover:scale-125 hover:-skew-x-12 hover:text-gray-600">
            <div className="text-sm text-blue-400 text-center">
              <Link to={`/toy-details/:${_id}`}>Details</Link>
            </div>
          </td>
        </tr>
      </tbody>
  );
};

export default SingleToy;
