// import React, { useEffect, useState } from "react";
// import "react-tabs/style/react-tabs.css";
// import CategoryShop from "./CategoryShop/CategoryShop";

// const ShopByCategories = () => {
//   const [toys, setToys] = useState([]);
//   const [activeTab, setActiveTab] = useState("Monster-Truck");
//   const [singleToy, setSingleToy] = useState([]);

//   const handleTabClick = (tabName) => {
//     setActiveTab(tabName);
//   };
//   useEffect(() => {
//     fetch(`https://mini-motors-server-robiul1hossen.vercel.app//alltoys`)
//       .then((res) => res.json())
//       .then((data) => {
//         setToys(data);
//         setSingleToy(data.map((toy) => ({ ...toy })));
//         // console.log(data);
//       });
//   }, []);
//   console.log(singleToy);

//   return (
//     <div className="my-10">
//       <h2 className="font-bold text-center text-3xl my-5 ">Shop by category</h2>

//       <div className=" flex justify-center gap-5 items-center">
//         <div
//           onClick={() => handleTabClick("Monster-Truck")}
//           className={`${activeTab == "Monster-Truck" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
//         >
//           Monster-Truck
//         </div>
//         <div
//           onClick={() => handleTabClick("Police")}
//           className={`${activeTab == "Police" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
//         >
//           Police Car
//         </div>
//         <div
//           onClick={() => handleTabClick("Classic")}
//           className={`${activeTab == "Classic" ? "bg-secondary  text-white font-semibold p-2" : ""}`}
//         >
//           Classic Car
//         </div>
//       </div>
//       {toys?.map(
//         (toy) => console.log("")
//         // <CategoryShop toy={toy} key={toy._id}></CategoryShop>
//         // <div className="grid grid-cols-4 gap-6">
//         //   <p>length : {toy.subcategory}</p>
//         //   <img src={toy.img} alt="" />
//         // </div>
//       )}
//       {toys.filter((toy) => console.log(toy.subcategory == "Police"))}
//     </div>
//   );
// };

// export default ShopByCategories;

import React, { useEffect, useState } from "react";
import "react-tabs/style/react-tabs.css";
import CategoryShop from "./CategoryShop/CategoryShop";

const ShopByCategories = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Monster-Truck");
  const [singleToy, setSingleToy] = useState([]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    filterToys(tabName);
  };

  const filterToys = (subcategory) => {
    const filteredToys = toys.filter((toy) => toy.subcategory === subcategory);
    setSingleToy(filteredToys);
  };

  useEffect(() => {
    fetch(`https://mini-motors-server-robiul1hossen.vercel.app//alltoys`)
      .then((res) => res.json())
      .then((data) => {
        setToys(data);
        setSingleToy(data);
      });
  }, []);

  const renderToys = () => {
    if (activeTab === "Monster-Truck" || activeTab === "Police" || activeTab === "Classic") {
      return singleToy.map((toy) => <CategoryShop toy={toy} key={toy._id} />);
    } else {
      return <p>No toys found for this category</p>;
    }
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-center text-3xl my-5">Shop by category</h2>

      <div className="flex justify-center gap-5 items-center">
        <div
          onClick={() => handleTabClick("Monster-Truck")}
          className={`${activeTab === "Monster-Truck" ? "bg-secondary text-white font-semibold p-2" : ""}`}
        >
          Monster-Truck
        </div>
        <div
          onClick={() => handleTabClick("Police")}
          className={`${activeTab === "Police" ? "bg-secondary text-white font-semibold p-2" : ""}`}
        >
          Police Car
        </div>
        <div
          onClick={() => handleTabClick("Classic")}
          className={`${activeTab === "Classic" ? "bg-secondary text-white font-semibold p-2" : ""}`}
        >
          Classic Car
        </div>
      </div>

      {renderToys()}
    </div>
  );
};

export default ShopByCategories;
