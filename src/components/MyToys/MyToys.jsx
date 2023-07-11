import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyDetails from "../MyToyDetails/MyToyDetails";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  useTitle("My Toys");
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState(1);
  const handleSort = () => {
    setSort((prevSort) => (prevSort === 1 ? -1 : 1));
  };
  // console.log(sort);
  const token = localStorage.getItem("access-token");
  console.log(token);

  const url = `http://localhost:5000/allToy?sellerEmail=${user.email}&price=${sort}`;
  useEffect(() => {
    fetch(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/allToy/${id}`, {
          method: "DELETE",
          headers: {
            "content-type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");

              const remaining = myToys.filter((myToy) => myToy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="text-center my-6">
        <button className="btn btn-outline " onClick={handleSort}>
          {sort === 1 ? "Sort by Price (Asc)" : "Sort by Price (Desc)"}
        </button>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Image </th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Update</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {myToys.map((toy) => (
            <MyToyDetails key={toy._id} toy={toy} handleDelete={handleDelete}></MyToyDetails>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
