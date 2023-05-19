import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCarDetails from "../AllCarDetails/AllCarDetails";

const AllToys = () => {
  const allToys = useLoaderData();
  return (
    <div>
      <h2>This is all toys </h2>
      {allToys.map((toy) => (
        <AllCarDetails key={toy._id} toy={toy}></AllCarDetails>
      ))}
    </div>
  );
};

export default AllToys;
