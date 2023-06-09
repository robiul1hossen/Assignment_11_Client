import React, { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("Add A Toy");
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const sellerName = form.name.value;
    const available_quantity = form.date.value;
    const price = form.price.value;
    const subcategory = form.category.value;
    const img = form.toyPhoto.value;
    const rating = form.rating.value;
    const toy_details = form.toy_details.value;
    const seller_details = form.seller_details.value;
    const sellerEmail = user?.email;

    const toy = {
      subcategory,
      sellerName,
      available_quantity,
      sellerEmail,
      img,
      price,
      rating,
      toy_details,
      seller_details,
    };

    fetch("https://mini-motors-server-robiul1hossen.vercel.app//allToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleAddToy}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                defaultValue={user?.displayName}
                placeholder="Name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity </span>
              </label>
              <input type="text" placeholder="Quantity" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" placeholder="Price" name="price" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input type="text" placeholder="Category" name="category" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input type="text" placeholder="Rating" name="rating" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Photo</span>
              </label>
              <input type="text" placeholder="Photo" name="toyPhoto" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Toy Details</span>
              </label>
              <input
                type="text"
                placeholder="Toy Details"
                name="toy_details"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Details</span>
              </label>
              <input
                type="text"
                placeholder="Seller Details"
                name="seller_details"
                className="input input-bordered"
              />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary btn-block" type="submit" value="Add Toy " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
