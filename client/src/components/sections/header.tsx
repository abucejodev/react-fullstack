import { Link } from "react-router-dom";
import Layout from "../layout";

type Path = {
  name: string;
  href: string;
};

const paths: Path[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blogs",
    href: "/blogs",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Header: Component = () => {
  return (
    <header className="bg-slate-100">
      <Layout.Area>
        <nav className="flex items-center gap-4 justify-between">
          <h1 className="font-bold uppercase text-2xl">FULLSTACK</h1>
          <ul className="flex items-center gap-4">
            {paths.map((path) => (
              <li key={path.name}>
                <Link to={path.href}>{path.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </Layout.Area>
    </header>
  );
};

export default Header;
