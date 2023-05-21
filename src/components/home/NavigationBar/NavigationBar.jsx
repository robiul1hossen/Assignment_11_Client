import React, { useContext } from "react";
import "./NavigationBar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import useTitle from "../../../hooks/useTitle";
const NavigationBar = () => {
  const { logOut, user } = useContext(AuthContext);
  useTitle("Home");
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("sign out successfull");
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="navbar bg-base-100 sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to="/allToys">All Toys</Link>
              </li>
              {user ? (
                <li>
                  <Link to="/myToys">My Toys</Link>
                </li>
              ) : (
                ""
              )}
              {user ? (
                <li>
                  <Link to="/addToy">Add A Toy</Link>
                </li>
              ) : (
                ""
              )}
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Mini Motors</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/allToys">All Toys</Link>
            </li>
            {user ? (
              <li>
                <Link to="/myToys">My Toys</Link>
              </li>
            ) : (
              ""
            )}
            {user ? (
              <li>
                <Link to="/addToy">Add A Toy</Link>
              </li>
            ) : (
              ""
            )}
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        {user ? (
          <>
            <div className="navbar-end ">
              {
                <>
                  <div className="main-div">
                    <p className="display-name">{user.displayName}</p>
                    <img
                      className="profileImg ms-auto"
                      style={{
                        width: "50px",
                        height: "50px",
                        lineHeight: "50px",
                        borderRadius: "50%",
                        marginRight: "20px",
                      }}
                      src={user?.photoURL}
                      alt=""
                    />
                  </div>
                </>
              }
              <Link onClick={handleLogOut} className="btn" to="/login">
                Log Out
              </Link>
            </div>
          </>
        ) : (
          <div className="navbar-end">
            <Link className="btn" to="/login">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
