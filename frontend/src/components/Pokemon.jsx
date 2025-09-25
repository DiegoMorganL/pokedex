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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-red-200 to-red-50 p-4">
      
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

      {/* Tarjeta del Pokémon */}
      {pokemon && (
        <div className="bg-white rounded-xl shadow-xl p-6 w-80 text-center transition-transform transform hover:scale-105">
          <h2 className="text-2xl font-bold capitalize mb-4">{pokemon.name}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            className="mx-auto mb-4"
          />
          <div className="grid grid-cols-2 gap-2 text-left">
            <p><span className="font-bold">Altura:</span> {pokemon.height}</p>
            <p><span className="font-bold">Peso:</span> {pokemon.weight}</p>
            {pokemon.stats.map((stat) => (
              <p key={stat.stat.name}>
                <span className="font-bold capitalize">{stat.stat.name}:</span> {stat.base_stat}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
