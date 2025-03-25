import { handleEmail } from "../MailTo";
export const Home = () => {
  return (
    <section
      id="inicio"
      className="container max-w-5xl  mx-auto pt-35 scroll-m-20 section w-full "
    >
      <div className=" px-4 max-w-xl ">
        <h1 className="text-4xl sm:text-5xl font-bold  tracking-tight text-gray-800 bg-clip-text  ">
          Hola, Soy Gaston
        </h1>
        <p className="  mt-6 max-w-lg tracking-tight text-xl text-gray-800 [&>strong]:text-blue-500 [&>strong]:font-semibold">
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
            className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-blue-500 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring  focus-visible:ring-offset-2 active:bg-black"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
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
            className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-blue-500 text-md hover:bg-gray-900 hover:border-gray-700 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-300 dark:hover:text-black group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring  focus-visible:ring-offset-2 active:bg-black"
          >
            <svg
              className="size-4"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
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
