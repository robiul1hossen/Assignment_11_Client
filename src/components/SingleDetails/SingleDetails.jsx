import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleDetails = () => {
  const data = useLoaderData();
  const {
    toy_details,
    seller_details,
    price,
    available_quantity,
    img,
    rating,
    sellerName,
    sellerEmail,
    subcategory,
  } = data;
  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <div>
          <img className="rounded-xl" src={img} alt="" />
        </div>
        <div className="flex h-full items-center w-full">
          <div className="space-y-2">
            <p className="font-semibold"> {subcategory}</p>
            <p>
              price: <b>${price}</b>
            </p>
            <p>
              Available Quantity : <b>{available_quantity}</b>
            </p>
            <p>Rating : {rating}</p>
            <h2 className="font-semibold">Seller Name : {sellerName}</h2>
            <h2 className="font-semibold">Seller Name : {sellerEmail}</h2>

            <p>
              <b>Seller Details :</b> {seller_details}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p>
          <b>Toy Details :</b> {toy_details}
        </p>
      </div>
    </>
  );
};

export default SingleDetails;
