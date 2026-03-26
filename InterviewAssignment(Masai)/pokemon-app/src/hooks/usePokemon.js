import { useState } from "react";
import  pokemons  from "../data";

export const usePokemon = () => {
  const [index, setIndex] = useState(0);

  const nextPokemon = () => {
    if (index < pokemons.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevPokemon = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const selectPokemon = (e) => {
    const selectedIndex = pokemons.findIndex(
      (p) => p.name === e.target.value
    );
    setIndex(selectedIndex);
  };

  return {
    pokemon: pokemons[index],
    index,
    nextPokemon,
    prevPokemon,
    selectPokemon,
    isFirst: index === 0,
    isLast: index === pokemons.length - 1,
    pokemons
  };
};