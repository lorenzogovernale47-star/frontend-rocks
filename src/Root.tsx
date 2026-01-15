import { useState, useEffect } from "react";
import { PokeAPI } from "./api";

export const Root = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    PokeAPI.listPokemons().then((data) => {
      setPokemons(
        data.results.map((item, idx) => ({
          id: idx + 1,
          name: item.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idx + 1}.png`
        }))
      );
    });
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemons.map((pokemon) => (
          <div
            key={pokemon.id}
            className="bg-white rounded-xl shadow-md flex flex-col items-center p-4 hover:shadow-xl transition transform hover:scale-105"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-24 h-24 mb-2"
            />

            <h3 className="capitalize font-semibold text-gray-800">
              {pokemon.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};
