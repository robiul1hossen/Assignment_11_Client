import React from "react";
import { Link } from "react-router-dom";

const AllCarDetails = ({ toy }) => {
  console.log(toy._id);
  console.log(toy.car1);
  return (
    <div className="">
      <div className="my-6">
        <img className="w-[600px] h-96" src={toy.img} alt="" />
        <h2>
          <b>Toy Name :</b> {toy.subcategory}
        </h2>
        <p>
          <b>Price :</b> ${toy.price}
        </p>
        <p>
          <b>Available Quantity :</b> {toy.available_quantity}
        </p>
        <p>
          <b>Seller :</b> {toy.sellerName}
        </p>
        <Link to={`/allToys/${toy._id}`}>
          <button className="btn btn-outline">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default AllCarDetails;
