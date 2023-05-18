import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NavigationBar from "./components/home/NavigationBar/NavigationBar.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavigationBar></NavigationBar>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <div className="max-w-screen-xl  mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
);
