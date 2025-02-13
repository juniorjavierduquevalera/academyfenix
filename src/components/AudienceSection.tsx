"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const AudienceSection = () => {
  return (
    <section className="bg-gray-900 text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          ¿PARA QUIÉN ES PERFECTO ESTE <span className="text-green-500">WEBINAR</span>?
        </h2>     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">          
          {[
            "VENDEDORES",
            "EMPRENDEDORES",
            "PROFESIONALES",
            "PADRES",
            "EMPRESARIOS",
            "ESTUDIANTES",
          ].map((item, index) => (
            <div key={index} className="bg-gray-800 px-6 py-4 flex items-center gap-3 rounded-lg text-lg">
              <FaCheckCircle className="text-green-400" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 lg:mt-6">
          <div className="bg-gray-800 px-6 py-4 flex lg:justify-center items-center gap-3 rounded-lg text-lg lg:w-full">
            <FaCheckCircle className="text-green-400" />
            CREADORES
          </div>
        </div>

        {/* Botón CTA */}
        <div className="mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
            QUIERO SER PARTE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
