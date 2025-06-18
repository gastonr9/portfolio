import sublimo from "../../assets/images/sublimo-project.jpg";
export const Projects = () => {
  return (
    <section id="proyectos" className=" items-center justify-center pt-25">
      <div className=" max-w-5xl  mx-auto px-4">
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
              d="m8 8l-4 4l4 4m8 0l4-4l-4-4m-2-3l-4 14"
            />
          </svg>
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Sublimo App</h3>
            <p className=" mb-4">
              Sublimó es una plataforma web interactiva desarrollada para
              facilitar la visualización de diseños personalizados aplicados
              sobre productos como remeras, buzos, gorras y llaveros. Permite a
              usuarios visualizar en tiempo real sus creaciones sobre modelos
              3D, personalizar colores y fondos, añadir imágenes o texto, y
              descargar capturas del diseño como muestra visual.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["ReactJs", "Vite", "TailwindCSS", "TypeScript", "Firebase"].map(
                (tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
            <div className="flex justify-between items-center">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-300 transition-colors my-4"
              >
                Ver Proyecto →
              </a>
              <img
                src={sublimo}
                alt="sbulmio project"
                className="rounded-xl  w-52 "
              />
            </div>
          </div>
          <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Proximo</h3>
            <p className=" mb-4">
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
          <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2 ">Proximo</h3>
            <p className=" mb-4">
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
          <div className="p-6 rounded-xl border border-black/10 hover:-translate-y-1 hover:border-blue-500/30 dark:border-white/10 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
            <h3 className="text-xl font-bold mb-2">Proximo</h3>
            <p className=" mb-4">
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
