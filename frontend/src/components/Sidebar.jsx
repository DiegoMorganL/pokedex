export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-red-100 shadow-lg transform transition-transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="p-4">
        <h2 className="text-lg font-bold mb-4">Opciones</h2>
        <ul className="space-y-2">
          <li className="hover:bg-red-200 p-2 rounded cursor-pointer">Inicio</li>
          <li className="hover:bg-red-200 p-2 rounded cursor-pointer">Favoritos</li>
          <li className="hover:bg-red-200 p-2 rounded cursor-pointer">Top Pokémon</li>
        </ul>
        <button
          onClick={toggleSidebar}
          className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
        >
          Cerrar
        </button>
      </div>
    </aside>
  );
}
