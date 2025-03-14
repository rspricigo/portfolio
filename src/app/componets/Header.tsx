export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-evenly text-gray-800">
          <li>
            <a href="#">Meu Portfólio</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Admin</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
