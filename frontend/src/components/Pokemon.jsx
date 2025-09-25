import { useState } from "react";

export default function Pokemon() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    try {
      const res = await fetch(`http://localhost:5000/pokemon/${id}`);
      const data = await res.json();
      setPokemon(data);
    } catch (error) {
      console.error("Error al obtener Pokémon:", error);
    }
  };

  // Colores modernos según tipo principal
  const typeColors = {
    fire: "bg-red-400",
    water: "bg-blue-400",
    grass: "bg-green-400",
    electric: "bg-yellow-300",
    poison: "bg-purple-400",
    bug: "bg-lime-400",
    normal: "bg-gray-300",
    psychic: "bg-pink-400",
    fighting: "bg-orange-400",
    ice: "bg-cyan-200",
    dragon: "bg-indigo-400",
    dark: "bg-gray-700",
    fairy: "bg-pink-300",
    ghost: "bg-purple-700",
    ground: "bg-yellow-600",
    rock: "bg-gray-500",
    steel: "bg-gray-400",
    flying: "bg-sky-300",
  };

  const mainType = pokemon ? pokemon.types[0].type.name : "normal";
  const bgColor = typeColors[mainType] || "bg-gray-300";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-50 to-yellow-50 p-4">
      <h3 className="text-lg font-semibold text-gray-700 mb-3 tracking-wide">
        Ingresa el número de Pokédex
      </h3>
      {/* Input y Botón */}
      <div className="flex mb-6">
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="border rounded-l-lg p-2 w-24 text-center focus:outline-none focus:ring-2 focus:ring-red-500"
          min="1"
        />
        <button
          onClick={fetchPokemon}
          className="bg-red-500 text-white font-bold px-4 rounded-r-lg hover:bg-red-600 transition"
        >
          Buscar
        </button>
      </div>

      {/* Tarjeta Pokémon */}
      {pokemon && (
        <div className={`rounded-xl shadow-xl p-6 w-80 text-center transition-transform transform hover:scale-105 ${bgColor}`}>
          <h2 className="text-2xl font-bold capitalize mb-4 text-white">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto mb-4"
          />
          <div className="grid grid-cols-2 gap-2 text-left text-white font-semibold">
            <p>Altura: {pokemon.height}</p>
            <p>Peso: {pokemon.weight}</p>
            {pokemon.stats.map((stat) => (
              <p key={stat.stat.name}>
                {stat.stat.name}: {stat.base_stat}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
