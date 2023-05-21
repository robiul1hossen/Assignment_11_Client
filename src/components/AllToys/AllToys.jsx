import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import AllCarDetails from "../AllCarDetails/AllCarDetails";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  const [query, setQuery] = useState("");
  console.log(query);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <div className="text-center p-3 ">
        <input
          onChange={handleChange}
          className="border-2 p-3 my-5"
          type="search"
          name="search"
          placeholder="search a toy..."
          id=""
        />
      </div>
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
          {allToys
            .filter((toys) => toys.subcategory.toLowerCase().includes(query))
            .map((toy) => (
              <AllCarDetails key={toy._id} toy={toy}></AllCarDetails>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default AllToys;
