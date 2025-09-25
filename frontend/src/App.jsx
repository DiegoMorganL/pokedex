import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-green-800">¡Hola Pokedex!</h1>
      <Pokemon />
    </div>
  )
}

export default App
