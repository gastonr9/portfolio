export const Home = () => {
  return (
    <section id="home" className=" flex pt-35 justify-center relative">
      <div className="text-center z-10 px-4">
        <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          Hola, Soy Gaston Rodriguez
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Soy un desarrollador full-stack al que le encanta crear aplicaciones
          web limpias y escalables. Mi objetivo es crear soluciones que ofrezcan
          un rendimiento excepcional y una experiencia de usuario agradable.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="#projects"
            className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px-rgba(59,130,246,0.4)]"
          >
            Ver Proyectos
          </a>
          <a
            href="#projects"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px-rgba(59,130,246,0.2)] hover:bg-blue-500/10"
          >
            Contáctame
          </a>
        </div>
      </div>
    </section>
  );
};
