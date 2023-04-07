import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { ReactComponent as CrownLogo } from "../../assets/img/crown.svg";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";
import { UserContext } from "../../contexts/user.context";
import "./navigation.styles.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };

  return (
    <Fragment>
      <nav className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <ul className="nav-links-container">
          <li>
            <Link className="nav-link" to="/shop">
              Shop
            </Link>
          </li>
          <li>
            {currentUser ? (
              <span className="nav-link" onClick={signOutHandler}>
                Sign Out
              </span>
            ) : (
              <Link className="nav-link" to="auth">
                Sign In
              </Link>
            )}
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
