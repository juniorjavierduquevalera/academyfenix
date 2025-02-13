import { FaCheckCircle } from "react-icons/fa";

const benefits = [
  {
    title: "LOS 3 SECRETOS",
    description:
      "Los 3 secretos con los que he conseguido posicionar mis 4 empresas en el mundo online y te contaré la forma más certera de generar flujo de efectivo abundante.",
  },
  {
    title: "NO NECESITAS SER...",
    description:
      "Te demostraré que no necesitas ser un experto de la tecnología para construir una empresa digital millonaria, empezar a captar clientes a través de internet y escalar tu negocio.",
  },
  {
    title: "EL MEJOR PRODUCTO",
    description:
      "La clave para lograr generar abundancia financiera, no es teniendo el mejor producto o trabajando más de 15 horas al día...",
  },
  {
    title: "CONTEXTO CORRECTO",
    description:
      "Necesitas tener el contexto correcto, tomar decisiones millonarias y sobre todo ¡tomar acción!",
  },
];

const BenefitsSection = () => {
  return (
    <section className="bg-gray-800 text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold">Beneficios Clave</h2>
        <p className="mt-2 text-lg text-gray-300">
          En Solo 2 Horas Descubre las Herramientas que Me Han Permitido{" "}
          <strong className="text-yellow-400">Generar Millones de Dólares</strong> Haciendo lo que Amo
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-lg shadow-lg relative"
            >
              <FaCheckCircle className="absolute top-4 right-4 text-green-400 text-xl" />
              <h3 className="text-xl font-bold text-yellow-400">
                {benefit.title}
              </h3>
              <p className="mt-2 text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition">
            ¡Quiero registrarme gratis AHORA!
          </button>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
