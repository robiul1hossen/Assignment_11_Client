import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToyDetails from "../MyToyDetails/MyToyDetails";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/allToy?sellerEmail=${user.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [url]);

  const handleDelete = (id) => {
    const proceed = confirm("are you sere you want to delete");
    if (proceed) {
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
            alert("deleted successfully");
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  return (
    <div>
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
