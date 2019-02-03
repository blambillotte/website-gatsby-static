import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Nav = () => (
  <nav className="nav side-nav">
    <ul>
      <li>
        <Link to="/" activeClassName="is-active" exact={true}>
          <FontAwesomeIcon icon={['fa', 'home']} />
          <span className="nav-hide">
            Home
          </span>
        </Link>
      </li>

      <li>
        <Link to="/portfolio" activeClassName="is-active" exact={true}>
          <FontAwesomeIcon icon={['fa', 'code']} />
          <span className="nav-hide">
            Portfolio
          </span>
        </Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
