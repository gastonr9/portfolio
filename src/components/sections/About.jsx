export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Java", "MySQL"];
  return (
    <section
      id="sobre-mi"
      data-section="sobre-mi"
      className="flex  max-w-5xl  mx-auto 
        h-full relative pt-25 pb-60"
    >
      <div className=" mx-auto px-4">
        <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-1 text-black/80 dark:text-white ">
          <svg
            className="size-6"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m7 5a2 2 0 1 1-4 0a2 2 0 0 1 4 0"
            />
          </svg>
          Sobre mí
        </h2>
        <div className=" p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition ">
          <p className=" mb-6">
            Me encanta trabajar con tecnologías web para construir interfaces
            limpias, responsivas y fáciles de usar. Actualmente, estoy
            desarrollando mis habilidades en HTML, CSS, JavaScript y frameworks
            como React para mejorar la experiencia de usuario y el rendimiento
            de las aplicaciones.
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className=" rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 px-3 py-1 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="flex  mb-6 text-xl font-semibold gap-x-3 text-black/80 dark:text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="m3.786 9.5l9 4.5l9-4.5l-9-4.5zm0 0V17m3-6v6.222c0 .348 2 1.778 6 1.778s6-1.374 6-1.778V11"
                />
              </svg>
              Educación
            </h3>
            <div className=" space-y-2 text-gray-800 dark:text-white">
              <div>
                <h4 className="font-semibold">
                  Técnico Superior en Desarrollo de Software
                </h4>
                <p>Instituto de Estudios Superiores de Santa Fe (2018-2021)</p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="flex  mb-6 text-xl font-semibold gap-x-3 text-black/80 dark:text-white ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7H5a2 2 0 0 0-2 2v4m5-6h8M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m0 0h3a2 2 0 0 1 2 2v4m0 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6m18 0s-4 2-9 2s-9-2-9-2m9-2h.01"
                />
              </svg>
              Experiencia laboral
            </h3>
            <div className="space-y-2 text-gray-800 dark:text-white">
              <div>
                <h4 className="font-semibold">
                  DevTeam | Desarrollador Web | Práctica (2018)
                </h4>
                <p>
                  Desarrollo y personalización de sitios web en WordPress,
                  mejorando experiencia de usuario y funcionalidad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
