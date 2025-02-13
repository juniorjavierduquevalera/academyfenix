"use client";
import React, { useState } from "react";

const MarketingSection = () => {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    whatsapp: "",
    email: "",
    termsAccepted: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 via-gray-800 to-black text-white py-12 px-6 md:px-16">    
      <div className="max-w-6xl mx-auto text-center md:text-left mb-12">
      <h2 className="text-4xl md:text-5xl font-extrabold text-center md:text-left">
        Descubre las <span className="text-green-500">ESTRATEGIAS DE VENTAS</span> que los Mejores Cerradores Usan para
        Triplicar sus Ingresos y Liderar con Impacto
      </h2>
      <p className="mt-4 text-2xl text-gray-300 text-center md:text-left">
        Únete a este <strong className="text-green-500">Webinar GRATUITO</strong> y aprende cómo cerrar
        ventas de alto valor, construir equipos de alto rendimiento y
        desbloquear tu máximo potencial en tiempo récord.
      </p>
    </div>   
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 items-center"> 
        <div className="w-full lg:w-3/5">
          <iframe
            className="w-full aspect-video rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/JHxICWE25HU"
            title="Técnicas de Venta"
            allowFullScreen
          ></iframe>
        </div> 
        <div className="relative w-full lg:w-2/5">         
          <div className="absolute -inset-2 rounded-lg blur-lg bg-white opacity-50"></div>         
          <div className="relative z-10 bg-black bg-opacity-80 p-8 rounded-lg shadow-lg border border-gray-500">
            <h3 className="text-green-500 text-2xl font-extrabold text-center leading-tight">
              FÉNIX ACADEMY <br />
              <span className="text-white">WEBINAR DE VENTAS</span>
            </h3>
            <form className="mt-6 flex flex-col gap-4">
              <div className="flex flex-col">
                <label htmlFor="nombre" className="text-gray-300 font-semibold">
                  Nombre *
                </label>
                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  placeholder="Escribe tu nombre"
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="apellido" className="text-gray-300 font-semibold">
                  Apellido *
                </label>
                <input
                  id="apellido"
                  type="text"
                  name="apellido"
                  placeholder="Escribe tu apellido"
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="whatsapp" className="text-gray-300 font-semibold">
                  WhatsApp de 10 dígitos *
                </label>
                <input
                  id="whatsapp"
                  type="text"
                  name="whatsapp"
                  placeholder="Ej: 5551234567"
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-300 font-semibold">
                  Correo Electrónico *
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Ej: usuario@email.com"
                  className="p-3 rounded bg-gray-800 text-white placeholder-gray-400 focus:ring-2 focus:ring-green-500"
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  name="termsAccepted"
                  onChange={handleChange}
                  className="w-5 h-5 text-green-500"
                />
                <label htmlFor="termsAccepted" className="text-sm text-gray-300">
                  Acepto los términos y condiciones
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-4 rounded-lg text-lg transition leading-tight text-center"
              >
                ¡SÍ, QUIERO REGISTRARME <br /> AL EVENTO PRESENCIAL!
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
