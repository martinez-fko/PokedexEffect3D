import React from "react";
import InputControl from "../components/InputControl";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTrainer } from "../store/slices/trainer.slice";
import { setCurrentPage } from "../store/slices/currentPage.slice";


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (e) => {
    e.preventDefault();
    const trainer = e.target.search.value;
    dispatch(setTrainer(trainer));
    dispatch(setCurrentPage(1));
    navigate("/pokedex");
  };

  return (
    <div className="login">
      <img src="/img/trainer.webp" alt="Trainer" />
      <InputControl
        placeholder="input your name"
        btnName="go"
        submit={submit}
        size="250px"
      />
    </div>
  );
};

export default Login;
