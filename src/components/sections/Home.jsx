import { handleEmail } from "../Mailto";

export const Home = () => {
  return (
    <section id="inicio" className=" flex pt-40 justify-center relative">
      <div className=" z-10 px-4 mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          Hola, Soy Gaston
        </h1>
        <p className="text-gray-400  mb-8 max-w-lg mx-auto text-lg">
          Soy un Desarrollador de Software apasionado por aprender y crear
          sitios web modernos y atractivos. Desde Santa Fe, Argentina.
        </p>
        <div className="flex items-center space-x-4">
          <a
            onClick={handleEmail}
            href="mailto:gastonhr.contacto@gmail.com"
            className="rounded-full border border-blue-500 text-white py-2 px-3 font-medium  relative  hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.3)] transition inline-flex items-center justify-center gap-2"
          >
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path>
              <path d="M3 6l9 6l9 -6"></path>
              <path d="M15 18h6"></path>
              <path d="M18 15l3 3l-3 3"></path>
            </svg>
            Contáctame
          </a>

          <a
            href="https://www.linkedin.com/in/gastonhr/"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="rounded-full border border-blue-500 text-white py-2 px-3 font-medium  relative  hover:-translate-y-0.5 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.3)] transition inline-flex items-center justify-center gap-2"
          >
            <svg
              class="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
            Linkedin
          </a>
        </div>
      </div>
    </section>
  );
};
