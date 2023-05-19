import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const CategoryShop = ({ toy }) => {
  return (
    <div>
      {console.log(toy)}

      <Tabs>
        <TabList>
          <Tab> {toy.name}</Tab>
          <Tab> {toy.name}</Tab>
        </TabList>

        <TabPanel>
          <img className="w-1/2" src="" alt="" />
          <h3>data coming</h3>
        </TabPanel>
        <TabPanel>
          <img className="w-1/2" src="" alt="" />
          <h3>data coming</h3>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default CategoryShop;
