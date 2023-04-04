import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import { ReactComponent as CrownLogo } from "../../assets/img/crown.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
