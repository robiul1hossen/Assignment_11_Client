import React from "react";
import "./banner.css";
import ShopByCategories from "../../ShopByCategories/ShopByCategories";
import ClientReview from "../../ClientReview/ClientReview";
import BestSalesToy from "../../BestSalesToy/BestSalesToy";

const Banner = () => {
  return (
    <div>
      <div className="max-h-fit my-5 relative">
        <img
          className="rounded-xl"
          src="https://i.ibb.co/r2C18NW/mohit-suthar-d-Zy-Pczy-Mub-M-unsplash.jpg"
          alt=""
        />

        <div className="banner-text rounded-xl absolute top-0 left-0 bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] border w-full text-white h-full">
          <div className="flex ms-4 lg:justify-center items-center h-full">
            <div className="lg:space-y-4" data-aos="fade-up-right">
              <p className="gl:text-3xl">TOP BRANDS 2023</p>
              <h4 className="font-semibold text-xl lg:text-5xl">MODERN-CLASSIC</h4>
              <h2 className="font-bold text-2xl lg:text-7xl">INCREDIBLE </h2>
              <p className="hidden lg:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam <br /> molestias esse totam ipsum
                nisi? Ad quisquam harum libero <br /> sed soluta. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Minima, earum?
              </p>
              <button className="btn btn-primary"> Visit Our Shop</button>
            </div>
          </div>
        </div>
      </div>
      {/* Gallery section */}
      <div>
        <h1 className="font-bold text-4xl text-center  mt-20">Our toy Gallery</h1>
        <p className="text-center mb-10 w-1/2 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ullam repellat autem a modi dicta
          doloribus cumque laborum veniam quisquam!
        </p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src="https://i.ibb.co/fXfcWCX/nick-xc-Rt6-KM5s04-unsplash.jpg" alt="" />
        <img src="https://i.ibb.co/T1jtGWq/sandy-millar-nu-S2-GDp-CDo-I-unsplash.jpg" alt="" />
        <img src="https://i.ibb.co/Z8v7Pr6/gimmel-magaway-h-CIPLW9-Cl-Og-unsplash.jpg" alt="" />
        <img src="https://i.ibb.co/tYX5Tn8/gustavo-S-W9v-DL5wh-U-unsplash.jpg" alt="" />
        <img src="https://i.ibb.co/vhxjc4H/uday-tadphale-Cw-Mg-Shbz-Brc-unsplash.jpg" alt="" />
        <img src="https://i.ibb.co/vqJ3q5S/haseeb-modi-Da-F4-Fo-Y0a-KA-unsplash.jpg" alt="" />
        <img
          src="https://i.ibb.co/2NMbqTJ/haseeb-modi-AU3o-Ye-Ek-W7k-unsplash.jpg
"
          alt=""
        />
        <img src="https://i.ibb.co/v35M6vz/atish-sewmangel-NYb-Tdr-Bh740-unsplash.jpg" alt="" />
        <img src="https://i.ibb.co/ykYDGTN/chris-king-Vq-Lyo-Rjhiss-unsplash.jpg" alt="" />
      </div>
      <ShopByCategories></ShopByCategories>
      {/* Clients Words */}
      <ClientReview></ClientReview>
      <BestSalesToy></BestSalesToy>
      <div></div>
    </div>
  );
};

export default Banner;
