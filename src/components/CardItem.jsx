import axios from "axios";
import React, { useEffect, useState } from "react";
import "../assets/js/vanilla-tilt.min.js";
import { Link } from "react-router-dom";
const CardItem = ({ url }) => {
  const [pokemon, setPokemon] = useState({});

  VanillaTilt.init(document.querySelectorAll(".box"), {
    max: 25,
    speed: 400,
  });

  useEffect(() => {
    axios.get(url).then((res) => setPokemon(res.data));
  }, []);

  return (
    <div
      className={
        pokemon.types?.[0].type.name
          ? `box ${pokemon.types?.[0].type.name}`
          : "box"
      }
    >
      <h2 className="box__name">{pokemon.name}</h2>
      <Link to={`/detail/${pokemon.id}`} className="box__go">
        Pokedex
      </Link>
      <div className="box__circle"></div>
      {pokemon.sprites?.other["official-artwork"].front_default ? (
        <img
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="box__img"
        />
      ): (<img
        src='/img/desconocido.png'
        alt={pokemon.name}
        className="box__img"
      />)}

      <div className="abilities">
        <div className="rigth">
          <p>{pokemon.stats?.[0].stat?.name}</p>
          <p>{pokemon.stats?.[0].base_stat}</p>
          <p>{pokemon.stats?.[1].stat?.name}</p>
          <p>{pokemon.stats?.[1].base_stat}</p>
        </div>
        <div className="left">
          <p>{pokemon.stats?.[2].stat?.name} </p>
          <p>{pokemon.stats?.[2].base_stat}</p>
          <p>{pokemon.stats?.[5].stat?.name}</p>
          <p>{pokemon.stats?.[5].base_stat}</p>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
