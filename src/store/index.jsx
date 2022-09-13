import { configureStore } from "@reduxjs/toolkit";
import trainer from "./slices/trainer.slice";
import isLoading from "./slices/isLoading.slice";
import isDark from "./slices/isDark.slice";
import itemPerPage from "./slices/itemPerPage.slice";
import pokemons from "./slices/pokemons.slice";
import types from "./slices/typesPokemon.slice";
import currentPage from "./slices/currentPage.slice";

//* Necesitamos almacenar globalmente el nombre del entrenador, si esta loading, isdark, los pokemones , numeros de item por pagina ,currentPage ,

export default configureStore({
  reducer: {
    trainer,
    isLoading,
    isDark,
    itemPerPage,
    pokemons,
    types,
    currentPage,
  },
});
