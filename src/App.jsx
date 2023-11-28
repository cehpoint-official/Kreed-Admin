import React, { useContext } from "react";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import { profile } from "./data"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

import "./styles/global.scss"
import Cricket from "./pages/Cricket/Cricket";
import Badminton from "./pages/Badminton/Badminton";
import Profile from "./pages/Profile/Profile";
import Posts from "./pages/Posts/Posts";
import User from "./pages/User/User";
import Setting from "./pages/SettingPage/Setting";
import SmMenu from "./components/smMenu/SmMenu";
import Login from "./pages/Login/Login";
import { AuthContext } from "./context/AuthContext";
import { Toaster } from 'react-hot-toast';
const App = () => {

  const {currentUser} = useContext(AuthContext)
  
  
  const RequireAuth =({children})=>{
    return currentUser ? (children) : <Navigate to="/"/>
  }
  const Layout = () => {
    return (
      <div className="main">
        <Toaster/>
        <Nav />
        <SmMenu/>

        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
           <Outlet/>
          </div>
        </div>

        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([

    {
      path:"/",
      element:  <Login/>

    },
    {
     path:"/",
     element: <RequireAuth><Layout/></RequireAuth>,
     children : [
     {
      path : "/home",
      element : <RequireAuth><Home/></RequireAuth>
     },
     {
      path : "/users",
      element : <RequireAuth><Users/></RequireAuth>
     },
     {
      path : "/posts",
      element : <RequireAuth><Posts/></RequireAuth>
     },
     {
      path : "/cricket",
      element : <RequireAuth><Cricket/></RequireAuth>
     },
     {
      path : "/badminton",
      element : <RequireAuth><Badminton/></RequireAuth>
     },
     {
      path : "/profile",
      element : <RequireAuth><Profile {...profile}/></RequireAuth>
     },
     {
      path : "/users/:id",
      element : <RequireAuth><User/></RequireAuth>
     },
     {
      path : "/setting",
      element : <RequireAuth><Setting/></RequireAuth>
     },
     
   
     ]
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
