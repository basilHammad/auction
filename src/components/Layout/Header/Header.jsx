import { Link } from "react-router-dom";
import stl from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../store/actions/userACtions";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const isLoggedIn = user?.token ? true : false;

  return (
    <header className={stl.header}>
      <div className={stl.container}>
        <Link to="/">
          <strong className={stl.logo}>UNI Auction</strong>
        </Link>

        <nav>
          <ul>
            <li>
              <Link to="/colleges">Colleges</Link>
            </li>

            {!isLoggedIn ? (
              <>
                <li>
                  <Link to="/user/login">Login</Link>
                </li>
                <li>
                  <Link to="/user/register">Sign Up</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/product/add">Add Product</Link>
                </li>

                <li>
                  <button onClick={() => dispatch(logout())}>Log Out</button>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
