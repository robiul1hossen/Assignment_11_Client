import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCarDetails from "../AllCarDetails/AllCarDetails";

const AllToys = () => {
  const allToys = useLoaderData();
  console.log(allToys);
  return (
    <div>
      <h2>This is all toys </h2>
      <div className="grid grid-cols-2 gap-5">
        {allToys.map((toy) => (
          <AllCarDetails key={toy._id} toy={toy}></AllCarDetails>
        ))}
      </div>
    </div>
  );
};

export default AllToys;
