export const Projects = () => {
  return (
    <section id="proyectos" className=" items-center justify-center pt-30">
      <div className=" max-w-5xl  mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          {" "}
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Proximo</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              harum, voluptatibus sunt dignissimos, quisquam hic at ipsa
              necessitatibus dicta culpa placeat. Quam laudantium nostrum
              magnam, explicabo eligendi natus magni ducimus!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Firebase"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Ver Proyecto →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Proximo</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              harum, voluptatibus sunt dignissimos, quisquam hic at ipsa
              necessitatibus dicta culpa placeat. Quam laudantium nostrum
              magnam, explicabo eligendi natus magni ducimus!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Firebase"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Ver Proyecto →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Proximo</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              harum, voluptatibus sunt dignissimos, quisquam hic at ipsa
              necessitatibus dicta culpa placeat. Quam laudantium nostrum
              magnam, explicabo eligendi natus magni ducimus!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Firebase"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Ver Proyecto →
              </a>
            </div>
          </div>
          <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Proximo</h3>
            <p className="text-gray-400 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              harum, voluptatibus sunt dignissimos, quisquam hic at ipsa
              necessitatibus dicta culpa placeat. Quam laudantium nostrum
              magnam, explicabo eligendi natus magni ducimus!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["React", "TailwindCSS", "Firebase"].map((tech, key) => (
                <span
                  key={key}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Ver Proyecto →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
