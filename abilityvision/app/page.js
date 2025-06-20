

import Image from "next/image";
export default function Home() {
  return (
    <div className="grid grid-rows-[1fr_auto] items-center justify-items-center min-h-screen p-8 sm:p-20 bg-gradient-to-br from-blue-100 to-green-300 font-sans">
      <main className="flex flex-col gap-6 items-center text-center bg-white p-10 rounded-xl shadow-xl">

        <h1 className="text-3xl font-bold text-green-800">Universidad de las fuerzas Armadas (Espe)</h1>

        <p className="text-lg text-gray-700">
          <span className="font-semibold">Nombre:</span> Lisbeth Yupangui
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Carrera:</span> Ing. Software
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Asignatura:</span> Desarrollo web Avanzado
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Proyecto:</span> Ability Vision
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold">Proposito:</span> El propósito es facilitar el aprendizaje inclusivo, promoviendo autonomía,<br/> accesibilidad y participación activa de niños con discapacidad visual.
        </p>
      </main>

      <footer className="text-xs text-gray-600 mt-10">
        Proyecto Next.js - {new Date().getFullYear()}
      </footer>
    </div>
  );
}
