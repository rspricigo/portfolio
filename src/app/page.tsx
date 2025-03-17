import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl">
          Bem Vindo ao meu <span className="text-blue-600">Portfólio!</span>
        </h1>
        <p className="mt-3 text-2xl">
          Comece a construir o seu portfólio profissional hoje!
        </p>

        <div className="flex flex-wrap items-center text-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href="/portfolio"
            className="p-6 mt-6 text-left border rounded-2xl hover:border-white hover:text-blue-600 focus:text-blue-600"
          >
            <h2 className="text-2xl font-semibold">Ver Portfólio</h2>
            <p className="mt-4 text-xl">
              Explore os projetos e trabalhos realizados.
            </p>
          </Link>

          <Link
            href="/admin"
            className="p-6 mt-6 text-left border rounded-2xl hover:border-white hover:text-blue-600 focus:text-blue-600"
          >
            <h2 className="text-2xl font-semibold">Area Administrativa</h2>
            <p className="mt-4 text-xl">Gerencie seu portfólio e projetos.</p>
          </Link>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center w-full bg-secondary px-20 mt-5">
        <div>
          <div className="w-full py-5 px-20">
            <h2 className="text-4xl font-semibold">Sobre Mim</h2>
            <p className="mt-4 text-xl text-justify">
              Sou um desenvolvedor web apaixonado por criar soluções inovadoras
              e com valor comercial valido para sempre ao infinito e alem lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, voluptates voluptatibus quod
              voluptate quae quidem quos quas nesciunt. Quisquam, quae. Quisquam
            </p>
          </div>
          <div className="w-full py-5 px-20 ">
            <h2 className="text-4xl font-semibold">Contato</h2>
            <p className="mt-4 text-xl text-justify">
              Entre em contato para discutir projetos, colaborações ou lorem
              ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, quibusdam, quia, voluptates voluptatibus quod
              voluptate quae quidem quos quas nesciunt. Quisquam, quae. Quisquam
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
