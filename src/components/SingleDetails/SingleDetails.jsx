import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleDetails = () => {
  const data = useLoaderData();
  console.log(data);
  const { category, price, available_quantity, img, rating, sellerName, sellerEmail, subcategory } = data;
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
              <b>Seller Details :</b> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum fugit
              voluptas id saepe! Quo voluptatum debitis, similique repellendus, a saepe placeat perferendis
              veritatis asperiores quaerat porro! Perferendis, cum iure maxime atque magni, ducimus reiciendis
              similique, saepe nihil corporis architecto voluptate!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p>
          <b>Toy Details :</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quae dolor,
          cum odio sint blanditiis aspernatur libero omnis expedita temporibus dicta aperiam tempora
          laboriosam ex iure? Similique, fugiat obcaecati dolores magni omnis quasi delectus dolorum ut cumque
          voluptate laborum aliquam deserunt ex expedita animi eum incidunt natus repellendus maxime id et
          facilis temporibus itaque. Provident voluptatem atque repellat vitae hic molestiae maxime quae
          accusantium. Esse natus odio provident et explicabo saepe dolorum aliquam, eum, voluptate
          repudiandae earum sit quae exercitationem voluptatibus officia doloribus perferendis? Non
          consequatur ad nostrum distinctio amet ex porro et cupiditate! Temporibus possimus aperiam omnis
          voluptatibus commodi.
        </p>
      </div>
    </>
  );
};

export default SingleDetails;
