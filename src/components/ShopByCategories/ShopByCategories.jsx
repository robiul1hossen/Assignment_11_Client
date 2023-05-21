import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import CategoryShop from "./CategoryShop/CategoryShop";

const ShopByCategories = () => {
  const [toys, setToys] = useState([]);
  // console.log(toys);
  const [activeTab, setActiveTab] = useState("Monster");
  const [subcategory, setSubcategory] = useState("");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`https://mini-motors-server.vercel.app/filter?subcategory=${subcategory}`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        // console.log(data);
      });
  }, [activeTab]);

  return (
    <div className="my-10">
      <h2 className="font-bold text-center text-3xl my-5 ">Shop by category</h2>

      <div className=" flex justify-center gap-5 items-center">
        <div
          onClick={() => handleTabClick("Monster")}
          className={`${activeTab == "Monster" ? "bg-secondary text-white font-semibold p-2" : ""}`}
        >
          Monster Truck
        </div>
        <div
          onClick={() => handleTabClick("Police")}
          className={`${activeTab == "Police" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
        >
          Police Car
        </div>
        <div
          onClick={() => handleTabClick("Classic")}
          className={`${activeTab == "Classic" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
        >
          Classic Car
        </div>
      </div>
      {toys?.map((toy) => (
        <CategoryShop toy={toy} key={toy._id}></CategoryShop>
      ))}
    </div>
  );
};

export default ShopByCategories;
