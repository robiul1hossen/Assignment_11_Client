import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import AllCarDetails from "../AllCarDetails/AllCarDetails";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <table className="table w-full">
      {/* head */}
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Image </th>
          <th>Sub Category</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {allToys.map((toy) => (
          <AllCarDetails key={toy._id} toy={toy}></AllCarDetails>
        ))}
      </tbody>
    </table>
  );
};

export default AllToys;
