import React from "react";
import { Link } from "react-router-dom";

const MyToyDetails = ({ toy, handleDelete }) => {
  const { _id, subcategory, price, available_quantity, img } = toy;
  console.log(_id);

  return (
    <tr>
      <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            <img src={img} />
          </div>
        </div>
        <div>
          <div className="font-bold">Hart Hagerty</div>
          <div className="text-sm opacity-50">United States</div>
        </div>
      </td>
      <td>{subcategory}</td>
      <td>{price}</td>
      <td>{available_quantity}</td>
      <th>
        <Link to={`/allToys/${_id}`}>
          <button className="btn btn-primary btn-md">Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default MyToyDetails;
{
  MyToyDetails;
}
