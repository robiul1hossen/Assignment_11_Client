import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const toy = {
      customerName: name,
      date,
      email,
      img,
      service: title,
      serviceId: _id,
      price: price,
    };
    console.log(toy);
  };

  return (
    <div>
      <h2>Add a toy</h2>
      <form onSubmit={handleAddToy}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                defaultValue={user?.name}
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date </span>
              </label>
              <input type="date" name="date" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" defaultValue={user?.email} name="email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input type="text" defaultValue="price" name="price" className="input input-bordered" />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary btn-block" type="submit" value="Check Now " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
