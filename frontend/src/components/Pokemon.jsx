import { useState } from "react";

export default function Pokemon() {
  const [id, setId] = useState(1);
  const [pokemon, setPokemon] = useState(null);

  const fetchPokemon = async () => {
    const res = await fetch(`http://localhost:5000/pokemon/${id}`);
    const data = await res.json();
    setPokemon(data);
  }

  return (
    <div className="p-4">
      <input
        type="number"
        value={id}
        onChange={(e) => setId(e.target.value)}
        className="border p-2 rounded"
      />
      <button
        onClick={fetchPokemon}
        className="bg-red-500 text-white px-4 py-2 ml-2 rounded"
      >
        Buscar
      </button>

      {pokemon && (
        <div className="mt-4 border p-4 rounded shadow-md bg-white">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <p>Altura: {pokemon.height}</p>
          <p>Peso: {pokemon.weight}</p>
        </div>
      )}
    </div>
  )
}
