import React from "react";

const AllCarDetails = ({ toy }) => {
  console.log(toy.car1);
  return (
    <div className="grid grid-cols-2 gap-5">
      <div>
        <img src={toy.car1.img} alt="" />
        <h2>{toy.car1.subcategory}</h2>
        <p>{toy.car1.price}</p>
      </div>
      <div>
        <img src={toy.car2.img} alt="" />
        <h2>{toy.car2.subcategory}</h2>
        <p>{toy.car2.price}</p>
      </div>
    </div>
  );
};

export default AllCarDetails;
