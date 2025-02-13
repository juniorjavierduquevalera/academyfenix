"use client";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 p-6 flex flex-col md:flex-row justify-center items-center gap-6 shadow-md">
      <div className="flex items-center">
        <Image src="/adademy-fenix.png" alt="Logo" width={80} height={80} />
      </div>
      <div className="hidden md:flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl">
        <button className="bg-green-500 text-white text-lg font-bold w-full md:w-1/2 py-4 rounded-xl hover:bg-green-600 transition">
          César Escobar
        </button>
        <button className="bg-green-500 text-white text-lg font-bold w-full md:w-1/2 py-4 rounded-xl hover:bg-green-600 transition">
          Información
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
