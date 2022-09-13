import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllPokemonsThunk } from "../store/slices/pokemons.slice";
import CardItem from "./CardItem";
import "../assets/css/card.css";

const Cards = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const currentPage = useSelector((state) => state.currentPage);
  const itemPerPage = useSelector((state) => state.itemPerPage);

  useEffect(() => {
    dispatch(getAllPokemonsThunk());
  }, []);

  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;
  const currentListPage = pokemons.slice(firstIndex, lastIndex);

  return (
    <div className="container-card">
      {currentListPage.map((pokemon) => (
        // <div key={pokemon.name}>{pokemon.name}</div>
        <CardItem
          key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
        />
      ))}
    </div>
  );
};

export default Cards;
