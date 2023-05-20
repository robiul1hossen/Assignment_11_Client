import { useLoaderData } from "react-router-dom";

const AddToy = () => {
  const { _id, price, available_quantity } = useLoaderData();
  console.log(_id);

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const available_quantity = form.date.value;
    const price = form.price.value;
    const toy_details = form.toy_details.value;

    const toy = {
      available_quantity,
      price,
      toy_details,
    };
    console.log(toy);

    fetch(`https://mini-motors-server.vercel.app/allToy/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(toy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("toy added successfully");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleUpdateToy}>
        <div className="card-body">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Quantity </span>
              </label>
              <input
                type="text"
                placeholder="Quantity"
                defaultValue={available_quantity}
                name="date"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input type="text" defaultValue={price} name="price" className="input input-bordered" />
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
          </div>
          <div className="form-control mt-6">
            <input className="btn btn-primary btn-block" type="submit" value="Update Now " />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddToy;
