import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryShop from "./CategoryShop/CategoryShop";

const ShopByCategories = () => {
  const [toys, setToys] = useState([]);

  useEffect(() => {
    fetch("toy.json")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  return (
    <div className="my-10">
      <h2 className="font-bold text-3xl my-5">Shop by category</h2>
      {/* <h2>toy : {toy[0].name}</h2> */}
      {toys.map((toy) => (
        <CategoryShop toy={toy}></CategoryShop>
      ))}

      <Tabs>
        <TabList>
          <Tab>3</Tab>
          <Tab>2</Tab>
          <Tab>1</Tab>
        </TabList>

        <TabPanel>
          <img className="w-1/2" src="" alt="" />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 3</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 4</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopByCategories;
