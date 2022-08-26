import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul className="logo">
        <Link to="/">Bookstore CMS</Link>
        <li>
          <Link to="/books">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
