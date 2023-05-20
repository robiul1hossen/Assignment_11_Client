import React from "react";
import "react-tabs/style/react-tabs.css";

const CategoryShop = ({ toy }) => {
  console.log(toy);
  const { img } = toy;
  return (
    <div className="grid grid-cols-4 gap-6">
      <img src={img} alt="" />
    </div>
  );
};

export default CategoryShop;
