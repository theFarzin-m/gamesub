import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import AOS from "aos";

import store from "./store";

import Home from "./page/home/Home";
import Details from "./page/details/Details";
import Applayout from "./ui/Applayout";
import Shop from "./page/Shop/Shop";
import Profile from "./page/account/Profile";
import Login from "./page/account/Login";
import Dashboard from "./page/account/Dashboard";
import EditeProfile from "./page/account/EditeProfile";
import Orders from "./page/account/Orders";
import Downloads from "./page/account/Downloads";
import Wallet from "./page/account/Wallet";
import SerialNumbers from "./page/account/SerialNumbers";
import NotFound from "./page/errorpages/NotFound";
import OnPageChange from "./ui/OnPageChange";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <OnPageChange />
        <Routes>
          <Route path="login" element={<Login />} />
          <Route element={<Applayout />}>
            <Route path="/" element={<Home />} />
            <Route path="shop/:id" element={<Details />} />
            <Route path="shop/" element={<Shop />} />
            <Route path="profile" element={<Profile />}>
              <Route path="dashbord" element={<Dashboard />} />
              <Route path="orders" element={<Orders />} />
              <Route path="downloads" element={<Downloads />} />
              <Route path="serial-numbers" element={<SerialNumbers />} />
              <Route path="wallet" element={<Wallet />} />
              <Route path="edite" element={<EditeProfile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
