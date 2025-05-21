import { Link } from 'react-router-dom';

const Nav = ({ search, setSearch }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">

        <form className="d-flex me-auto" onSubmit={(e) => e.preventDefault()}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Posts"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/post">Post</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        </ul>

      </div>
    </nav>
  );
};

export default Nav;
