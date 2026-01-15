import { useState, useEffect } from "react";
import { PokeAPI } from "./api";

export const Root = () => {
const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    PokeAPI.listPokemons().then((data) => {
      setPokemons(
        data.results.map((item, idx) => ({
          id: idx,
          name: item.name,
          image: ""
        }))
      );
    });
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};
