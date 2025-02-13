import React from "react";
import { FaCheckSquare } from "react-icons/fa";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white text-gray-900 pt-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2">
          <Image
            src="/cesar-escobar.png"
            alt="César Escobar"
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900">
            ACERCA DE MÍ
          </h2>
          <h3 className="text-2xl mt-2">
            Mi nombre es{" "}
            <span className="font-extrabold text-blue-800">César Escobar.</span>
          </h3>
          <p className="mt-4 text-lg">
            ¡Prepárate para transformar tus ventas y tus resultados!{" "}
            <strong> Soy César Escobar,</strong> empresario, autor e
            inversionista, y quiero invitarte a un
          </p>
          <p className="mt-2 text-xl font-bold text-blue-800">
            WEBINAR GRATUITO
          </p>
          <p className="mt-2 text-lg">
            donde te compartiré estrategias probadas y fórmulas que he
            perfeccionado a lo largo de mi carrera.
          </p>
          <p className="mt-2 text-lg font-semibold underline">
            En este evento, aprenderás:
          </p>

          <ul className="mt-4 space-y-3">
            <li className="flex items-start gap-3">
              <FaCheckSquare className="text-green-600 text-2xl mt-1" />
              <p className="text-lg">
                <span className="font-semibold">Cómo dominar</span> el arte de
                las ventas para llevar tu facturación al siguiente nivel.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckSquare className="text-green-600 text-2xl mt-1" />
              <p className="text-lg">
                <span className="font-semibold">Estrategias clave</span> para
                liderar con impacto y construir relaciones que generen
                resultados.
              </p>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckSquare className="text-green-600 text-2xl mt-1" />
              <p className="text-lg">
                <span className="font-semibold">Los principios esenciales</span>{" "}
                para superar cualquier límite y alcanzar tus metas más
                ambiciosas.
              </p>
            </li>
          </ul>
          <p className="mt-4 text-lg">
            Si estás listo para salir de tu zona de confort y lograr resultados
            increíbles, este webinar es para ti.
          </p>
          <p className="mt-4 text-xl font-extrabold">
            ¡Reserva tu lugar ahora y empieza a construir el éxito que mereces!
          </p>
          <div className="mt-6">
            <button className="bg-yellow-600 hover:bg-yellow-700 text-2xl text-white font-extrabold py-4 px-8 rounded-lg transition">
              ¡Quiero registrarme{" "}
              <span className="underline">GRATIS AHORA!</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
