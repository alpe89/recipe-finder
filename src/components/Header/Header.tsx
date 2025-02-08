import { Link } from "@tanstack/react-router";
import { Logo } from "@components/Logo/Logo";

const Header = () => {
  return (
    <header className="bg-brand text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
          <Logo />
          <span>Recipe Pilot</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                to="/favourites"
                className="hover:text-secondary transition-colors"
              >
                Favourites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.displayName = "Header";

export { Header };
