import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./components/Main/Main.jsx";
import Login from "./components/Login/Login.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Banner from "./components/home/Banner/Banner.jsx";
import Blog from "./components/Blog/Blog.jsx";
import AllToys from "./components/AllToys/AllToys.jsx";
import MyToys from "./components/MyToys/MyToys.jsx";
import AddToy from "./components/AddToy/AddToy.jsx";
import UpdateToy from "./components/UpdateToy/UpdateToy.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import PrivateRoute from "./components/ProvateRoute/PrivateRoute.jsx";
import SingleDetails from "./components/SingleDetails/SingleDetails.jsx";
import Error from "./components/Error/Error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch(`http://localhost:5000/allToys`),
      },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/addToy",
        element: (
          <PrivateRoute>
            <AddToy></AddToy>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <Signup></Signup>,
      },
      {
        path: "allToys/:id",
        element: (
          <PrivateRoute>
            <SingleDetails></SingleDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: (
          <PrivateRoute>
            <UpdateToy></UpdateToy>
          </PrivateRoute>
        ),
        loader: ({ params }) => fetch(`http://localhost:5000/allToy/${params.id}`),
      },
      {
        path: "*",
        element: <Error></Error>,
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl  mx-auto">
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </React.StrictMode>
  </div>
);
