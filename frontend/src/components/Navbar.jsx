import { Menu } from "lucide-react";

export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-red-500 text-white px-6 py-3 flex justify-between items-center shadow-md z-50">
      
      {/* Botón hamburguesa */}
      <button
        onClick={toggleSidebar}
        className="p-2 rounded hover:bg-red-600 transition"
      >
        <Menu size={28} />
      </button>

      {/* Logo Pokémon */}
      <img
        src="/logo-pokemon.svg"
        alt="Pokémon Logo"
        className="h-10 md:h-12"
      />

      {/* Links de navegación */}
      <div className="flex space-x-6 text-sm font-semibold">
        <button className="hover:text-yellow-300 transition">Favoritos</button>
        <button className="hover:text-yellow-300 transition">Top Pokémon</button>
      </div>
    </nav>
  );
}
