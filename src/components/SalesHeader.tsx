const SalesHeader = () => {
  return (
    <section className="bg-gray-50 text-black py-24 px-6 md:px-16 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/spirales.svg')" }}
      ></div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-3xl font-semibold leading-tight">
          TE VOY A COMPARTIR EXACTAMENTE LO QUE
        </h2>
        <h1 className="text-4xl md:text-6xl font-extrabold mt-2">
          <span className="text-black">
            YO HAGO PARA <span className="text-green-500">VENDER MILLONES</span>{" "}
            Y <span className="text-green-500">CREAR EQUIPOS EXITOSOS</span>
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-2xl text-gray-800">
          ¿Listo para transformar tu vida? Este es tu momento.{" "}
          <b>¡Reserva tu lugar antes de que los cupos se agoten!</b>
        </p>
      </div>
    </section>
  );
};

export default SalesHeader;
