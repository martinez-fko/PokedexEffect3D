import React, { useState } from "react";
import Dropdown from "../components/Dropdown";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setItemPerPage } from "../store/slices/itemPerPage.slice";
import { setIsDark } from "../store/slices/isDark.slice";
import {setCurrentPage} from '../store/slices/currentPage.slice';

const Config = () => {
  const itemPerPage = useSelector((state) => state.itemPerPage);
  const isDark = useSelector((state) => state.isDark);
  const options = [
    { id: 3, name: 3 },
    { id: 6, name: 6 },
    { id: 8, name: 8 },
    { id: 10, name: 10 },
    { id: 16, name: 16 },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clic = (number) => {
    dispatch(setItemPerPage(number));
    dispatch(setCurrentPage(1))
  };

  const modeDark = () => {
    const body = document.querySelector("body");
    body.classList.toggle("dark");
    dispatch(setIsDark(!isDark));
  };

  return (
    <div className="config">
      <div className="config__buttons">
        <h1 className="config__title">Configuration</h1>
        <h2>Item per page</h2>
        <Dropdown options={options} selected={itemPerPage} clic={clic} />
        <br />
        <h2>Mode Dark</h2>
        <div className="check-dark" onClick={modeDark}>
          <div className={`check-icon ${isDark && "active"}`}>
            <i className="bx bx-moon"></i>
            <i className="bx bxs-sun"></i>
          </div>
        </div>
        <button className="btn-back" onClick={() => navigate(-1)}>
          Back
        </button>
      </div>
    </div>
  );
};

export default Config;
