import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
  return (
    <nav>
      <ul>
        <li className="logo">
          <Link to="/">Bookstore CMS</Link>
        </li>
        <li>
          <Link to="/books">BOOKS</Link>
        </li>
        <li>
          <Link to="/categories">CATEGORIES</Link>
        </li>
      </ul>
      <div className="oval">
        <AiOutlineUser className="user-icon" />
      </div>
    </nav>
  );
}

export default Navbar;
