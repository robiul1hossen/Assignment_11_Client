import React from "react";
import Contact from "../Contact/Contact";
import BestSaler from "../home/Bestsaler/BestSaler";

const BestSalesToy = () => {
  return (
    <>
      <div className="bg-base-200 py-2 mt-40">
        <h2 className="font-semibold text-4xl text-center mt-36">Top 10 Best sales toys in our shop...</h2>
        <p className="w-1/2 mx-auto mb-9 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores porro minima dolorem modi quo est
          quod dolor cumque, vitae deserunt est quod dolor !
        </p>
        <div className="flex justify-center">
          <div className="h-96 carousel carousel-vertical rounded-box text-center">
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1503739171234-327ce271626f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1173&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1594787318286-3d835c1d207f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1654155917394-cc476faca27d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1584641911870-6196a92c1920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1447931958677-954446df5f70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1508896694512-1eade558679c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1532262018599-7083eccdb058?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1516055000302-a11419b8179f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1616850508559-12c5ae8662bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
            <div className="carousel-item h-full">
              <img src="https://images.unsplash.com/photo-1662105902186-41ecd230eb29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
            </div>
          </div>
        </div>
      </div>
      <BestSaler></BestSaler>
      <Contact></Contact>
    </>
  );
};

export default BestSalesToy;
