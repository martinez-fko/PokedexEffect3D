import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import Dropdown from "../components/Dropdown";
import InputControl from "../components/InputControl";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllTypesThunk } from "../store/slices/typesPokemon.slice";
import { setCurrentPage } from "../store/slices/currentPage.slice";
import {
  getAllPokemonsByTypeThunk,
  getAllPokemonsThunk,
  getPokemonByName,
} from "../store/slices/pokemons.slice";
import Pagination from "../components/Pagination";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const types = useSelector((state) => state.types);
  const trainer = useSelector((state) => state.trainer);
  const [selected, setSelected] = useState("All");
  const [currentNumber, setcurrentNumber] = useState(1);

  useEffect(() => {
    dispatch(getAllTypesThunk());
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const pokemon = e.target.search.value;
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    dispatch(getPokemonByName(url));
    dispatch(setCurrentPage(1));
    setcurrentNumber(1);
  };

  const changeCategory = (category, url) => {
    if (category === "All") {
      dispatch(getAllPokemonsThunk());
      setSelected("All");
    } else {
      setSelected(category);
      dispatch(getAllPokemonsByTypeThunk(url));
    }
    dispatch(setCurrentPage(1));
    setcurrentNumber(1);
  };

  const changeNumber = (number) => {
    setcurrentNumber(number);
  };

  const convertOptions = () => {
    const optionsType = [{ name: "All", id: "All" }];
    types.map((type) => {
      optionsType.push({ name: type.name, id: type.url });
    });
    return optionsType;
  };

  return (
    <main className="container">
      <div className="title">
        <h2>
          Welcome <span>{trainer}</span>, here you can find your favorite
          pokemon
        </h2>
        <button className="btn-back" onClick={() => navigate(-1)}>
          Log Out
        </button>
      </div>
      <section className="actions">
        <InputControl
          placeholder="Search Pokemon"
          btnName="search"
          submit={submit}
          size="300px"
        />
        <Dropdown
          options={convertOptions()}
          selected={selected}
          clic={changeCategory}
          size="300px"
        />
      </section>
      <Cards />
      <Pagination currentNumber={currentNumber} changeNumber={changeNumber} />
    </main>
  );
};

export default Home;
