export default function Navbar({ toggleSidebar }) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-red-500 text-white p-4 flex justify-between items-center shadow-md z-50">
      <h1 className="text-xl font-bold">Pokédex</h1>
      <button
        onClick={toggleSidebar}
        className="bg-white text-red-500 px-3 py-1 rounded hover:bg-gray-200 transition"
      >
        Menu
      </button>
    </nav>
  );
}
