import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";
import {useSelector} from 'react-redux';
import Loading from "../components/Loading";

const MainLayout = () => {
  const isLoading = useSelector(state => state.isLoading)
  return (
    <>
    { isLoading && <Loading/> }
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
