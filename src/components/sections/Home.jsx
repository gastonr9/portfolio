import { handleEmail } from "../Mailto";
export const Home = () => {
  return (
    <section
      id="inicio"
      class="container max-w-5xl md:pt-35 mx-auto pt-35 scroll-m-20 section w-full"
    >
      <div className=" px-4 max-w-xl ">
        <h1 className="text-4xl sm:text-5xl font-bold  tracking-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent ">
          Hola, Soy Gaston
        </h1>
        <p className="  mt-6 max-w-lg tracking-tight text-xl text-gray-400 [&>strong]:text-blue-500 [&>strong]:font-semibold">
          Soy un <strong>Desarrollador de Software</strong> apasionado por
          aprender y crear sitios web modernos y atractivos. Desde Santa Fe,
          Argentina.
        </p>
        <nav className="flex flex-wrap gap-4 mt-8">
          <a
            onClick={handleEmail}
            href="mailto:gastonhr.contacto@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="border focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 hover:bg-blue-500  focus:outline-none gap-2 group inline-flex items-center justify-center max-w-fit px-4 py-1 rounded-full text-md hover:scale-99 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.5)]   border-white/10 hover:border-blue-500/30 text-white  "
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
            className="border focus-visible:outline-none focus-visible:ring focus-visible:ring-offset-2 hover:bg-blue-500  focus:outline-none gap-2 group inline-flex items-center justify-center max-w-fit px-4 py-1 rounded-full text-md hover:scale-99 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.5)]   border-white/10 hover:border-blue-500/30 text-white "
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
        </nav>
      </div>
    </section>
  );
};
