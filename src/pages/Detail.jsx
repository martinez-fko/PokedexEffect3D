import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../assets/css/detail.css'
import ProgressBar from "../components/ProgressBar";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState({});
  const getTypes = [];
  const navigate = useNavigate()

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
      .then((res) => setPokemon(res.data));
  }, []);


  const types = () => {
    pokemon.types?.map((type) => {
      getTypes.push(type.type.name);
    });
  };
  types();

  const back = () => {
    navigate(-1)
  }


  return (
    <div className="detail">
      
      <header className={ pokemon.types?.[0].type.name ? `detail-box ${pokemon.types?.[0].type.name}` : "detail-box" }  >
        <img src={
                pokemon.sprites?.other["official-artwork"].front_default
                  ? pokemon.sprites?.other["official-artwork"].front_default
                  : pokemon.sprites?.front_default
                  ? pokemon.sprites?.front_default
                  : "/img/desconocido.png"
              } alt="" />
      </header>
      <main>
        <h2># {pokemon.id}</h2>
        <h2>{pokemon.name}</h2>
        <div className="features">
          <div>
            <p>Weight</p>
            <p>{pokemon.weight}</p>
          </div>
          <div>
            <p>Height</p>
             <p>{pokemon.height}</p>
            </div>
        </div>
        <section className="types-abilities">
          <div>
            <h2>Type</h2>
            {pokemon.types?.map((type) => (
              <button className={type.type.name} key={type.type.name}>{type.type.name}</button>
            ))}
          </div>
          <div>
            <h2>Abilities</h2>
            {pokemon.abilities?.map((ability) => (
              <button className="abilities" key={ability.ability.name}>{ability.ability.name}</button>
            ))}
          </div>
        </section>
        <section className="stat-base">
              { pokemon.stats?.map( stat => ( 
                <ProgressBar 
                key={stat.stat.name} 
                title={stat.stat.name} 
                percentage={stat.base_stat} 
                color={ pokemon.types?.[0].type.name ? `detail-box ${pokemon.types?.[0].type.name}` : "detail-box" }
                max={150}
                />
              ))}
        </section>
      </main>
    </div>
  );
};

export default Detail;
