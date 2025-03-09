export const About = () => {
  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Java", "MySQL"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className=" text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          {""}
          Sobre mí
        </h2>
        <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
          <p className="text-gray-300 mb-6">
            Desarrollador apasionado con experiencia en la creación de
            aplicaciones web escalables y creación de soluciones innovadoras.
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
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 🏫 Educación </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong>Técnico Superior en Desarrollo de Software</strong> -
                Instituto de Estudios Superiores de Santa Fe (2018-2021)
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4"> 💼 Experiencia laboral </h3>
            <div className="space-y-4 to-gray-300">
              <div>
                <h4 className="font-semibold">
                  DevTeam | Desarrollador Web | Práctica (2018){" "}
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
