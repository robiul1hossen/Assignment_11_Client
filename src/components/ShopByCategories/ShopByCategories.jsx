import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryShop from "./CategoryShop/CategoryShop";

const ShopByCategories = () => {
  const [toys, setToys] = useState([]);
  console.log(toys);
  const [activeTab, setActiveTab] = useState("monsterTruck");
  const [subcategory, setSubcategory] = useState("");
  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  useEffect(() => {
    fetch(`http://localhost:5000/filter/${subcategory}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToys(data);
      });
  }, []);

  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl my-5 ">Shop by category</h2>

      <div className=" flex justify-center gap-5 items-center">
        <div
          onClick={() => handleTabClick("monsterTruck")}
          className={`${activeTab == "monsterTruck" ? "bg-secondary text-white font-semibold p-2" : ""}`}
        >
          Monster Truck
        </div>
        <div
          onClick={() => handleTabClick("policeCar")}
          className={`${activeTab == "policeCar" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
        >
          Police Car
        </div>
        <div
          onClick={() => handleTabClick("classicCar")}
          className={`${activeTab == "classicCar" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
        >
          Classic Car
        </div>
        {toys?.map((toy) => (
          <CategoryShop toy={toy} key={toy._id}></CategoryShop>
        ))}
      </div>
    </div>
  );
};

export default ShopByCategories;
