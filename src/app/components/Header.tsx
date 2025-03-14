import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-evenly text-gray-800">
          <li>
            <Link
              href="/"
              className="text-lg font-semibold text-gray-600 hover:text-gray-800"
            >
              Meu Portfólio
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className="text-lg font-semibold text-gray-600 hover:text-gray-800"
            >
              Projetos
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className="text-lg font-semibold text-gray-600 hover:text-gray-800"
            >
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
