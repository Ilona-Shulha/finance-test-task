import { Outlet, Link, NavLink } from 'react-router-dom';

import './Layout.scss';

export const Layout = () => {
  return (
    <div className="Layout">
      <header className="Layout__header">
        <Link to="/" className="Layout__header-link">
          Finance New
        </Link>
        <NavLink
          data-testid="main-link"
          to="/"
          className="Layout__link"
        >
          All tickers
        </NavLink>
      </header>
      <Outlet />
      <footer className="Layout__footer">
        © Finance New
      </footer>
    </div>
  );
};