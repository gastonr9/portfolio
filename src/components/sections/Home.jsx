import { handleEmail } from "../MailTo";
import gastonImg from "../../assets/gastonr.webp";
import resume from "../../../src/assets/CV_Gaston_Rodriguez_dev.pdf";
export const Home = () => {
  return (
    <section className="container max-w-5xl  mx-auto pt-35 scroll-m-20 section w-full ">
      <div className=" px-4 max-w-xl ">
        <div className="flex gap-4 mb-4">
          <img
            className="rounded-full shadow-lg size-16"
            src={gastonImg}
            alt="Gaston Rodriguez"
          ></img>
          <a
            href="https://linkedin.com/in/gastonhr"
            target="_blank"
            rel="noopener"
            className="flex items-center transition md:justify-center md:hover:scale-105"
          >
            <div className="flex items-center ">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm text-green-800 bg-green-100 rounded-full cursor-pointer dark:bg-gray-800 dark:text-white/80 backdrop-blur-3xl whitespace-nowrap">
                  Disponible para trabajar
                </div>
              </span>
            </div>
          </a>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-800 dark:text-white bg-clip-text">
          Hola, Soy Gaston
        </h1>
        <p className="mt-6 max-w-lg tracking-tight text-xl text-gray-800 dark:text-gray-300 [&>strong]:text-blue-500 [&>strong]:font-semibold">
          Soy un <strong>Desarrollador de Software</strong> enfocado en crear
          sitios web modernos y atractivos. Desde Santa Fe, Argentina.
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
          <a
            href={resume}
            download="CV_Gaston_Rodriguez_dev"
            type="application/pdf"
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
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
              <path d="M7 11l5 5l5 -5" />
              <path d="M12 4l0 12" />
            </svg>
            Descargar CV
          </a>
        </nav>
      </div>
    </section>
  );
};
